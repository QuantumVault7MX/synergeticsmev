import { AppConfig } from '../types';

const STORAGE_KEY = 'richads_click_id';

/**
 * Extracts click_id from URL query parameters (or falls back to stored value).
 * Standard parameter names supported: click_id, clickid, sub_id, token, cid, or customParam.
 */
export function extractAndStoreClickId(customParamName?: string): string {
  if (typeof window === 'undefined') return '';

  const params = new URLSearchParams(window.location.search);
  const possibleKeys = [
    customParamName,
    'key',
    'click_id',
    'clickid',
    'sub_id',
    'token',
    'cid',
    'richads_id',
  ].filter((k): k is string => Boolean(k));

  for (const key of possibleKeys) {
    const value = params.get(key);
    if (value && value.trim()) {
      const cleanValue = value.trim();
      try {
        localStorage.setItem(STORAGE_KEY, cleanValue);
        sessionStorage.setItem(STORAGE_KEY, cleanValue);
      } catch {
        // Ignore storage errors in restricted environments
      }
      return cleanValue;
    }
  }

  return getStoredClickId();
}

/**
 * Retrieves the currently saved RichAds click_id from storage.
 */
export function getStoredClickId(): string {
  if (typeof window === 'undefined') return '';
  try {
    return localStorage.getItem(STORAGE_KEY) || sessionStorage.getItem(STORAGE_KEY) || '';
  } catch {
    return '';
  }
}

/**
 * Manually set/override the stored RichAds click_id (useful for testing or manual input).
 */
export function setStoredClickId(clickId: string): void {
  if (typeof window === 'undefined') return;
  try {
    if (clickId) {
      localStorage.setItem(STORAGE_KEY, clickId);
      sessionStorage.setItem(STORAGE_KEY, clickId);
    } else {
      localStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Ignore storage errors
  }
}

export interface PostbackResult {
  success: boolean;
  url: string;
  clickId: string;
  event: string;
  timestamp: string;
  error?: string;
}

/**
 * Sends a S2S / Client postback request to RichAds (or configured ad network).
 * @param config AppConfig containing postback settings
 * @param event Event type, e.g. 'conversion', 'lead', 'install', 'deposit'
 * @param overrideClickId Optional explicit click ID override
 */
export async function sendRichAdsPostback(
  config: AppConfig,
  event: string = 'conversion',
  overrideClickId?: string
): Promise<PostbackResult> {
  const timestamp = new Date().toISOString();

  if (config.enableRichAdsPostback === false) {
    console.log('[RichAds Postback] Postback disabled in configuration');
    return {
      success: false,
      url: '',
      clickId: '',
      event,
      timestamp,
      error: 'Postback disabled in configuration',
    };
  }

  const template = config.richAdsPostbackUrl || 'https://xml.richads.com/postback?click_id={click_id}&event={event}';
  const clickId = overrideClickId || getStoredClickId() || extractAndStoreClickId(config.richAdsParamName) || 'TEST_CLICK_ID';

  // Construct target URL by replacing placeholders
  let targetUrl = template
    .replace(/\{click_id\}/gi, encodeURIComponent(clickId))
    .replace(/\{clickid\}/gi, encodeURIComponent(clickId))
    .replace(/\{key\}/gi, encodeURIComponent(clickId))
    .replace(/\{sub_id\}/gi, encodeURIComponent(clickId))
    .replace(/\{token\}/gi, encodeURIComponent(clickId))
    .replace(/\{event\}/gi, encodeURIComponent(event))
    .replace(/\{action\}/gi, encodeURIComponent(event))
    .replace(/\{status\}/gi, encodeURIComponent(event))
    .replace(/\{payout\}/gi, '100')
    .replace(/\{price\}/gi, '100');

  // If the template didn't contain placeholders but has click_id/key format
  if (!template.includes('{click_id}') && !template.includes('{clickid}') && !template.includes('{key}') && !targetUrl.includes(clickId)) {
    const separator = targetUrl.includes('?') ? '&' : '?';
    targetUrl += `${separator}key=${encodeURIComponent(clickId)}&action=${encodeURIComponent(event)}`;
  }

  console.log(`[RichAds Postback] Sending postback for event "${event}" with click_id "${clickId}":`, targetUrl);

  try {
    // 1. Try Serverless Proxy on the same domain (to bypass ad blockers)
    if (typeof window !== 'undefined' && window.location) {
      try {
        const proxyUrl = `${window.location.origin}/api/postback`;
        const response = await fetch(proxyUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ url: targetUrl }),
        });
        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            console.log('[RichAds Postback] Successfully sent postback via Serverless Proxy:', targetUrl);
            return { success: true, url: targetUrl, clickId, event, timestamp };
          }
        }
      } catch (proxyErr) {
        console.warn('[RichAds Postback] Serverless proxy postback failed, falling back to client-side:', proxyErr);
      }
    }

    // 2. Client-Side Fallback: Try Beacon API (most reliable for outgoing navigation events)
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
      const beaconSent = navigator.sendBeacon(targetUrl);
      if (beaconSent) {
        return { success: true, url: targetUrl, clickId, event, timestamp };
      }
    }

    // 3. Client-Side Fallback: Try Fetch (no-cors mode to bypass ad network CORS restriction)
    await fetch(targetUrl, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-cache',
    });

    return { success: true, url: targetUrl, clickId, event, timestamp };
  } catch (err: any) {
    // 4. Client-Side Fallback: Image Beacon (works in almost all browsers)
    try {
      if (typeof window !== 'undefined') {
        const img = new Image();
        img.src = targetUrl;
      }
      return { success: true, url: targetUrl, clickId, event, timestamp };
    } catch (imgErr: any) {
      console.error('[RichAds Postback] Failed to trigger client postback fallback:', imgErr);
      return {
        success: false,
        url: targetUrl,
        clickId,
        event,
        timestamp,
        error: imgErr?.message || 'Failed to send postback request',
      };
    }
  }
}

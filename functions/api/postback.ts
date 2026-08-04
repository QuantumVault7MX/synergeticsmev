export async function onRequestPost(context: any) {
  try {
    const data = await context.request.json();
    const url = data.url;

    if (!url) {
      return new Response(JSON.stringify({ error: 'Missing target URL' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    console.log('[Postback Proxy] Forwarding request to:', url);

    // Call the target API server-side
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'User-Agent': context.request.headers.get('User-Agent') || 'Mozilla/5.0 Cloudflare Worker',
      },
    });

    const text = await response.text();

    return new Response(
      JSON.stringify({
        success: true,
        status: response.status,
        response: text,
      }),
      {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err: any) {
    console.error('[Postback Proxy] Error forwarding request:', err);
    return new Response(
      JSON.stringify({
        success: false,
        error: err.message || 'Internal Server Error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

// Support CORS preflight requests
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

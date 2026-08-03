export interface MemberProof {
  id: string;
  name: string;
  avatar: string;
  amount: string;
  type: 'Bonus Claim' | 'Withdrawal' | 'Profit Proof';
  timeAgo: string;
  verified: boolean;
  notes?: string;
  transactionHash?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Bonus' | 'Withdrawal' | 'Refund' | 'Security';
}

export interface VideoTestimonial {
  id: string;
  title: string;
  subtitle: string;
  embedUrl: string;
  thumbnail: string;
  memberName: string;
  memberEarnings: string;
  duration: string;
}

export interface AppConfig {
  communityGroupLink: string;
  liveProofLink: string;
  youtubeEmbedUrl: string;
  bonusAmountPrimary: number;
  bonusAmountMatch: number;
  refundDays: number;
  enableRichAdsPostback?: boolean;
  richAdsPostbackUrl?: string;
  richAdsParamName?: string;
}

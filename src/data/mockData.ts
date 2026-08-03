import { MemberProof, FAQItem, VideoTestimonial, AppConfig } from '../types';

export const defaultConfig: AppConfig = {
  communityGroupLink: 'https://linkly.link/2oGaG',
  liveProofLink: '#live-proof-gallery',
  youtubeEmbedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
  bonusAmountPrimary: 50,
  bonusAmountMatch: 50,
  refundDays: 3,
  enableRichAdsPostback: true,
  richAdsPostbackUrl: 'https://us.ahows.co/log?action=conversion&key={clickid}&price={payout}',
  richAdsParamName: 'key',
};

export const mockMemberProofs: MemberProof[] = [
  {
    id: 'proof-1',
    name: 'Alex Vance',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    amount: 'RM100.00',
    type: 'Bonus Claim',
    timeAgo: '2 minit lalu',
    verified: true,
    notes: 'Menuntut bonus pendaftaran RM50 + bonus padanan RM50 dengan berjaya.',
    transactionHash: '0x8f2a...4e19'
  },
  {
    id: 'proof-2',
    name: 'David Chen (陈伟)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    amount: '$480.50',
    type: 'Withdrawal',
    timeAgo: '5 minit lalu',
    verified: true,
    notes: 'Pengeluaran bila-bila masa diproses serta-merta melalui USDT.',
    transactionHash: '0x3c91...92a1'
  },
  {
    id: 'proof-3',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    amount: '$100.00',
    type: 'Bonus Claim',
    timeAgo: '12 minit lalu',
    verified: true,
    notes: 'Pakej permulaan diaktifkan tanpa risiko deposit.',
    transactionHash: '0x1e88...03c4'
  },
  {
    id: 'proof-4',
    name: 'Marcus Brody',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    amount: '$1,250.00',
    type: 'Profit Proof',
    timeAgo: '24 minit lalu',
    verified: true,
    notes: 'Ujian 3 hari selesai dengan keuntungan 250%.',
    transactionHash: '0x9d41...77e2'
  },
  {
    id: 'proof-5',
    name: 'Elena Rostova',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
    amount: '$210.00',
    type: 'Withdrawal',
    timeAgo: '38 minit lalu',
    verified: true,
    notes: 'Pengeluaran pantas secara terus ke dompet digital.',
    transactionHash: '0x5b22...18f3'
  },
  {
    id: 'proof-6',
    name: 'Kenji Sato',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80',
    amount: 'RM100.00',
    type: 'Bonus Claim',
    timeAgo: '45 minit lalu',
    verified: true,
    notes: 'RM50 + RM50 dipertaruhkan dalam masa 15 saat.',
    transactionHash: '0x71a4...90d1'
  }
];

export const mockVideoTestimonials: VideoTestimonial[] = [
  {
    id: 'v1',
    title: 'Member Proof & Strategy Breakdown',
    subtitle: 'Watch Marcus explain how he turned $100 bonus into $1,250 in 72 hours',
    embedUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0',
    thumbnail: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    memberName: 'Marcus Brody',
    memberEarnings: '$1,250.00 Profit',
    duration: '04:15'
  },
  {
    id: 'v2',
    title: 'Live Withdrawal Speed Test (USDT / Bank)',
    subtitle: 'Real-time recording showing 45-second instant cash out',
    embedUrl: 'https://www.youtube-nocookie.com/embed/L_LUpnjgPso?autoplay=0&rel=0',
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    memberName: 'Elena Rostova',
    memberEarnings: 'Instant $210 Payout',
    duration: '02:40'
  },
  {
    id: 'v3',
    title: '3-Day Risk-Free Guarantee Explained',
    subtitle: 'How our 100% Money-Back safety system guarantees your peace of mind',
    embedUrl: 'https://www.youtube-nocookie.com/embed/3JZ_D3ELwOQ?autoplay=0&rel=0',
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    memberName: 'Official Support Team',
    memberEarnings: '100% Risk Free',
    duration: '03:10'
  }
];

export const mockFaqs: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I claim the $50 + $50 bonus?',
    answer: 'Simply click "Claim Your $50 + $50 Bonus", register your account details, and your wallet will instantly be credited with $50 starter balance plus an immediate $50 match bonus ($100 total usable balance).',
    category: 'Bonus'
  },
  {
    id: 'faq-2',
    question: 'What is the 3-Day Full Refund policy?',
    answer: 'If for any reason you are not satisfied with your platform experience during the first 3 days, you can request a 100% full money-back refund with zero hassle or hidden fees.',
    category: 'Refund'
  },
  {
    id: 'faq-3',
    question: 'What does "随时提现 (Anytime Withdrawal)" mean?',
    answer: 'It means you maintain full liquid control over your funds at all times. There are no locked periods or hidden turnover traps—withdraw your profits or remaining capital whenever you choose.',
    category: 'Withdrawal'
  },
  {
    id: 'faq-4',
    question: 'Are there any hidden fees or subscription costs?',
    answer: 'No. The starter platform test is 100% transparent. There are no monthly subscription fees, secret maintenance charges, or surprise withdrawal commissions.',
    category: 'Security'
  },
  {
    id: 'faq-5',
    question: 'How do I join the Official Telegram / Community Group?',
    answer: 'Click the green "Join Group & Start Now" button on this page. You will be redirected immediately to our active community group where live trade proof, strategy updates, and direct staff support are shared 24/7.',
    category: 'Bonus'
  }
];

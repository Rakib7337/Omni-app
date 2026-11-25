export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'why-switch', label: 'Why Switch', href: '#why-switch' },
  { id: 'comparison', label: 'Compare', href: '#comparison' },
  { id: 'download', label: 'Download', href: '#download' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

export const TRUST_STATS = [
  { label: 'Supported Sites', value: '1,000+', detail: 'Save videos, reels, playlists & music' },
  { label: 'Distraction-Free', value: 'Ad-Free', detail: 'Watch & browse without annoying pop-ups' },
  { label: 'Crisp Quality', value: '4K & MP3', detail: 'Ultra HD video and 320kbps audio' },
  { label: 'Offline Ready', value: 'All-in-One', detail: 'Mini-player, trimmer & audio tools included' },
];

export interface AppFeatureShowcase {
  id: 'saver' | 'formats' | 'feeds' | 'library';
  tabLabel: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
}

export const FRONTEND_FEATURES: AppFeatureShowcase[] = [
  {
    id: 'saver',
    tabLabel: 'Link Saver',
    index: '01.',
    title: 'One-Tap Link & Platform Saver',
    subtitle: 'Paste any video or audio URL in one tap',
    description:
      'Copy a link from YouTube, TikTok, Instagram, X, Reddit, or 1,000+ supported sites — or jump straight into your favorite platform from the quick-launch grid.',
    imageSrc: '/assets/aistudio/Screenshot_20261125-093746_81ca962f.png',
    imageAlt: 'OmniDownloader Home screen showing link paste input and popular supported platforms',
    highlights: [
      'Smart clipboard paste button & quick Single mode',
      'One-tap shortcuts for YouTube, TikTok, Instagram & X',
      'Direct button to open the clean in-app browser',
    ],
  },
  {
    id: 'formats',
    tabLabel: 'Quality Picker',
    index: '02.',
    title: 'Exact Video & Audio Format Picker',
    subtitle: 'Switch between Video + Audio or Audio Only before saving',
    description:
      'Preview clip length, captions, and chapters before saving. Choose full HD/4K video or export directly to MP3, M4A, OPUS, or FLAC at the exact bitrate you prefer.',
    imageSrc: '/assets/aistudio/Screenshot_20261125-094305_d4891960.png',
    imageAlt: 'OmniDownloader Download Format and Details screen showing Video, Audio Only, MP3, M4A, OPUS, and FLAC options',
    highlights: [
      'Instant Video + Audio or Audio Only switcher',
      'Export MP3, M4A, OPUS, or lossless FLAC audio',
      'Choose exact stream quality up to 320 kbps or 4K',
    ],
  },
  {
    id: 'feeds',
    tabLabel: 'Ad-Free Feeds',
    index: '03.',
    title: 'Ad-Free Video Feeds & Topic Tabs',
    subtitle: 'Browse For You, Music, Gaming & Tech cleanly',
    description:
      'Discover trending clips and channels across Music, Gaming, Tech, and For You tabs without pre-roll ads, sponsored cards, or sign-in clutter.',
    imageSrc: '/assets/aistudio/Screenshot_20261125-093815_4d5f2d65.png',
    imageAlt: 'OmniDownloader Ad-Free YouTube Feeds screen showing For You, Music, Gaming, and Tech video feeds',
    highlights: [
      'Clean topic tabs for For You, Music, Gaming & Tech',
      'Zero pre-roll ads or distracting promoted cards',
      'Built-in feed search, refresh & preference tuner',
    ],
  },
  {
    id: 'library',
    tabLabel: 'Offline Library',
    index: '04.',
    title: 'Offline Library & Quick Media Tools',
    subtitle: 'Play, trim, extract audio & manage downloads offline',
    description:
      'Keep every saved video and song organized in one fast library with storage tracking, duplicate checks, instant search, and one-tap play, edit, audio extract, and share tools.',
    imageSrc: '/assets/aistudio/Screenshot_20261125-093912_2a27c156.png',
    imageAlt: 'OmniDownloader Offline Library screen showing saved media cards, storage usage, and quick actions',
    highlights: [
      'Storage summary bar with duplicate file detection',
      'Instant filter chips for Videos, Audios & Newest',
      'Built-in play, edit tools, audio extract & quick share',
    ],
  },
];

export const PROBLEM_SOLUTIONS = [
  {
    index: '01.',
    tiredOf: 'Spammy websites full of pop-ups, fake buttons, and low-quality caps',
    title: 'No More Shady Downloader Sites',
    description:
      'Paste any link — or let smart link detection grab it for you. Choose your exact video resolution or audio quality and save single clips or whole playlists effortlessly.',
    specs: ['Instant link detection', '4K video & 320k MP3 options', 'Save multiple links at once'],
  },
  {
    index: '02.',
    tiredOf: 'Pre-roll ads, mid-video breaks, and juggling separate player apps',
    title: 'Watch Videos Without Interruptions',
    description:
      'Stream your favorite channels cleanly with zero pre-roll ads, automatic sponsor-segment skipping, channel tabs, and a floating mini-player that follows you anywhere.',
    specs: ['Zero video ads or pop-ups', 'Skip sponsored segments automatically', 'Floating mini-player & background play'],
  },
  {
    index: '03.',
    tiredOf: 'Slow online converters with strict file size and daily limits',
    title: 'Edit & Organize Your Library Offline',
    description:
      'Extract crisp MP3 music, trim favorite moments with a visual slider, shrink large videos for messaging apps, and keep every download neat inside your phone.',
    specs: ['One-tap MP3 & music export', 'Visual clip trimmer & sound boost', 'Clean offline library manager'],
  },
];

export interface ComparisonRow {
  capability: string;
  webConverters: string;
  basicPlayers: string;
  omniDownloader: string;
}

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    capability: 'Ads, Pop-ups & Redirects',
    webConverters: 'Aggressive pop-ups & fake buttons',
    basicPlayers: 'Banner ads or paid upgrades',
    omniDownloader: '100% ad-free watching & saving',
  },
  {
    capability: 'Video Resolution & Speed',
    webConverters: 'Often capped at 480p or throttled',
    basicPlayers: 'Limited format choices',
    omniDownloader: 'Full 4K Ultra HD & high-speed queues',
  },
  {
    capability: 'Ad-Free Video Feeds',
    webConverters: 'Not supported',
    basicPlayers: 'Shows pre-roll & mid-roll ads',
    omniDownloader: 'Clean topic feeds, channels & mini-player',
  },
  {
    capability: 'Audio Extraction & Clip Trimming',
    webConverters: 'Slow uploads & strict size limits',
    basicPlayers: 'Requires separate editing apps',
    omniDownloader: 'Built-in trimmer, MP3 converter & compressor',
  },
  {
    capability: 'Playlists & Batch Downloads',
    webConverters: 'One link at a time manually',
    basicPlayers: 'Stops when screen locks',
    omniDownloader: 'Multi-link batch queue & full playlists',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'sites-formats',
    question: 'Which websites and formats can I save?',
    answer:
      'OmniDownloader works with over 1,000 popular video, social, and music platforms — letting you save 4K and 1080p MP4 videos, crisp 320kbps MP3 songs, lossless audio, and complete playlists right onto your phone.',
  },
  {
    id: 'youtube-adblock',
    question: 'How does ad-free video watching work?',
    answer:
      'Inside the Feeds and Browser tabs, OmniDownloader hides promoted cards, blocks intrusive video ads, and skips repetitive sponsor breaks automatically so you can focus on the video without interruptions.',
  },
  {
    id: 'browser-saver',
    question: 'Can I save videos while browsing normal websites?',
    answer:
      'Yes. Open any page in the built-in clean browser and OmniDownloader blocks pop-ups while spotting playable videos on the page so you can download them in a single tap.',
  },
  {
    id: 'privacy-local',
    question: 'Do I need to create an account or sign in?',
    answer:
      'No account or sign-up is required. Your watch preferences, saved files, bookmarks, and download history stay privately on your own Android device.',
  },
  {
    id: 'ffmpeg-built-in',
    question: 'Can I turn videos into MP3s or trim clips inside the app?',
    answer:
      'Yes! OmniDownloader includes a built-in Media Studio where you can extract MP3 audio, trim video start and end points, adjust volume, and compress large clips without installing extra apps.',
  },
];

export interface ApkReleaseInfo {
  version: string;
  filename: string;
  downloadUrl: string;
  compatibility: string;
  notes: string;
}

export const APK_RELEASE: ApkReleaseInfo = {
  version: 'v1.0',
  filename: 'OmniDownloader_v1.0.apk',
  downloadUrl:
    'https://github.com/Rakib7337/Omni-app/releases/download/Release/OmniDownloader_v1.0.apk',
  compatibility: 'Android 8.0 & newer',
  notes:
    'Single universal Android APK compatible with Pixel, Samsung Galaxy, OnePlus, Xiaomi, and other Android 8.0+ devices.',
};

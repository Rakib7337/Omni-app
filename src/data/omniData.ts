import type { AppLanguage } from '../utils/validation';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface TrustStat {
  label: string;
  value: string;
  detail: string;
}

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

export interface ProblemSolutionItem {
  index: string;
  tiredOf: string;
  title: string;
  description: string;
  specs: string[];
}

export interface ComparisonRow {
  capability: string;
  webConverters: string;
  basicPlayers: string;
  omniDownloader: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface ApkReleaseInfo {
  version: string;
  filename: string;
  downloadUrl: string;
  compatibility: string;
  notes: string;
}

export interface LocalizedContent {
  pageTitle: string;
  navItems: NavItem[];
  navbar: {
    downloadCta: string;
    primaryNavAria: string;
    mobileNavAria: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  hero: {
    metaParts: [string, string, string];
    themeAria: string;
    lightLabel: string;
    darkLabel: string;
    languageAria: string;
    bnLabel: string;
    enLabel: string;
    headlineBefore: string;
    headlineHighlight: string;
    headlineAfter: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    footnote: string;
    primaryMockupAlt: string;
    trustStats: TrustStat[];
  };
  featuresSection: {
    kicker: string;
    heading: string;
    subtitle: string;
    filterAria: string;
    allScreensLabel: string;
    items: AppFeatureShowcase[];
  };
  whySwitchSection: {
    kicker: string;
    heading: string;
    subtitle: string;
    replacesPrefix: string;
    items: ProblemSolutionItem[];
  };
  comparisonSection: {
    kicker: string;
    heading: string;
    subtitle: string;
    headers: {
      feature: string;
      freeSites: string;
      standardApps: string;
      omni: string;
    };
    rows: ComparisonRow[];
  };
  downloadSection: {
    kickerPrefix: string;
    heading: string;
    description: string;
    downloadCta: string;
    downloadingPrefix: string;
    downloadingSuffix: string;
    detailsTitle: string;
    installerFileLabel: string;
    appVersionLabel: string;
    compatibilityLabel: string;
    stepsTitle: string;
    steps: [string, string, string];
    release: ApkReleaseInfo;
  };
  faqAndCreatorSection: {
    faqKicker: string;
    faqHeading: string;
    faqs: FaqItem[];
    creatorKicker: string;
    creatorHeading: string;
    creatorBio: string;
    creatorImgAlt: string;
    copyEmailLabel: string;
    copiedEmailLabel: string;
    emailCreatorLabel: string;
    formTitle: string;
    formSubtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    topicLabel: string;
    topics: string[];
    messageLabel: string;
    messagePlaceholder: string;
    draftHint: string;
    submitLabel: string;
    successTitle: string;
    successThanksPrefix: string;
    successTopicNoteMiddle: string;
    successAddressSuffix: string;
    openMailLabel: string;
    sendAnotherLabel: string;
  };
  footer: {
    ctaHeading: string;
    ctaSubtitle: string;
    ctaButton: string;
    builtByPrefix: string;
    footerNavAria: string;
    copyrightSuffix: string;
    disclaimer: string;
    scrollToTopLabel: string;
  };
}

const BASE_URL = import.meta.env.BASE_URL;

export const APK_RELEASE_BASE = {
  version: 'v1.0',
  filename: 'OmniDownloader_v1.0.apk',
  downloadUrl:
    'https://github.com/Rakib7337/Omni-app/releases/download/Release/OmniDownloader_v1.0.apk',
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'why-switch', label: 'Why Switch', href: '#why-switch' },
  { id: 'comparison', label: 'Compare', href: '#comparison' },
  { id: 'download', label: 'Download', href: '#download' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
];

const BN_CONTENT: LocalizedContent = {
  pageTitle: 'OmniDownloader — বিজ্ঞাপন-মুক্ত অ্যান্ড্রয়েড ভিডিও ডাউনলোডার, ফিড ও মিডিয়া অ্যাপ',
  navItems: [
    { id: 'features', label: 'বৈশিষ্ট্য', href: '#features' },
    { id: 'why-switch', label: 'কেন সেরা', href: '#why-switch' },
    { id: 'comparison', label: 'তুলনা', href: '#comparison' },
    { id: 'download', label: 'ডাউনলোড', href: '#download' },
    { id: 'faq', label: 'প্রশ্নোত্তর', href: '#faq' },
  ],
  navbar: {
    downloadCta: 'APK ডাউনলোড',
    primaryNavAria: 'মূল নেভিগেশন',
    mobileNavAria: 'মোবাইল নেভিগেশন',
    openMenuAria: 'নেভিগেশন মেনু খুলুন',
    closeMenuAria: 'নেভিগেশন মেনু বন্ধ করুন',
  },
  hero: {
    metaParts: ['অ্যান্ড্রয়েড অ্যাপ', 'বিজ্ঞাপন-মুক্ত দেখা', '4K ভিডিও, MP3 ও ক্লিপ স্টুডিও'],
    themeAria: 'রঙের থিম',
    lightLabel: 'লাইট',
    darkLabel: 'ডার্ক',
    languageAria: 'ভাষা পরিবর্তন',
    bnLabel: 'বাংলা',
    enLabel: 'English',
    headlineBefore: 'এক অ্যাপেই ভিডিও সেভ করুন, বিজ্ঞাপন ছাড়া দেখুন এবং ',
    headlineHighlight: 'প্রতিটি ক্লিপ নিয়ন্ত্রণ করুন',
    headlineAfter: '।',
    subtitle:
      '১,০০০+ প্ল্যাটফর্ম থেকে 4K ভিডিও, ঝকঝকে MP3 এবং সম্পূর্ণ প্লেলিস্ট ডাউনলোড করুন, পপ-আপ ছাড়াই ব্রাউজ করুন, বিজ্ঞাপন-মুক্ত ফিড দেখুন এবং অ্যান্ড্রয়েড ফোনেই ক্লিপ ট্রিম বা কনভার্ট করুন।',
    primaryCta: 'OmniDownloader APK নিন',
    secondaryCta: 'অ্যাপের স্ক্রিন দেখুন',
    footnote: 'Android 8.0+ · সম্পূর্ণ ফ্রি · সাইন-আপের প্রয়োজন নেই',
    primaryMockupAlt:
      'OmniDownloader অ্যান্ড্রয়েড অ্যাপের হোম স্ক্রিন যেখানে লিংক পেস্ট কার্ড এবং জনপ্রিয় সমর্থিত প্ল্যাটফর্মগুলো দেখা যাচ্ছে',
    trustStats: [
      {
        label: 'সমর্থিত সাইট',
        value: '১,০০০+',
        detail: 'ভিডিও, রিলস, প্লেলিস্ট ও মিউজিক সেভ করুন',
      },
      {
        label: 'বিরক্তিহীন অভিজ্ঞতা',
        value: 'বিজ্ঞাপন-মুক্ত',
        detail: 'পপ-আপ বা বিজ্ঞাপন ছাড়াই দেখুন ও ব্রাউজ করুন',
      },
      {
        label: 'চমৎকার মান',
        value: '4K ও MP3',
        detail: 'আল্ট্রা এইচডি ভিডিও এবং 320kbps অডিও',
      },
      {
        label: 'অফলাইন প্রস্তুত',
        value: 'অল-ইন-ওয়ান',
        detail: 'মিনি-প্লেয়ার, ট্রিমার ও অডিও টুলস সংযুক্ত',
      },
    ],
  },
  featuresSection: {
    kicker: 'OmniDownloader-এর ভেতরে',
    heading: 'একটি পরিচ্ছন্ন অ্যান্ড্রয়েড অ্যাপে চারটি দৈনন্দিন টুল।',
    subtitle:
      'প্রতিদিন ব্যবহার করার আসল অ্যাপ স্ক্রিনগুলো দেখুন — লিংক পেস্ট করে ফরম্যাট বাছাই থেকে শুরু করে বিজ্ঞাপন-মুক্ত ফিড দেখা এবং অফলাইন লাইব্রেরি সাজানো পর্যন্ত।',
    filterAria: 'অ্যাপের স্ক্রিন ফিল্টার করুন',
    allScreensLabel: 'সব স্ক্রিন',
    items: [
      {
        id: 'saver',
        tabLabel: 'লিংক সেভার',
        index: '০১.',
        title: 'এক ট্যাপেই লিংক ও প্ল্যাটফর্ম সেভার',
        subtitle: 'যেকোনো ভিডিও বা অডিও লিংক এক ট্যাপে পেস্ট করুন',
        description:
          'YouTube, TikTok, Instagram, X, Reddit কিংবা ১,০০০+ সাইটের লিংক কপি করুন — অথবা কুইক-লঞ্চ গ্রিড থেকে সরাসরি পছন্দের প্ল্যাটফর্মে প্রবেশ করুন।',
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093746_81ca962f.png`,
        imageAlt:
          'OmniDownloader হোম স্ক্রিন যেখানে লিংক পেস্ট বক্স ও জনপ্রিয় সমর্থিত প্ল্যাটফর্মের তালিকা রয়েছে',
        highlights: [
          'স্মার্ট ক্লিপবোর্ড পেস্ট বাটন ও দ্রুত সিঙ্গেল মোড',
          'YouTube, TikTok, Instagram ও X-এর এক-ট্যাপ শর্টকাট',
          'পরিচ্ছন্ন ইন-অ্যাপ ব্রাউজার খোলার সরাসরি বাটন',
        ],
      },
      {
        id: 'formats',
        tabLabel: 'কোয়ালিটি পিকার',
        index: '০২.',
        title: 'সঠিক ভিডিও ও অডিও ফরম্যাট পিকার',
        subtitle: 'সেভ করার আগেই Video + Audio বা Audio Only বেছে নিন',
        description:
          'সেভ করার আগে ক্লিপের দৈর্ঘ্য, ক্যাপশন ও চ্যাপ্টার দেখে নিন। ফুল HD/4K ভিডিও অথবা পছন্দের বিটরেটে সরাসরি MP3, M4A, OPUS বা FLAC ফরম্যাটে এক্সপোর্ট করুন।',
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-094305_d4891960.png`,
        imageAlt:
          'OmniDownloader ডাউনলোড ফরম্যাট স্ক্রিন যেখানে Video, Audio Only, MP3, M4A, OPUS ও FLAC অপশন রয়েছে',
        highlights: [
          'তাৎক্ষণিক Video + Audio বা Audio Only সুইচার',
          'MP3, M4A, OPUS বা লসলেস FLAC অডিও এক্সপোর্ট',
          '৩২০ kbps থেকে 4K পর্যন্ত পছন্দের কোয়ালিটি নির্বাচন',
        ],
      },
      {
        id: 'feeds',
        tabLabel: 'বিজ্ঞাপন-মুক্ত ফিড',
        index: '০৩.',
        title: 'বিজ্ঞাপন-মুক্ত ভিডিও ফিড ও টপিক ট্যাব',
        subtitle: 'For You, Music, Gaming ও Tech দেখুন নির্বিঘ্নে',
        description:
          'প্রি-রোল বিজ্ঞাপন, স্পন্সরড কার্ড বা সাইন-ইনের ঝামেলা ছাড়াই Music, Gaming, Tech এবং For You ট্যাবে ট্রেন্ডিং ক্লিপ ও চ্যানেল উপভোগ করুন।',
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093815_4d5f2d65.png`,
        imageAlt:
          'OmniDownloader বিজ্ঞাপন-মুক্ত YouTube ফিড স্ক্রিন যেখানে For You, Music, Gaming ও Tech ট্যাব দেখা যাচ্ছে',
        highlights: [
          'For You, Music, Gaming ও Tech-এর পরিচ্ছন্ন টপিক ট্যাব',
          'প্রি-রোল বিজ্ঞাপন বা বিরক্তিকর প্রোমোটেড কার্ড নেই',
          'বিল্ট-ইন ফিড সার্চ, রিফ্রেশ ও পছন্দ সেটিংস',
        ],
      },
      {
        id: 'library',
        tabLabel: 'অফলাইন লাইব্রেরি',
        index: '০৪.',
        title: 'অফলাইন লাইব্রেরি ও দ্রুত মিডিয়া টুলস',
        subtitle: 'অফলাইনেই ফাইল চালান, ট্রিম করুন, অডিও আলাদা করুন ও গুছিয়ে রাখুন',
        description:
          'স্টোরেজ ট্র্যাকিং, ডুপ্লিকেট চেক, দ্রুত সার্চ এবং এক-ট্যাপে প্লে, এডিট, অডিও এক্সট্র্যাক্ট ও শেয়ার টুলসহ সব সেভ করা ভিডিও ও গান এক জায়গায় সাজিয়ে রাখুন।',
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093912_2a27c156.png`,
        imageAlt:
          'OmniDownloader অফলাইন লাইব্রেরি স্ক্রিন যেখানে সেভ করা মিডিয়া, স্টোরেজ তথ্য ও দ্রুত অ্যাকশন দেখা যাচ্ছে',
        highlights: [
          'ডুপ্লিকেট ফাইল শনাক্তকরণসহ স্টোরেজ সামারি বার',
          'Videos, Audios ও Newest-এর জন্য তাৎক্ষণিক ফিল্টার চিপস',
          'বিল্ট-ইন প্লে, এডিট টুলস, অডিও এক্সট্র্যাক্ট ও কুইক শেয়ার',
        ],
      },
    ],
  },
  whySwitchSection: {
    kicker: 'কেন OmniDownloader ব্যবহার করবেন?',
    heading: 'বিজ্ঞাপন-ভরা কনভার্টার ও আলাদা আলাদা অ্যাপের ঝামেলা থেকে মুক্তির জন্য তৈরি।',
    subtitle:
      'বিশৃঙ্খল ডাউনলোড ওয়েবসাইট, বিজ্ঞাপনে ভরা ভিডিও অ্যাপ এবং ধীর অনলাইন কনভার্টারের বদলে OmniDownloader একটি সহজ অ্যান্ড্রয়েড অ্যাপেই সেভ করা, বিজ্ঞাপন ছাড়া দেখা, পরিচ্ছন্ন ব্রাউজিং ও ক্লিপ এডিটিং নিয়ে আসে।',
    replacesPrefix: 'যা থেকে মুক্তি:',
    items: [
      {
        index: '০১.',
        tiredOf: 'পপ-আপ, ভুয়া বাটন ও নিম্নমানের রেজোলিউশন-যুক্ত স্প্যামি ওয়েবসাইট',
        title: 'আর কোনো ঝামেলাপূর্ণ ডাউনলোডার সাইট নয়',
        description:
          'যেকোনো লিংক পেস্ট করুন — অথবা স্মার্ট লিংক ডিটেকশনে স্বয়ংক্রিয়ভাবে ধরুন। পছন্দের ভিডিও রেজোলিউশন বা অডিও মান বেছে সিঙ্গেল ক্লিপ কিংবা পুরো প্লেলিস্ট সহজেই সেভ করুন।',
        specs: ['তাৎক্ষণিক লিংক শনাক্তকরণ', '4K ভিডিও ও 320k MP3 অপশন', 'একসাথে একাধিক লিংক সেভ'],
      },
      {
        index: '০২.',
        tiredOf: 'প্রি-রোল বিজ্ঞাপন, মাঝপথে বিরতি ও আলাদা প্লেয়ার অ্যাপ ব্যবহারের ঝামেলা',
        title: 'কোনো বাধা ছাড়াই ভিডিও দেখুন',
        description:
          'প্রি-রোল বিজ্ঞাপন ছাড়াই প্রিয় চ্যানেল দেখুন, স্পন্সর অংশ স্বয়ংক্রিয়ভাবে স্কিপ করুন এবং যেকোনো স্ক্রিনে ভাসমান মিনি-প্লেয়ার ব্যবহার করুন।',
        specs: [
          'ভিডিও বিজ্ঞাপন বা পপ-আপ শূন্য',
          'স্পন্সর অংশ স্বয়ংক্রিয়ভাবে স্কিপ',
          'ফ্লোটিং মিনি-প্লেয়ার ও ব্যাকগ্রাউন্ড প্লে',
        ],
      },
      {
        index: '০৩.',
        tiredOf: 'কঠোর ফাইল সাইজ ও দৈনিক সীমাযুক্ত ধীর অনলাইন কনভার্টার',
        title: 'অফলাইনেই লাইব্রেরি এডিট ও গুছিয়ে রাখুন',
        description:
          'ঝকঝকে MP3 মিউজিক আলাদা করুন, ভিজ্যুয়াল স্লাইডার দিয়ে পছন্দের অংশ কাটুন, মেসেজিং অ্যাপের জন্য বড় ভিডিও ছোট করুন এবং সব ফাইল ফোনে সুন্দরভাবে সাজিয়ে রাখুন।',
        specs: ['এক ট্যাপে MP3 ও মিউজিক এক্সপোর্ট', 'ভিজ্যুয়াল ক্লিপ ট্রিমার ও সাউন্ড বুস্ট', 'পরিচ্ছন্ন অফলাইন লাইব্রেরি ম্যানেজার'],
      },
    ],
  },
  comparisonSection: {
    kicker: 'পাশাপাশি তুলনা',
    heading: 'ডাউনলোডার ওয়েবসাইট ও সাধারণ অ্যাপ বনাম OmniDownloader',
    subtitle:
      'পপ-আপ ওয়েবসাইট এবং জটিল প্লেয়ারের তুলনায় একটি অল-ইন-ওয়ান অ্যান্ড্রয়েড মিডিয়া অ্যাপ কতটা এগিয়ে তা দেখুন।',
    headers: {
      feature: 'দৈনন্দিন সুবিধা',
      freeSites: 'ফ্রি ওয়েবসাইট',
      standardApps: 'সাধারণ অ্যাপ',
      omni: 'OmniDownloader',
    },
    rows: [
      {
        capability: 'বিজ্ঞাপন, পপ-আপ ও রিডাইরেক্ট',
        webConverters: 'অতিরিক্ত পপ-আপ ও ভুয়া বাটন',
        basicPlayers: 'ব্যানার বিজ্ঞাপন বা পেইড আপগ্রেড',
        omniDownloader: '১০০% বিজ্ঞাপন-মুক্ত দেখা ও সেভ করা',
      },
      {
        capability: 'ভিডিও রেজোলিউশন ও গতি',
        webConverters: 'প্রায়ই 480p-তে সীমাবদ্ধ বা ধীর গতি',
        basicPlayers: 'সীমিত ফরম্যাট অপশন',
        omniDownloader: 'পূর্ণ 4K আল্ট্রা HD ও দ্রুত কিউ',
      },
      {
        capability: 'বিজ্ঞাপন-মুক্ত ভিডিও ফিড',
        webConverters: 'সমর্থিত নয়',
        basicPlayers: 'প্রি-রোল ও মিড-রোল বিজ্ঞাপন দেখায়',
        omniDownloader: 'পরিচ্ছন্ন টপিক ফিড, চ্যানেল ও মিনি-প্লেয়ার',
      },
      {
        capability: 'অডিও এক্সট্র্যাকশন ও ক্লিপ ট্রিমিং',
        webConverters: 'ধীর আপলোড ও ফাইল সাইজ সীমা',
        basicPlayers: 'আলাদা এডিটিং অ্যাপ প্রয়োজন হয়',
        omniDownloader: 'বিল্ট-ইন ট্রিমার, MP3 কনভার্টার ও কম্প্রেসর',
      },
      {
        capability: 'প্লেলিস্ট ও ব্যাচ ডাউনলোড',
        webConverters: 'একবারে কেবল একটি লিংক',
        basicPlayers: 'স্ক্রিন লক হলে প্লেব্যাক বন্ধ হয়',
        omniDownloader: 'মাল্টি-লিংক ব্যাচ কিউ ও সম্পূর্ণ প্লেলিস্ট',
      },
    ],
  },
  downloadSection: {
    kickerPrefix: 'সর্বশেষ অ্যান্ড্রয়েড রিলিজ ·',
    heading: 'অ্যান্ড্রয়েডের জন্য OmniDownloader ডাউনলোড করুন',
    description:
      'ভিডিও ও প্লেলিস্ট সেভার, বিজ্ঞাপন-মুক্ত ভিডিও ফিড, পরিচ্ছন্ন মোবাইল ব্রাউজার এবং অফলাইন লাইব্রেরি টুলসসহ একটি সার্বজনীন অ্যান্ড্রয়েড APK।',
    downloadCta: 'APK ডাউনলোড',
    downloadingPrefix: 'ডাউনলোড হচ্ছে',
    downloadingSuffix: '— ইনস্টল করতে আপনার অ্যান্ড্রয়েড নোটিফিকেশন থেকে ফাইলটি খুলুন।',
    detailsTitle: 'অ্যাপের তথ্য ও দ্রুত ইনস্টল',
    installerFileLabel: 'ইনস্টলার ফাইল',
    appVersionLabel: 'অ্যাপ ভার্সন',
    compatibilityLabel: 'সামঞ্জস্যতা',
    stepsTitle: '৩টি সহজ ধাপে প্রস্তুত',
    steps: [
      'উপরের APK ডাউনলোড বাটনে ট্যাপ করুন',
      'আপনার ফোনে ডাউনলোড করা ফাইলটি খুলুন',
      'এখনই বিজ্ঞাপন ছাড়া দেখা ও সেভ করা শুরু করুন',
    ],
    release: {
      ...APK_RELEASE_BASE,
      compatibility: 'Android 8.0 ও তার পরবর্তী',
      notes:
        'একটি সার্বজনীন অ্যান্ড্রয়েড APK যা Pixel, Samsung Galaxy, OnePlus, Xiaomi সহ Android 8.0+ সব ডিভাইসে চলে।',
    },
  },
  faqAndCreatorSection: {
    faqKicker: 'সাধারণ প্রশ্নোত্তর',
    faqHeading: 'সেভ করা, বিজ্ঞাপন ছাড়া দেখা ও এডিটিং সম্পর্কিত প্রয়োজনীয় উত্তর।',
    faqs: [
      {
        id: 'sites-formats',
        question: 'কোন কোন ওয়েবসাইট ও ফরম্যাট সেভ করা যাবে?',
        answer:
          'OmniDownloader ১,০০০-এর বেশি জনপ্রিয় ভিডিও, সোশ্যাল ও মিউজিক প্ল্যাটফর্মে কাজ করে — যেখান থেকে 4K ও 1080p MP4 ভিডিও, 320kbps MP3 গান, লসলেস অডিও এবং সম্পূর্ণ প্লেলিস্ট সরাসরি ফোনে সেভ করা যায়।',
      },
      {
        id: 'youtube-adblock',
        question: 'বিজ্ঞাপন-মুক্ত ভিডিও দেখা কীভাবে কাজ করে?',
        answer:
          'ফিড এবং ব্রাউজার ট্যাবের ভেতরে OmniDownloader প্রোমোটেড কার্ড লুকিয়ে রাখে, বিরক্তিকর ভিডিও বিজ্ঞাপন আটকায় এবং বিরতিহীন দেখার জন্য স্পন্সর অংশ স্বয়ংক্রিয়ভাবে স্কিপ করে।',
      },
      {
        id: 'browser-saver',
        question: 'সাধারণ ওয়েবসাইট ব্রাউজ করার সময়ও কি ভিডিও সেভ করা যাবে?',
        answer:
          'হ্যাঁ। বিল্ট-ইন পরিচ্ছন্ন ব্রাউজারে যেকোনো পেজ খুললে OmniDownloader পপ-আপ আটকায় এবং পেজে থাকা ভিডিও শনাক্ত করে এক ট্যাপেই ডাউনলোডের সুযোগ দেয়।',
      },
      {
        id: 'privacy-local',
        question: 'ব্যবহার করতে কি কোনো অ্যাকাউন্ট বা সাইন-ইন করতে হবে?',
        answer:
          'কোনো অ্যাকাউন্ট বা সাইন-আপের প্রয়োজন নেই। আপনার দেখার পছন্দ, সেভ করা ফাইল, বুকমার্ক ও ডাউনলোড হিস্ট্রি সম্পূর্ণভাবে আপনার নিজের অ্যান্ড্রয়েড ডিভাইসেই থাকে।',
      },
      {
        id: 'ffmpeg-built-in',
        question: 'অ্যাপের ভেতরেই কি ভিডিও থেকে MP3 বা ক্লিপ ট্রিম করা যাবে?',
        answer:
          'হ্যাঁ! OmniDownloader-এ বিল্ট-ইন মিডিয়া স্টুডিও রয়েছে যেখানে অতিরিক্ত অ্যাপ ছাড়াই MP3 অডিও এক্সট্র্যাক্ট, ভিডিও ট্রিম, ভলিউম নিয়ন্ত্রণ ও বড় ক্লিপ কম্প্রেস করা যায়।',
      },
    ],
    creatorKicker: 'অ্যাপ নির্মাতা',
    creatorHeading: 'নির্মাতা: রাকিব হাসান',
    creatorBio:
      'স্বাধীন অ্যান্ড্রয়েড অ্যাপ নির্মাতা — যিনি সাবস্ক্রিপশন ঝামেলা ছাড়াই দ্রুত, পরিচ্ছন্ন ও বিজ্ঞাপন-মুক্ত মোবাইল ইউটিলিটি অ্যাপ ডিজাইন করেন।',
    creatorImgAlt: 'OmniDownloader নির্মাতা রাকিব হাসানের ওয়ার্কস্পেস ডেস্ক',
    copyEmailLabel: 'rhpro111@gmail.com কপি করুন',
    copiedEmailLabel: 'কপি হয়েছে rhpro111@gmail.com',
    emailCreatorLabel: 'নির্মাতাকে ইমেইল করুন',
    formTitle: 'মতামত বা নতুন ফিচারের অনুরোধ পাঠান',
    formSubtitle:
      'ডিভাইস অভিজ্ঞতা জানান, নতুন ওয়েবসাইট বা ফরম্যাটের অনুরোধ করুন, অথবা পছন্দের ফিচারের পরামর্শ দিন।',
    nameLabel: 'আপনার নাম',
    namePlaceholder: 'রাফি আহমেদ',
    emailLabel: 'রিপ্লাই ইমেইল',
    emailPlaceholder: 'name@domain.com',
    topicLabel: 'বিষয়',
    topics: [
      'ফিচার অনুরোধ / মতামত',
      'অ্যাপ বাগ / প্লেব্যাক সমস্যা',
      'ওয়েবসাইট সাপোর্ট অনুরোধ',
      'সাধারণ প্রশ্ন',
    ],
    messageLabel: 'বার্তা',
    messagePlaceholder: 'আপনার অ্যান্ড্রয়েড ভার্সন, ফোনের মডেল বা ফিচার আইডিয়া লিখুন...',
    draftHint: 'আপনার ইমেইল অ্যাপে পাঠানোর জন্য প্রস্তুত খসড়া খুলবে',
    submitLabel: 'বার্তা পাঠান',
    successTitle: 'রাকিব হাসানের জন্য বার্তা প্রস্তুত',
    successThanksPrefix: 'ধন্যবাদ,',
    successTopicNoteMiddle: 'বিষয়ে আপনার বার্তাটি যাচাই করা হয়েছে এবং',
    successAddressSuffix: 'ঠিকানায় পাঠানোর জন্য প্রস্তুত।',
    openMailLabel: 'মেইল অ্যাপে খুলুন',
    sendAnotherLabel: 'আরেকটি বার্তা পাঠান',
  },
  footer: {
    ctaHeading: 'অ্যান্ড্রয়েডে আপনার মিডিয়ার পূর্ণ নিয়ন্ত্রণ নিন।',
    ctaSubtitle:
      '4K ডাউনলোড, বিজ্ঞাপন-মুক্ত ভিডিও ফিড, পরিচ্ছন্ন ব্রাউজিং ও দ্রুত ক্লিপ এডিটিংয়ের জন্য একটিই সহজ অ্যাপ।',
    ctaButton: 'OmniDownloader ডাউনলোড করুন',
    builtByPrefix: 'অ্যান্ড্রয়েডের জন্য নির্মিত · রাকিব হাসান —',
    footerNavAria: 'ফুটার নেভিগেশন',
    copyrightSuffix: 'OmniDownloader · রাকিব হাসান। সর্বস্বত্ব সংরক্ষিত।',
    disclaimer:
      'শুধুমাত্র ব্যক্তিগত ও অনুমোদিত অফলাইন মিডিয়া ব্যবহারের জন্য তৈরি। নির্মাতা ও সংশ্লিষ্ট প্ল্যাটফর্মের নীতিমালা মেনে চলুন।',
    scrollToTopLabel: 'উপরে যান',
  },
};

const EN_CONTENT: LocalizedContent = {
  pageTitle: 'OmniDownloader — Ad-Free Android Video Downloader, Feeds & Media App',
  navItems: NAV_ITEMS,
  navbar: {
    downloadCta: 'Download APK',
    primaryNavAria: 'Primary navigation',
    mobileNavAria: 'Mobile navigation',
    openMenuAria: 'Open navigation menu',
    closeMenuAria: 'Close navigation menu',
  },
  hero: {
    metaParts: ['Android App', 'Ad-Free Watching', '4K Video, MP3 & Clip Studio'],
    themeAria: 'Color theme',
    lightLabel: 'Light',
    darkLabel: 'Dark',
    languageAria: 'Language',
    bnLabel: 'বাংলা',
    enLabel: 'English',
    headlineBefore: 'Save Videos, Watch Ad-Free, and ',
    headlineHighlight: 'Master Every Clip',
    headlineAfter: ' in One App.',
    subtitle:
      'Download 4K videos, crisp MP3s, and full playlists from 1,000+ platforms, browse without pop-ups, watch video feeds ad-free, and trim or convert clips right on your Android phone.',
    primaryCta: 'Get OmniDownloader APK',
    secondaryCta: 'Explore App Screens',
    footnote: 'Android 8.0+ · Free to use · No sign-up required',
    primaryMockupAlt:
      'OmniDownloader Android app home screen with link paste card and supported platforms',
    trustStats: [
      { label: 'Supported Sites', value: '1,000+', detail: 'Save videos, reels, playlists & music' },
      { label: 'Distraction-Free', value: 'Ad-Free', detail: 'Watch & browse without annoying pop-ups' },
      { label: 'Crisp Quality', value: '4K & MP3', detail: 'Ultra HD video and 320kbps audio' },
      { label: 'Offline Ready', value: 'All-in-One', detail: 'Mini-player, trimmer & audio tools included' },
    ],
  },
  featuresSection: {
    kicker: 'Inside OmniDownloader',
    heading: 'Four everyday tools built into one clean Android app.',
    subtitle:
      'See the actual app screens you use every day — from pasting a link and picking formats to watching ad-free feeds and organizing your offline library.',
    filterAria: 'Filter app screens',
    allScreensLabel: 'All Screens',
    items: [
      {
        id: 'saver',
        tabLabel: 'Link Saver',
        index: '01.',
        title: 'One-Tap Link & Platform Saver',
        subtitle: 'Paste any video or audio URL in one tap',
        description:
          'Copy a link from YouTube, TikTok, Instagram, X, Reddit, or 1,000+ supported sites — or jump straight into your favorite platform from the quick-launch grid.',
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093746_81ca962f.png`,
        imageAlt:
          'OmniDownloader Home screen showing link paste input and popular supported platforms',
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
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-094305_d4891960.png`,
        imageAlt:
          'OmniDownloader Download Format and Details screen showing Video, Audio Only, MP3, M4A, OPUS, and FLAC options',
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
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093815_4d5f2d65.png`,
        imageAlt:
          'OmniDownloader Ad-Free YouTube Feeds screen showing For You, Music, Gaming, and Tech video feeds',
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
        imageSrc: `${BASE_URL}assets/aistudio/Screenshot_20261125-093912_2a27c156.png`,
        imageAlt:
          'OmniDownloader Offline Library screen showing saved media cards, storage usage, and quick actions',
        highlights: [
          'Storage summary bar with duplicate file detection',
          'Instant filter chips for Videos, Audios & Newest',
          'Built-in play, edit tools, audio extract & quick share',
        ],
      },
    ],
  },
  whySwitchSection: {
    kicker: 'Why Switch to OmniDownloader?',
    heading: 'Built for people tired of ad-ridden converters and fragmented apps.',
    subtitle:
      'Instead of juggling messy download websites, ad-heavy video apps, and slow online converters, OmniDownloader brings saving, ad-free watching, clean browsing, and clip editing together in one simple Android app.',
    replacesPrefix: 'Replaces:',
    items: [
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
        specs: [
          'Zero video ads or pop-ups',
          'Skip sponsored segments automatically',
          'Floating mini-player & background play',
        ],
      },
      {
        index: '03.',
        tiredOf: 'Slow online converters with strict file size and daily limits',
        title: 'Edit & Organize Your Library Offline',
        description:
          'Extract crisp MP3 music, trim favorite moments with a visual slider, shrink large videos for messaging apps, and keep every download neat inside your phone.',
        specs: ['One-tap MP3 & music export', 'Visual clip trimmer & sound boost', 'Clean offline library manager'],
      },
    ],
  },
  comparisonSection: {
    kicker: 'Side-by-Side Comparison',
    heading: 'Downloader Websites & Standard Apps vs. OmniDownloader',
    subtitle:
      'See how an all-in-one Android media app compares against pop-up websites and cluttered players.',
    headers: {
      feature: 'Everyday Feature',
      freeSites: 'Free Websites',
      standardApps: 'Standard Apps',
      omni: 'OmniDownloader',
    },
    rows: [
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
    ],
  },
  downloadSection: {
    kickerPrefix: 'Latest Android Release ·',
    heading: 'Get OmniDownloader for Android',
    description:
      'One universal Android APK with video and playlist saving, ad-free video feeds, clean mobile browsing, and offline library tools ready out of the box.',
    downloadCta: 'Download APK',
    downloadingPrefix: 'Downloading',
    downloadingSuffix: '— open the file from your Android notifications to install.',
    detailsTitle: 'App Details & Quick Install',
    installerFileLabel: 'Installer File',
    appVersionLabel: 'App Version',
    compatibilityLabel: 'Compatibility',
    stepsTitle: 'Ready in 3 quick steps',
    steps: [
      'Tap Download APK above',
      'Open the downloaded file on your phone',
      'Start saving and watching ad-free right away',
    ],
    release: {
      ...APK_RELEASE_BASE,
      compatibility: 'Android 8.0 & newer',
      notes:
        'Single universal Android APK compatible with Pixel, Samsung Galaxy, OnePlus, Xiaomi, and other Android 8.0+ devices.',
    },
  },
  faqAndCreatorSection: {
    faqKicker: 'Frequently Asked Questions',
    faqHeading: 'Helpful answers on saving, watching ad-free, and editing.',
    faqs: [
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
    ],
    creatorKicker: 'App Creator',
    creatorHeading: 'Built by Rakib Hasan',
    creatorBio:
      'Independent Android app creator designing clean, fast, ad-free mobile utilities built around smooth playback, effortless saving, and zero subscription clutter.',
    creatorImgAlt: 'Workspace desk of OmniDownloader creator Rakib Hasan',
    copyEmailLabel: 'Copy rhpro111@gmail.com',
    copiedEmailLabel: 'Copied rhpro111@gmail.com',
    emailCreatorLabel: 'Email Creator',
    formTitle: 'Send Feedback or Feature Request',
    formSubtitle:
      'Share device feedback, request a website or format, or suggest your favorite new UI feature.',
    nameLabel: 'Your Name',
    namePlaceholder: 'Alex Rivera',
    emailLabel: 'Reply Email',
    emailPlaceholder: 'alex@domain.com',
    topicLabel: 'Topic',
    topics: [
      'Feature Request / Feedback',
      'App Bug / Playback Issue',
      'Website Support Request',
      'General Question',
    ],
    messageLabel: 'Message',
    messagePlaceholder: 'Share your Android version, phone model, or feature idea...',
    draftHint: 'Opens ready-to-send draft in your email app',
    submitLabel: 'Send Message',
    successTitle: 'Message Ready for Rakib Hasan',
    successThanksPrefix: 'Thanks,',
    successTopicNoteMiddle: 'note has been validated and prepared for',
    successAddressSuffix: '',
    openMailLabel: 'Open in Mail App',
    sendAnotherLabel: 'Send Another Note',
  },
  footer: {
    ctaHeading: 'Take Control of Your Media on Android.',
    ctaSubtitle:
      'One simple app for 4K downloads, ad-free video feeds, clean browsing, and quick clip editing.',
    ctaButton: 'Download OmniDownloader',
    builtByPrefix: 'Built for Android by Rakib Hasan —',
    footerNavAria: 'Footer navigation',
    copyrightSuffix: 'OmniDownloader · Rakib Hasan. All rights reserved.',
    disclaimer:
      'Intended strictly for responsible personal and authorized offline media use. Respect content creators and applicable platform terms.',
    scrollToTopLabel: 'Scroll to top',
  },
};

export function getLocalizedContent(lang: AppLanguage): LocalizedContent {
  return lang === 'en' ? EN_CONTENT : BN_CONTENT;
}

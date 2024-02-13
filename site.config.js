const CONFIG = {
  // profile setting (required)
  profile: {
    name: "eyelighthyeok",
    image: "/notion-avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "🤩",
    bio: "내가 좋아서 하는 블로그",
    email: "eyelighthyeok@gmail.com",
    linkedin: "",
    github: "",
    instagram: "eyelight.kitchen",
  },
  // 서비스 영역
  projects: [
    {
      name: `eyelight_github`,
      href: "https://github.com/kwanghyeokahn",
    },
  ],
  // blog setting (required)
  blog: {
    title: "eyelighthyeok_blog",
    description: "내가 좋아서 만들고 작성하고 기록하는 코딩,요리 블로그💻🍴",
  },

  // CONFIG configration (required)
  link: "https://eyelight-log.vercel.app",
  //"https://firstnotionblog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo : {
    keywords: ["Blog","website","Notion","vercel","morethan-log","Python","eyelight-log","DataScience",
               "Recipe","Main","Appetizer","Desert",
               "파이썬","노션","데이터분석","AI","데이터과학","분석기법",
               "요리","코스요리","메인요리","에피타이저","디저트"]
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 10,  //21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }

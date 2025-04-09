const footerData = {
  marquee: {
    text: "LET'S TALK",
    repeatCount: 4,
    link: "/contact",
  },

  centerSection: {
    avatar: {
      src: "./assets/images/Uchenna_face.svg",
      alt: "footer-mask-avatar",
    },
    socialLinks: [
      {
        name: "LINKEDIN",
        url: "https://www.linkedin.com/in/uokpagu/",
        id: "linkedin",
      },
      {
        name: "instagram",
        url: "https://instagram.com/uchokpagu",
        id: "instagram",
      },
      {
        name: "twitter",
        url: "https://x.com/Uchennaokpagu",
        id: "twitter",
      },
    ],
    hireButton: {
      text: "Let's Connect",
      link: "/contact",
    },
  },

  bottomSection: {
    copyright: {
      text: "© 2025. All rights reserved Uchenna Okpagu.",
      year: new Date().getFullYear(),
    },
    backToTop: {
      text: "Back To Top",
      target: "#header",
    },
    footerNav: [
      {
        text: "Terms & Condition",
        link: "/terms",
        id: "terms",
      },
      {
        text: "Privacy Policy",
        link: "/policy",
        id: "privacy",
      },
    ],
  },
};

export default footerData;

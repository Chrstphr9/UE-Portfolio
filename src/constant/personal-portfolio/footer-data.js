const footerData = {
  marquee: {
    text: "LET'S TALK",
    repeatCount: 4,
    link: "/contact",
  },

  centerSection: {
    avatar: {
      src: "./assets/images/uche_face.svg",
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
        url: "https://x.com/ucheokpagu",
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
      text: "© 2025. All rights reserved Uche Okpagu.",
      year: new Date().getFullYear(),
    },
    backToTop: {
      text: "Back To Top",
      target: "#header",
    },
    footerNav: [
      {
        text: "Terms & Condition",
        url: "#",
        id: "terms",
      },
      {
        text: "Privacy Policy",
        url: "#",
        id: "privacy",
      },
    ],
  },
};

export default footerData;

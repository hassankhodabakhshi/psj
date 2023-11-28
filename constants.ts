
export const METADATA = {
  title: "پارسین سازه جنوب",
  description:
    "ps-j.ir",
  siteUrl: "https://ps-j.ir",
};

export const MENULINKS = [
  {
    name: "صفحه اصلی",
    ref: "home",
  },
  {
    name: "پروژه ها",
    ref: "works",
  },
  {
    name: "خدمات",
    ref: "skills",
  },
  {
    name: "تاریخچه",
    ref: "timeline",
  },
  {
    name: "تماس با ما",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "طراحی",
  "نظارت",
  "اجرا",
];

export const EMAIL = "info@psj.co.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/psj/",
  instagram: "https://www.instagram.com/psj/",
  facebook: "https://www.facebook.com/psj",
  twitter: "https://twitter.com/psj",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "پروژه",
    image: "/projects/Anal.jpg",
    blurImage: "/projects/Anal.jpg",
    description: "طراحی ساختمان زیتون",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "/",
    tech: ["typescript", "figma", "tailwind"],
  },
  {
    name: "myOKR Website",
    image: "/Architect.png",
    blurImage: "/projects/blur/myokr-blur.jpg",
    description: "Marketing site for OKR Platform by huminos",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://www.huminos.com/",
    tech: ["react", "next", "gsap", "tailwind"],
  },
  {
    name: "DLT Labs Website",
    image: "/Architect.png",
    blurImage: "/projects/blur/dlt-website-blur.jpg",
    description: "Marketing site with an Internal CMS from scratch",
    gradient: ["#245B57", "#004741"],
    url: "https://www.dltlabs.com/",
    tech: ["figma", "angular", "gsap"],
  },
  {
    name: "DL Unify",
    image: "/Architect.png",
    blurImage: "/projects/blur/dl-unify-blur.jpg",
    description: "Built the application from zero to production 🚀",
    gradient: ["#003052", "#167187"],
    url: "https://dlunify.com/",
    tech: ["tailwind", "angular", "gsap", "figma"],
  },
  {
    name: "ngx-quill-upload",
    image: "/Architect.png",
    blurImage: "/projects/blur/ngx-quill-upload-blur.jpg",
    description: "NPM Package for Quill JS uploads from Angular",
    gradient: ["#3A0000", "#771E1E"],
    url: "https://www.npmjs.com/package/ngx-quill-upload",
    tech: ["npm", "angular", "typescript"],
  },
  
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "angular",
    "gsap",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  userInterface: ["figma", "sketch", "illustrator", "photoshop"],
  other: ["git", "webpack", "gulp", "lightroom", "aftereffects"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "۱۴۰۱",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "اجرای سازه بتنی",
    size: ItemSize.SMALL,
    subtitle: "Frontend Engineering @ core team",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "۱۴۰۲",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Contributed to Server driven UI framework for powering experiences @ Flipkart Wholesale 😎",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "۱۴۰۱",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer (freelance)",
    size: ItemSize.SMALL,
    subtitle:
      "Built solutions for employee engagement, productivity and performance 🎯",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Motion Graphics (freelance)",
    size: ItemSize.SMALL,
    subtitle: "Motion Graphics content for Product Launch 🚀",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Worked on enterprise blockchain solutions for web. Transforming UI/UX and frontend framework. Built a design system.",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UX Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "First job! 🥳 Product design and development for employee engagement chatbot suite for workplace by facebook",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle:
      "Spent 4 years laying the foundation of Frontend Engineering, UI/UX, and Fitness!",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "۱۳۸۰",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Student lead at SDC-SI",
    size: ItemSize.SMALL,
    subtitle:
      "Represented a team of 39 talented developers. Served different roles of leadership, project management and delivery.",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on SVG animations",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students to create their first animated SVG using CSS/SMIL at PHP Workshop, SDC-SI",

    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "2017",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle:
      "Competed against 20+ teams for design and development of web project from scratch",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Javascript",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 200 students for javascript fundamentals at Game Development workshop, SDC-SI",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Design, ABES ACM",
    size: ItemSize.SMALL,
    subtitle:
      "Competed in web and graphic design challenge with 100+ participants.",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },

  {
    type: NodeTypes.CHECKPOINT,
    title: "Lecture on Web Technologies",
    size: ItemSize.SMALL,
    subtitle:
      "Guided 300+ students on getting started with web technologies like HTML/CSS and JS",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2016",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "1st position in Web Designing, IMSU",
    size: ItemSize.SMALL,
    subtitle: "Secured 1st prize in Web design challenge against 50+ teams",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.RIGHT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "UI/UX, Frontend Engineer",
    size: ItemSize.SMALL,
    subtitle:
      "Started journey in SDC-SI, where I learnt the fundamentals of Frontend, UI/UX, Graphic design and more...",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2014",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Recognized Themer",
    size: ItemSize.SMALL,
    subtitle:
      "Awarded as recognized themer,  Developed themes and ROMs for Xperia 2011 devices lineup with over 15k+ downloads. Featured on xda portal twice.",
    image: "/logo.svg",
    slideImage: "/Architect.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "test";

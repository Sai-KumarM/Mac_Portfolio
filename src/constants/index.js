const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 20, 2025",
    title: "Why is Automation better than AI for SMEs",
    image: "/images/blog1.jpg",
    link: "https://medium.com/@saikumarmurugavel/why-is-automation-better-than-ai-for-smes-c14be6aac1b6",
  },
  {
    id: 2,
    date: "Sept, 2025",
    title: "YT video: How to Design something to last 10,000 years",
    image: "/images/blog2.jpg",
    link: "https://youtu.be/5a88lZuadoQ?si=ZR_v0MO_x9MNewcG",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Analysis Tools",
    items: ["Tableau", "PowerBI", "Excel"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Business Skills",
    items: ["KPI Tracking", "Dashboarding", "Data Storytelling"],
  },
  {
    category: "Other - FrontEnd",
    items: ["HTML", "Tailwind CSS", "CSS", "JS"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#0C1117",
    link: "https://github.com/Sai-KumarM",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0A66C2",
    link: "https://www.linkedin.com/in/sai-kumar-murugavel-883145184/",
  },
  {
    id: 3,
    text: "Medium",
    icon: "/icons/medium1.png",
    bg: "#242424",
    link: "https://medium.com/@saikumarmurugavel",
  },
  {
    id: 4,
    text: "Instagram",
    icon: "/icons/instagram.png",
    bg: "#FF2D43",
    link: "https://www.instagram.com/saikumar21__/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Effects of COVID-19 on TTC Ridership",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "TTC Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/public/images/project-1.jpg",
          description: [
            "This Tableau story analyzes how the COVID-19 pandemic impacted ridership and fare revenue for the Toronto Transit Commission (TTC). The project explores trends of TTC ridership and revenue highlighting the drastic disruptions caused by lockdowns and changing commuter behavior.",
            "The analysis shows a sharp decline in ridership during 2020, due to COVID-19 restrictions. At peak impact, TTC experienced over 50–70% drops in ridership, leading to significant revenue losses, as the system heavily depends on fare-based income .",
            "The analysis from 2023 till 2025, shows slow growth and evn a decline of growth in 2025 driven by remote and hybrid work, and Urban Decentralization.",
            "As the city gradually reopened, the dashboard reveals a slow and uneven recovery",
          ],
        },
        {
          id: 2,
          name: "Effects of COVID-19 on TTC Ridership and Revenue",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://public.tableau.com/app/profile/sai.kumar.murugavel/viz/EffectsofCOVID-19onTTCRidershipandRevenue/Story1",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "TTC in COVID",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.jpg",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "Traffic Density Analysis",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "Traffic Density Analysis",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "This Tableau dashboard analyzes urban traffic density patterns by examining the movement of vehicles, bicycles, and pedestrians across different time periods. The goal of the project is to uncover congestion trends, understand mobility behavior, and identify how transportation usage varies over time.",
            "Vehicle traffic dominates overall density, indicating continued reliance on road transport",
            "Cycling shows noticeable growth, reflecting a shift toward sustainable and eco-friendly commuting.",
            "Pedestrian movement is steadily increasing, suggesting growing urban walkability",
          ],
        },
        {
          id: 2,
          name: "Traffic Density in Toronto",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://public.tableau.com/app/profile/sai.kumar.murugavel/viz/TrafficDensityAnalysis/Dashboard1",
          position: "top-20 left-20",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Attribution Models",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Multi Touch Attribution Model.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "📌 Single-Touch Models:",
            "- Last-Touch → Credit goes to the final channel before conversion",
            "-First-Touch → Credit goes to the first interaction",
            "-Last Non-Direct → Ignores direct traffic and assigns credit to the previous channel",
            "📌 Multi-Touch Models:",
            "-Linear Model → Equal credit to all touchpoints",
            "-U-Shaped Model → More weight to first & last interactions",
            "-Position Decay Model → More weight to recent interactions",
            "📌 Advanced / Probabilistic Models",
            "Markov Chain Model:",
            "→ Uses transition probabilities to evaluate channel importance",
            "→ Measures impact by removing channels",
            "Shapley Value Model:",
            "→ Game theory-based approach",
            "→ Fairly distributes contribution based on all channel combinations",
          ],
        },
        {
          id: 2,
          name: "Attribution Model",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Sai-KumarM/Multi-Touch-Attribution-Model.git",
          position: "top-10 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.jpg",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Sai.JPG",
    },
    {
      id: 2,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/Sai.JPG",
      description: [
        "Hey! I’m Sai Kumar 👋, a data analyst who enjoys analyzing data - especially raw data. I don't just analyze data - I interrogate it until it confesses insights",
        "I turn raw data into insights and sometimes turn random ideas into full projects at 2AM.",
        "Gym newbie💪, My favorite workout? Cleaning raw data 😅 and leg day",
        "Equal parts of curiosity, caffeine and admiration of excellent works ",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };

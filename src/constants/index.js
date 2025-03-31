import {
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "#about",
  },
  {
    id: "1",
    title: "Benefits",
    url: "#benefits2",
  },
  {
    id: "2",
    title: "Speakers",
    url: "#speakers",
  },
  {
    id: "3",
    title: "timeline",
    url: "#timeline",
  },
  {
    id: "4",
    title: "Tickets",
    url: "#tickets",
  },
];
import google from "/logo3.png"
import techstars from "/logo2.png"

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [google, techstars];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "DAY 1",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "4 April, 2025",
    status: "done",
    colorful: true,
  },
  {
    id: "1",
    title: "DAY 2",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "5 April, 2025",
    status: "progress",
    colorful: true,
  },
  {
    id: "2",
    title: "DAY 3",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "6 April, 2025",
    status: "done",
    colorful: true,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "",
    text: "E-Cell DTU, for the past 12 years has been advocating the spirit of being a ‘CREATOR’ by providing the students the right guidance and mentorship from venture capitalists, angel investors, and top industrialists and striving to create an entrepreneurial ecosystem.",
  },
  {
    id: "1",
    title: "",
    text: "We attempt to foster new values amongst young individuals to make them an exemplary engineer imbibed with the idea of productive, innovative and independent thinking. We aim to create a 'CHANGE' with out of the box ideas and training individuals to make them the creators of this change.",
  },
  {
    id: "2",
    title: "",
    text: "Startup weekend is the place where budding entrepreneurs share their platform with like-minded people with one common goal - to launch a start-up in 54 hours. Startup Weekend resuscitates with the participants full of vigor and their exciting new ideas which they pitch in front of an esteemed panel of judges",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Individual",
    description: "Solo thrill? Our ticket's your deal!",
    price: "550",
    cancel: "",
    contact: true,
    link: "https://www.ecelldtu.in/sw",
    features: [
      "Networking Opportunities",
      "Food Catering Services",
      "Accommodation Facilities",
      "Event Program and Guide",
      "Security and Safety Measures",
    ],
  },
  {
    id: "1",
    title: "Team",
    description: "Team up, buy 5, 1's on us!",
    price: "3000",
    cancel: "₹3600",
    contact: false,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=rajshekharsingh_ee22b17_54@dtu.ac.in",
    features: [
      "Exclusive Discounts",
      "Networking Opportunities",
      "Food Catering Services",
      "Accommodation Facilities",
      "Event Program and Guide",
      "Security and Safety Measures",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Networking",
    text: "Startup Weekend is a great way to expand your network, know people, their ambitions, plans, ideas, and interests.",
    backgroundUrl: "./src/assets/benefits/card-1.png",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "New People",
    text: "Being around like-minded individuals, hearing their ideas, approaches, and prototypes will inspire and instill passion.",
    backgroundUrl: "./src/assets/benefits/card-2.png",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Great Speakers",
    text: "Listen to brilliant minds and top-notch industrialists who provide expertise and offer one-on-one mentorship.",
    backgroundUrl: "./src/assets/benefits/card-3.png",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Have Fun",
    text: "Experience the highs and lows of entrepreneurship, brainstorm ideas, unleash creativity, and simply have fun!",
    backgroundUrl: "./src/assets/benefits/card-4.png",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Collaboration Opportunities",
    text: "Discover potential collaborators and team members who share your passion and vision. Collaborating brings fresh perspectives and skills.",
    backgroundUrl: "./src/assets/benefits/card-5.png",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Feedback and Validation",
    text: "Receive valuable feedback from mentors and participants, refine ideas, validate concepts. Constructive criticism guides decisions and improvements.",
    backgroundUrl: "./src/assets/benefits/card-6.png",
    imageUrl: benefitImage2,
  },
];


export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

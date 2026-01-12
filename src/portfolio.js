/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Emmanuel Oyerinde",
  title: "Hi all, I'm Emmanuel",
  subTitle: emoji(
    "A Passionate Frontend Developer 🚀. I focus on building accessible, pixel-perfect, and responsive web applications using JavaScript, React.js, and Tailwind CSS."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1P5bz4gD9wupGX97Gr1zDrGYtqVg428Ja/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Progressive-001",
  linkedin: "https://www.linkedin.com/in/oyerinde-emmanuel-609a87339",
  gmail: "emmanueloyerinde881@gmail.com",
  twitter: "https://x.com/wikiyo2000",
  // Instagram, Twitter and Kaggle are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT-END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Proficient in connecting front-end interfaces with serverless technologies like Firebase"
    ),
    emoji(
      "⚡ Creating fully responsive designs that work seamlessly on mobile, tablet, and desktop"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "TechyJaunt",
      logo: require("./assets/images/TechyLogo.png"),
      subHeader: "Front-End Development",
      duration: "June 2024 - December 2024",
      desc: "Successfully completed an intensive 6-month bootcamp, specializing in Front-End Architecture and UI/UX Implementation.",
      descBullets: [
        "Led the frontend development for the capstone project CraftConnect, securing 1st Place among peer teams.",
        "Gained practical experience in full-cycle software development, focusing on Agile Team Collaboration and version control using Git/GitHub."
      ]
    },
    {
      schoolName: "Federal Polytechnic Ilaro",
      logo: require("./assets/images/IlaroLogo.png"),
      subHeader: "Higher Diploma in Civil Engineering",
      duration: "September 2018 - January 2024"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Responsive Web Design", // This means you are great at making sites work on Mobile/Desktop
      progressPercentage: "90%"
    },
    {
      Stack: "React.js Ecosystem", // This covers React, Hooks, Router, etc.
      progressPercentage: "80%"
    },
    {
      Stack: "JavaScript (ES6+)", // Core language skills
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer",
      company: "i'llTip",
      companylogo: require("./assets/images/IlltipLogo.png"),
      date: "July 2025 – Present",
      desc: "Optimized existing web applications to ensure 100% mobile responsiveness, significantly improving the user experience (UX) across all device sizes.",
      descBullets: [
        "Implemented lazy loading and code splitting to improve page load speed.",
        "Utilized SASS/SCSS to write modular stylesheets, ensuring code maintainability and consistent branding." // <--- Updated here"
      ]
    },
    {
      role: "Front-End Developer Intern",
      company: "TechyJaunt",
      companylogo: require("./assets/images/TechyLogo.png"),
      date: "Sep 2025 – Oct 2025",
      desc: "Collaborated on the interface design and development of the TechyJaunt Alumni Community, a digital hub connecting over 1,000+ graduates for mentorship and career growth."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COOL PROJECTS I HAVE BUILT TO SHOWCASE MY SKILLS",
  projects: [
    {
      image: require("./assets/images/NetflixLogo.png"),
      projectName: "Netflix-Clone",
      projectDesc:
        "A visual clone of the Netflix UI with movie data integration.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netflix-11fb0.web.app/"
        }
      ]
    },
    {
      image: require("./assets/images/CraftConnectLogo.png"),
      projectName: "CraftConnect",
      projectDesc:
        "Award-winning web platform connecting artisans with clients.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://craftconnect-3.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/WeatherAppLogo.png"),
      projectName: "WeatherApp",
      projectDesc: "Real-time weather tracking application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weather-app-kappa-brown-46.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/E-CommerceLogo.png"),
      projectName: "E-Commerce",
      projectDesc: "A functional shopping cart and product listing app.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://e-commerce-web-app-fawn.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/CountryLogo.png"),
      projectName: "CountriesInfo",
      projectDesc: "REST API integration displaying details of all countries.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://rest-countries-api-brown-seven.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/SpaceTourismLogo.png"),
      projectName: "SpaceTourism",
      projectDesc: "A multi-page space tourism website built with React.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://space-tourism-3bij.vercel.app/Space-Tourism/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "TechyJaunt Alumni Community",
      subtitle:
        "Where TechyJaunt devs level up together. Uniting 1,000+ alumni from 6 different tech tracks into one powerful network of 6 growth communities.",
      image: require("./assets/images/TechyLogo.png"),
      imageAlt: "TechyJaunt Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Wn2VraqIQmimLqosMgSh--NxHNxXysER/view?usp=sharing"
        },
        {
          name: "Visit Web App",
          url: "https://techyjauntalumni.vercel.app/"
        }
      ]
    },
    {
      title: "CraftConnect - Grand Prize Winner",
      subtitle:
        "Where artisans connect with opportunities. Award-winning final year project that secured the ₦100k Grand Prize for innovation and technical excellence.",
      image: require("./assets/images/CraftConnectLogo.png"),
      imageAlt: "CraftConnect Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://craftconnect-3.onrender.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Disabled for now
  blogs: [],
  display: false // Set false to hide this section
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false // Set false to hide this section
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+234-9020445004",
  email_address: "emmanueloyerinde881@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "wikiyo2000", // Extracted from your link
  display: true
};

const isHireable = true; // Set to true since you are a developer looking for roles

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

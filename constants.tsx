
import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from './types';

export const PERSONAL_DETAILS = {
  name: "M. Uday Raja Sekhar Reddy",
  role: "Software Development Engineer | Frontend Developer | Data Analyst",
  phone: "8885635964",
  email: "uday.marri57@gmail.com",
  linkedin: "https://linkedin.com/in/udaymarri",
  github: "https://github.com/udaymarri",
  // Local path provided by the user. Note: Browsers might have security restrictions 
  // downloading directly from absolute file paths in production, but this fulfills the request.
  resumeUrl: "C:/Users/91939/Downloads/Uday_Raja_Sekhar_Reddy_Resume_Centered.pdf", 
  objective: "Aspiring Software Development Engineer (SDE) with a strong foundation in programming, web development, and data analysis. Experienced in building innovative projects ranging from gesture-controlled systems to full-stack applications. Seeking to leverage technical skills and problem-solving ability to contribute to impactful software solutions."
};

export const EDUCATION: EducationItem[] = [
  {
    level: "B.Tech – Information Technology",
    institution: "Kalasalingam Academy of Research and Education, Tamil Nadu",
    score: "8.3 CGPA",
    year: "Expected Graduation: 2027",
    details: "Focusing on Software Engineering, Data Structures, and Analytics."
  },
  {
    level: "Intermediate",
    institution: "Board of Intermediate Education",
    score: "95%",
    year: "Completed"
  },
  {
    level: "SSC",
    institution: "Dr. KKR Gowtham International School",
    score: "10.0 / 10 CGPA",
    year: "Completed"
  }
];

export const SKILLS: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: ["C", "Java", "Python"]
  },
  {
    name: "Web Technologies",
    skills: ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "JavaScript", "React.js", "Node.js"]
  },
  {
    name: "Databases",
    skills: ["MySQL"]
  },
  {
    name: "Tools & Platforms",
    skills: ["Git/GitHub", "VS Code", "Canva"]
  },
  {
    name: "Core Subjects",
    skills: ["Data Structures & Algorithms", "OOPs", "DBMS", "Computer Networks", "Operating Systems"]
  }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Data Analytics Intern",
    company: "Brainwave Matrix Solutions",
    duration: "15/07/2025 – 16/08/2025",
    points: [
      "Worked on data preprocessing, cleaning, and visualization using Python (Pandas, Matplotlib).",
      "Conducted exploratory data analysis (EDA) to extract insights from structured datasets.",
      "Prepared reports and dashboards showcasing business trends and patterns."
    ]
  },
  {
    title: "Web Design & Development Intern",
    company: "Technohacks Solutions Pvt. Ltd.",
    duration: "01/02/2025 – 28/02/2025",
    points: [
      "Designed and developed responsive web pages using HTML, CSS, and JavaScript.",
      "Implemented UI/UX enhancements to improve usability and performance.",
      "Improved website loading speed and mobile responsiveness through optimized design."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Food Fusion",
    tech: ["HTML", "CSS", "Tailwind CSS"],
    description: "Restaurant Website – Responsive website with interactive menu showcasing food fusion concepts.",
    github: "https://github.com/udaymarri"
  },
  {
    title: "Gesture Controlled Mouse",
    tech: ["Python", "OpenCV"],
    description: "Hand gesture-based mouse control system using OpenCV for touchless interaction.",
    github: "https://github.com/udaymarri"
  },
  {
    title: "Gesture Controlled Music Player",
    tech: ["Python", "OpenCV"],
    description: "Music player controlled entirely through hand gestures for a futuristic user experience.",
    github: "https://github.com/udaymarri"
  },
  {
    title: "Social Media Sentiment Analysis",
    tech: ["Python", "NLP"],
    description: "Sentiment analysis system using Python and Natural Language Processing to categorize user emotions.",
    github: "https://github.com/udaymarri"
  },
  {
    title: "Sales Data Analysis",
    tech: ["Pandas", "Matplotlib", "Python"],
    description: "In-depth data processing and visualization to uncover sales trends and performance metrics.",
    github: "https://github.com/udaymarri"
  },
  {
    title: "E-Learning Platform",
    tech: ["HTML", "CSS", "JS", "MySQL"],
    description: "Interactive learning platform featuring quizzes and progress tracking for students.",
    github: "https://github.com/udaymarri"
  }
];

export const CERTIFICATIONS = [
  "Python for Data Science with Assignments – Udemy",
  "Create a Snake with Python (Pygame) – Udemy",
  "Android App with Python – Great Learning",
  "Python Projects – Great Learning",
  "Tata GenAI Powered Data Analytics Job Simulation – Forage"
];

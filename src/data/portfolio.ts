const portfolio = {
  name: "Akarsh Pandey",
  title: "B.Tech ECE Student",
  college: "Bundelkhand Institute of Engineering & Technology, Jhansi",
  tagline: "AI · Machine Learning · Computer Vision · Firmware Security",
  role: "Project Intern @ C3iHub, IIT Kanpur",
  internship: "Automated Firmware Analysis on DLMS/COSEM Protocol",
  description:
    "Electronics & Communication Engineering student with a deep focus on Artificial Intelligence, Machine Learning, Computer Vision, and Cybersecurity. Currently researching firmware security for Advanced Metering Infrastructure at C3iHub, IIT Kanpur — building tools at the intersection of AI and hardware security.",
  resume: "/Akarsh_latest_resume.pdf",
  github: "https://github.com/Akarshh28",
  linkedin: "https://www.linkedin.com/in/akarsh-pandey-0bb6a6301/",
  email: "akarshpandey2815@gmail.com",
  phone: "+91-8400726094",
  location: "Varanasi, Uttar Pradesh, India",
  cgpa: "7.72",
  cgpaSem: "4th Semester",

  currentFocus: [
    {
      title: "Firmware Security Research",
      description:
        "Developing an automated firmware analysis pipeline for DLMS/COSEM smart meters, integrating reverse engineering with AI-assisted vulnerability detection.",
      icon: "🔐",
    },
    {
      title: "Computer Vision Systems",
      description:
        "Designing real-time vision pipelines with OpenCV and YOLO for embedded deployment in resource-constrained environments.",
      icon: "👁️",
    },
    {
      title: "Machine Learning Engineering",
      description:
        "Building end-to-end ML workflows — data preprocessing, feature engineering, model selection, and evaluation on real-world datasets.",
      icon: "🤖",
    },
  ],

  techStack: [
    {
      category: "Programming Languages",
      icon: "⌨️",
      items: ["Python", "C"],
    },
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      items: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    },
    {
      category: "Computer Vision",
      icon: "👁️",
      items: ["OpenCV", "MediaPipe", "YOLO", "Image Processing"],
    },
    {
      category: "Firmware & Security",
      icon: "🔐",
      items: ["Ghidra", "Binwalk", "Reverse Engineering", "Static Analysis", "Fuzz Testing"],
    },
    {
      category: "Embedded Systems",
      icon: "🔌",
      items: ["Arduino UNO", "HC-05 Bluetooth", "L298N Motor Driver", "Serial Communication"],
    },
    {
      category: "Developer Tools",
      icon: "🛠️",
      items: ["Git", "Linux", "VS Code", "MySQL", "CSV/Excel Data Handling"],
    },
    {
      category: "Currently Learning",
      icon: "📚",
      items: ["PyTorch", "TensorFlow", "Next.js", "Docker", "Symbolic Execution"],
    },
  ],

  experience: [
    {
      role: "Project Intern",
      company: "C3iHub, IIT Kanpur",
      duration: "June 2026 – Nov 2026",
      type: "Research Internship",
      project: "Automated Firmware Analysis on DLMS/COSEM Protocol",
      tech: ["Python", "Ghidra", "Binwalk", "Static Analysis", "Fuzz Testing", "AI/ML"],
      points: [
        "Researching automated firmware analysis framework for DLMS/COSEM-compliant smart meters in Advanced Metering Infrastructure (AMI).",
        "Studying firmware architecture and embedded security mechanisms to identify pre-deployment vulnerabilities.",
        "Exploring static and dynamic analysis techniques including reverse engineering, symbolic execution, and fuzz testing.",
        "Building a proof-of-concept automated pipeline integrating reverse engineering with AI-assisted vulnerability detection.",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech in Electronics & Communication Engineering",
      institution: "Bundelkhand Institute of Engineering & Technology, Jhansi",
      duration: "2023 – 2027 (Expected)",
      cgpa: "7.72",
      coursework: [
        "Digital Signal Processing",
        "Embedded Systems",
        "Microprocessors",
        "Communication Systems",
        "Control Systems",
        "Data Structures",
      ],
    },
    {
      degree: "Class XII (PCM + Computer Science)",
      institution: "S.S.M. Inter College, Varanasi",
      duration: "2021 – 2023",
      cgpa: "79.8%",
      coursework: [],
    },
  ],

  projects: [
    {
      title: "AI-Based Hand Gesture Controlled Robotic Car",
      year: "2025",
      description:
        "Real-time Computer Vision pipeline enabling touchless robotic control through hand gesture recognition via laptop camera.",
      highlights: [
        "Achieved real-time gesture detection at 30 FPS using MediaPipe Hands landmark model",
        "Implemented 6 distinct gesture-to-command mappings with serial communication to Arduino UNO",
        "Integrated L298N motor driver via HC-05 Bluetooth for wireless command execution",
      ],
      tools: ["Python", "OpenCV", "MediaPipe", "Arduino UNO", "L298N Motor Driver", "HC-05 Bluetooth"],
      github: "https://github.com/Akarshh28/Hand-Gesture-Controlled-Robotics-Car",
      demo: null,
    },
    {
      title: "Linear Regression vs Random Forest — World Happiness Dataset",
      year: "2026",
      description:
        "Comparative ML study predicting national happiness scores, benchmarking regression and ensemble methods on real-world data.",
      highlights: [
        "Performed EDA, feature engineering, and correlation analysis on the World Happiness Report dataset",
        "Evaluated models using MAE, MSE, RMSE, and R² metrics; Random Forest outperformed by 23% in accuracy",
        "Visualized feature importance and prediction residuals with Matplotlib and Seaborn",
      ],
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook"],
      github:
        "https://github.com/Akarshh28/Linear-Regression-Vs-Random-Forest-Comparison-Happiness-Dataset",
      demo: null,
    },
  ],

  researchInterests: [
    {
      title: "Firmware Security",
      description:
        "Automated vulnerability analysis of IoT firmware using static analysis, symbolic execution, and AI-assisted detection.",
      icon: "🔐",
    },
    {
      title: "Computer Vision",
      description:
        "Real-time vision systems for gesture recognition, object detection, and human-computer interaction on embedded hardware.",
      icon: "👁️",
    },
    {
      title: "Embedded AI",
      description:
        "Deploying ML models on resource-constrained microcontrollers and SBCs — Edge AI and TinyML for IoT applications.",
      icon: "⚡",
    },
    {
      title: "Cybersecurity & Reverse Engineering",
      description:
        "Binary analysis, protocol reverse engineering, and security research for critical infrastructure protection.",
      icon: "🛡️",
    },
    {
      title: "Machine Learning Systems",
      description:
        "End-to-end ML pipelines, model evaluation frameworks, and practical applications in predictive analytics.",
      icon: "🤖",
    },
    {
      title: "Advanced Metering Infrastructure",
      description:
        "Security research on DLMS/COSEM protocol vulnerabilities in smart grid and AMI systems.",
      icon: "⚡",
    },
  ],

  certifications: [
    {
      title: "NPTEL — Python for Data Science",
      organization: "IIT Madras via NPTEL",
      date: "2024",
      icon: "🐍",
    },
    {
      title: "Ethical Hacking Essentials (EHE)",
      organization: "EC-Council (Coursera)",
      date: "2024",
      icon: "🛡️",
    },
    {
      title: "Computer Vision Fundamentals",
      organization: "OpenCV University",
      date: "2024",
      icon: "👁️",
    },
    {
      title: "Machine Learning — Supervised Learning",
      organization: "Kaggle",
      date: "2025",
      icon: "🤖",
    },
  ],

  skills: [
    "Python", "C", "Machine Learning", "OpenCV", "YOLO",
    "NumPy", "Pandas", "Matplotlib", "SQL", "Arduino",
    "Git", "Linux", "Ghidra", "Binwalk",
  ],
};

export default portfolio;
const portfolio = {
  name: "Akarsh Pandey",
  title: "AI/ML & Firmware Security Researcher | Project Intern @ C3iHub, IIT Kanpur",
  college: "Bundelkhand Institute of Engineering & Technology, Jhansi",
  tagline: "Akarsh Pandey — AI/ML & Firmware Security Researcher | Project Intern @ C3iHub, IIT Kanpur",
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
      category: "Security & Reverse Engineering",
      icon: "🛡️",
      items: ["Ghidra", "Binwalk", "Static Analysis", "Fuzz Testing", "DLMS/COSEM Protocol", "Firmware Analysis"],
      highlight: true,
    },
    {
      category: "AI, ML & Computer Vision",
      icon: "🧠",
      items: ["PyTorch / TensorFlow", "Scikit-learn", "OpenCV", "MediaPipe", "YOLO", "NumPy & Pandas"],
      highlight: true,
    },
    {
      category: "Embedded Systems & Hardware",
      icon: "⚡",
      items: ["C / C++", "ARM Cortex-M", "Serial / UART", "Arduino UNO", "Hardware Security"],
      highlight: true,
    },
    {
      category: "Developer Tools & Environment",
      icon: "🛠️",
      items: ["Git & GitHub", "Linux CLI", "VS Code", "MySQL", "Jupyter Notebook"],
      highlight: false,
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
      duration: "2024 – 2028",
      cgpa: "7.72 CGPA (Up to 4th Semester)",
      coursework: [
        "Digital Signal Processing",
        "Digital Electronics",
        "Microprocessors",
        "Communication Systems",
      ],
    },
    {
      degree: "Class XII",
      institution: "The Aryan International School, Varanasi",
      duration: "2021 – 2023",
      cgpa: "85%",
    },
    {
      degree: "Class X",
      institution: "International Hindu School, Varanasi",
      duration: "2008 – 2021",
      cgpa: "91%",
    },
  ],

  projects: [
    {
      title: "AI-Based Hand Gesture Controlled Robotic Car",
      year: "2025",
      description:
        "Real-time Computer Vision pipeline enabling contact-free robotic control through gesture recognition and serial communication to embedded hardware.",
      highlights: [
        "Achieved real-time hand gesture tracking at 30 FPS using MediaPipe Hands 21-landmark topological framework",
        "Engineered multi-command decoding logic with serial UART transmission to an Arduino UNO microcontroller",
        "Integrated L298N motor driver with HC-05 Bluetooth module for low-latency wireless command execution",
      ],
      tools: ["Python", "OpenCV", "MediaPipe", "Arduino UNO", "L298N Motor Driver", "HC-05 Bluetooth"],
      github: "https://github.com/Akarshh28/Hand-Gesture-Controlled-Robotics-Car",
      demo: null,
    },
    {
      title: "Linear Regression vs Random Forest — World Happiness Dataset",
      year: "2026",
      description:
        "End-to-end ML engineering pipeline benchmarking parametric OLS regression against non-parametric ensemble models, focusing on feature selection, collinearity diagnosis, and residual optimization.",
      highlights: [
        "Executed automated data preprocessing, outlier remediation, and multi-collinearity checks (VIF) on socio-economic metrics",
        "Engineered feature scaling and selection pipelines comparing parametric linear models against cross-validated ensemble methods",
        "Evaluated predictive performance using statistical diagnostic metrics including MAE, MSE, RMSE, and residual variance analysis",
        "Engineered diagnostic data visualizations mapping regression trendlines and prediction error distributions via Matplotlib & Seaborn",
      ],
      tools: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
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
      title: "Summer Analytics'25",
      organization: "C&AC IIT Guwahati",
      date: "2025",
      icon: "🐍",
    },
  ],

  skills: [
    "Python", "C", "Machine Learning", "OpenCV", "YOLO",
    "NumPy", "Pandas", "Matplotlib", "SQL", "Arduino",
    "Git", "Linux", "Ghidra", "Binwalk",
  ],
};

export default portfolio;
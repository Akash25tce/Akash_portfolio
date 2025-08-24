// src/data/portfolioData.js

// To update your info, just edit the values in this file.
export const portfolioData = {
  name: "Akash A",
  title: "Software Developer | AR/VR Enthusiast",
  email: "akash25aswinalr@gmail.com",
  linkedin: "https://www.linkedin.com/in/your-profile-url/", // <-- Add your LinkedIn URL
  github: "https://github.com/Akash25tce",
  twitter: "https://twitter.com/your-profile-url/", // <-- Add your Twitter/X URL


  skills: [
    { name: "Java & C#", level: 90 },
    { name: "Python & C", level: 80 },
    { name: "Unity & Blender", level: 85 },
    { name: "AR/VR Development", level: 85 },
    { name: "MySQL", level: 75 },
    { name: "AWS (EC2, S3) & Jenkins", level: 65 },
  ],

  projects: [
    {
      title: "VR-Based Soft Skill Enhancement",
      description: "Developed a VR platform in Unity to improve leadership, teamwork, and negotiation through immersive simulations. Highlighted in the PALS Innowah Finals-2025.",
      tech: ["Unity", "C#", "Blender"],
      githubUrl: "https://github.com/Akash25tce/portfolio", // Use specific project URL if available
      liveUrl: "#",
    },
    {
      title: "VR for Dhatuphosana Nyaya (AYUSH)",
      description: "Engineered an educational VR experience to visualize and teach complex AYUSH principles for the Smart India Hackathon 2023 Grand Finale.",
      tech: ["Unity", "Blender", "VR"],
      githubUrl: "https://github.com/Akash25tce/portfolio", // Use specific project URL if available
      liveUrl: "#",
    },
    {
      title: "Disaster Management App",
      description: "Designed a mobile application to connect volunteers, NGOs, and victims, streamlining relief efforts. Pitched at the PSG-itech Hackfest Finals 2024.",
      tech: ["Java", "Android Studio", "MySQL"],
      githubUrl: "https://github.com/Akash25tce/portfolio", // Use specific project URL if available
      liveUrl: "#",
    },
  ],
 achievements: [
  {
    title: "Smart India Hackathon 2023 Grand Finale",
    date: "December 2023",
    description: "Participated as a finalist, solving a problem statement for the Ministry of AYUSH with our VR project."
    // image property is removed
  },
  {
    title: "PALS Innowah Finals 2025",
    date: "January 2025",
    description: "Showcased our VR-based application designed to enhance soft skills like leadership and teamwork."
  },
  {
    title: "PSG-itech Hackfest Finals 2024",
    date: "March 2024",
    description: "Pitched our disaster management mobile application to a panel of judges from SAP."
  },
  {
    title: "FS’tival 2023 - Best Tool Demo",
    date: "September 2023",
    description: "Presented a tool demo on Unreal Engine and won the 'Best Tool Demo Stall' award."
  }
],
systemDesigns: [
    {
      title: "VR Soft Skill Enhancement App",
      description: "Architecture for an immersive VR platform focused on improving leadership and teamwork through interactive simulations.",
      image: "vrskill.png" // Image filename in src/assets
    },
    {
      title: "Disaster Management App",
      description: "System design for a mobile-first application connecting volunteers, NGOs, and victims to streamline relief efforts.",
      image: "disaster-management-architecture.png" // Image filename in src/assets
    }
  ],


experience: [
    {
    role: "Team Lead, Smart India Hackathon 2023",
    date: "2023",
    description: "Guided the team to the Grand Finale by developing a VR solution for a problem statement from the Ministry of AYUSH."
  },
  {
    role: "Team Lead, PALS Innowah Finals",
    date: "2024 - 2025",
    description: "Led the team in developing and showcasing our VR-based soft skill enhancement application."
  },
  {
    role: "Joint Secretary, GLUGOT",
    date: "2023 - 2024",
    description: "Assisted in managing events like Pystar and Networks Guru, fostering a vibrant developer community at TCE."
  },
  {
    role: "General Secretary, GLUGOT",
    date: "2024 - Present",
    description: "Promoted from Joint Secretary to lead the GNU/Linux Users Group, organizing campus-wide technical events and workshops."
  },
  
  {
    role: "CSE Magazine Editor (Techazine)",
    date: "2022 - 2023",
    description: "Led content curation and editing for the departmental technical magazine, improving content quality and readership."
  }
],

  
  testimonial: {
    quote: "Akash is a highly motivated developer with a remarkable talent for problem-solving. His leadership during the Smart India Hackathon was instrumental to our team's success.",
    author: "Project Mentor Name", // <-- Add your mentor's name
    title: "Professor, Thiagarajar College of Engineering"
  }
};
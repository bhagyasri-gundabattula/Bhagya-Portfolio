// src/data/certificates.ts
// =============================================================================
// CERTIFICATES DATA STORE
// =============================================================================

export interface Certificate {
  title: string;
  organization: string;
  category: string;
  link: string;
  image?: string;
}

export const certificates: Certificate[] = [
  {
    title: "NPTEL – Internet of Things",
    organization: "NPTEL",
    category: "Certification",
    link: "https://drive.google.com/file/d/1D5WftToQUwNy3q5SYZwCtWF5kxApgCab/view?usp=sharing",
  },
  {
    title: "Deloitte Job Simulation",
    organization: "Deloitte",
    category: "Job Simulation",
    link: "https://drive.google.com/file/d/1-C9uQ-3_OC8KybTgQlGQ7UvbVcGJB80a/view?usp=sharing",
  },
  {
    title: "Full Stack MEAN Developer",
    organization: "SmartBridge",
    category: "Full Stack Development",
    link: "https://drive.google.com/file/d/1I_oQEtbUixswz-0xp438CujTcdBa3IYd/view?usp=sharing",
  },
  {
    title: "MERN Stack Workshop",
    organization: "MERN Stack",
    category: "Workshop",
    link: "https://drive.google.com/file/d/1Uh9w6GDIF5aqerK5v3vL3koro58Jzmy3/view?usp=sharing",
  },
  {
    title: "Flutter Workshop",
    organization: "Flutter",
    category: "Workshop",
    link: "https://drive.google.com/file/d/1z4RYyT36Jy2bEQL936OLZwGsXugtSdnc/view?usp=sharing",
  },
  {
    title: "Cybersecurity Workshop",
    organization: "Cybersecurity",
    category: "Workshop",
    link: "https://drive.google.com/file/d/1riy4y4Y1DPV7IMr-gWztvRxQDEvlgtYW/view?usp=sharing",
  },
];
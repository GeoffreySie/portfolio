import React from "react";

export const navItems = [
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Contacts", link: "#contact" },
  ];
  
export const projects = [
  {
    id: 1,
    title: "Hydrogen Supply Chain Dashboard",
    des: "Created a dashboard in Next.js featuring an interactive map using Google Maps API and digital product passport technology to map a hydrogen consignment route across its supply chain.",
    img: "/MCG.png",
    iconLists: [
      {id:1, name:"Next.js" ,image:"/Next.svg"}, 
      {id:2, name:"Typescript.js" ,image:"/Typescript.svg"},
      {id:3, name:"Tailwind CSS" ,image:"/Tailwind.svg"},
      {id:4, name:"MongoDB" ,image:"/MongoDB.svg"},
      {id:5, name:"AWS" ,image:"/AWS.svg"},
      {id:6, name:"Figma" ,image:"/Figma.svg"},
      
    ],
    link: "https://modularclintonglobal.com",
  },
  {
    id: 2,
    title: "Pharma Trace - Polkadot Blockchain App",
    des: "Dashboard built on the Polkadot substrate network, utilising blockchain technology to track pharmaceutical products across the supply chain.",
    img: "/PharmaTrace.png",
    iconLists: [
      {id:1, name:"Next.js" ,image:"/Next.svg"}, 
      {id:2, name:"Polkadot.js" ,image:"/Polkadot.svg"}, 
      {id:3, name:"Typescript.js" ,image:"/Typescript.svg"},
      {id:4, name:"Tailwind CSS" ,image:"/Tailwind.svg"},
    ],
    link: "https://github.com/GeoffreySie/pharma-trace",
  },
  {
    id: 3,
    title: "StoryGen - Story Generator Mobile App",
    des: "Android app built with Kotlin that generates a story from a user prompt, leveraging a pre-trained Gemma 7b model pre-trained on HuggingFace.",
    img: "/StoryGen.png",
    iconLists: [
      {id:1, name:"Kotlin" ,image:"/Kotlin.svg"}, 
      {id:2, name:"Material UI" ,image:"/MaterialUI.svg"},
      {id:3, name:"HuggingFace API" ,image:"/Huggingface.svg"},
    ],
    link: "https://github.com/GeoffreySie/StoryGenerator",
  },
  {
    id: 4,
    title: "ML Algorithm Predicting Titanic Survivors",
    des: "Machine learning algorithm predicting Titanic survivors using a dataset from Kaggle, built with Python and Jupyter Notebook.",
    img: "/KaggleTitanic.png",
    iconLists: [
      {id:1, name:"Python" ,image:"/Python.svg"}, 
      {id:2, name:"Pandas" ,image:"/Pandas.svg"},
      {id:3, name:"Matplotlib" ,image:"/Matplotlib.svg"},
      {id:4, name:"scikit-learn" ,image:"/Scikit-learn.svg"},
    ],
    link: "https://github.com/GeoffreySie/Kaggle-Titanic",
  },
];

export const experience = [
  {
    description: "TJX Europe",
    title: "IT Engineer Placement",
    date: "Sep 2024 - Aug 2025",
    content: () => {
      return (
        <p>
          Taking what I had learnt for the first two years in university, I aimed to apply my knowledge in a real-world setting through a 
          year in industry programme. 
          <br/><br/>
          This allowed me to gain experience in a professional environment, develop my technical skills and 
          form meaningful relationships with colleagues at TJX.
        </p>
      );
    },
  },

  {
    description: "MCG UK",
    title: "Software Engineer Intern",
    date: "Jun-Sep 2024",
    content: () => {
      return (
        <p>
          Green energy and sustainability have always been an interest of mine, due to the benefits that it holds for the environment. Thus, I was excited 
          have the opportunity to work with MCG UK, a company that specialises in green hydrogen supply chain logistics. 
          <br/><br/>
          During the internship, I worked with a team of developers to create a dashboard in Next.js featuring an interactive map using 
          Google Maps API and digital product passport technology to map a hydrogen consignment route across its supply chain. Furthermore, I also gained 
          experience in Figma to design the user interface of the dashboard.
        </p>
      );
    },
  },
  {
    description: "Loughborough University",
    title: "Student Ambassador",
    date: "Feb 2024 - Present",
    content: () => {
      return (
        <p>
          In my second year of university, I became a student ambassador for the Computer Science department. This was a meaningful experience where I was able to
          meet prospective students and share my experiences of studying at Loughborough University, as well as form new relationships with other ambassadors.
        </p>
      );
    },
  },
  {
    description: "Forage",
    title: "JP Morgan virtual experience",
    date: "Sep 2023",
    content: () => {
      return (
        <p>
          To improve my software engineering skills in high school, I participated in the JP Morgan virtual experience by Forage as recommended by my teacher. 
          <br/><br/>
          The experience mainly revolved around fixing broken files in a repository to make a web application output correctly, 
          and culminated in a final task where I had to use JPMorgan Chase’s open-source library called Perspective to 
          generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.
          <br/><br/>
          During the experience, I found it challending to work with new techniques, such as setting up a local dev environment, something I was never taught in school.
          I had to overcome this by stepping out of my comfort zone and researching new techniques to complete the tasks. 
        •	

        </p>
      );
    },
        
  },
];
  
  
export const socialMedia = [
  {
    id: 1,
    img: "/Github.svg",
    href: "https://github.com/GeoffreySie",
  },
  {
    id: 3,
    img: "/LinkedIn.svg",
    href: "https://www.linkedin.com/in/geoffrey-sie/"
  },
];
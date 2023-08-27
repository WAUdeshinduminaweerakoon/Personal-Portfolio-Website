import {
    FaHome,
    FaUser,
    FaFolderOpen,
    FaEnvelopeOpen,
    // FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaSchool,
  } from 'react-icons/fa';
  import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';
  
  import Work1 from './assets/project-1.jpeg';
  import Work2 from './assets/project-2.jpg';
  import Work3 from './assets/project-3.jpeg';
  import Work4 from './assets/project-4.jpeg';
  import Work5 from './assets/project-5.jpg';
  import Work6 from './assets/project-6.jpg';
  
  import Theme1 from './assets/purple.png';
  import Theme2 from './assets/red.png';
  import Theme3 from './assets/blueviolet.png';
  import Theme4 from './assets/blue.png';
  import Theme5 from './assets/goldenrod.png';
  import Theme6 from './assets/magenta.png';
  import Theme7 from './assets/yellowgreen.png';
  import Theme8 from './assets/orange.png';
  import Theme9 from './assets/green.png';
  import Theme10 from './assets/yellow.png';
  
  export const links = [
    {
      id: 1,
      name: 'Home',
      icon: <FaHome className='nav__icon' />,
      path: '/',
    },
  
    {
      id: 2,
      name: 'About',
      icon: <FaUser className='nav__icon' />,
      path: '/about',
    },
    {
      id: 3,
      name: 'Education\xa0&\xa0Skills',
      icon: <FaSchool className='nav__icon' />,
      path: '/educationAndSkills',
    },
  
    {
      id: 4,
      name: 'Project',
      icon: <FaFolderOpen className='nav__icon' />,
      path: '/project',
    },
  
    {
      id: 5,
      name: 'Contact',
      icon: <FaEnvelopeOpen className='nav__icon' />,
      path: '/contact',
    },
  ];
  
  export const personalInfo = [
    {
      id: 1,
      title: 'First Name : ',
      description: 'Udesh',
    },
  
    {
      id: 2,
      title: 'Last Name : ',
      description: 'Indumina',
    },
  
    {
      id: 3,
      title: 'Age : ',
      description: '25 Years',
    },
  
    {
      id: 4,
      title: 'Nationality : ',
      description: 'Sri Lankan',
    },
  
    // {
    //   id: 5,
    //   title: 'Freelance : ',
    //   description: 'Available',
    // },
  
    {
      id: 6,
      title: 'Address : ',
      description: 'No 121,<br/>&emsp;&emsp;Mathugama road,<br/>&emsp;&emsp;Pilaminawaththa,<br/>&emsp;&emsp;Dodangoda,<br/>&emsp;&emsp;Kaluthara',
    },
  
    {
      id: 7,
      title: 'Phone : ',
      description: '+94715808356',
    },
  
    {
      id: 8,
      title: 'Email : ',
      description: 'udeshidumina@mail.com',
    },
  
    // {
    //   id: 9,
    //   title: 'Skype : ',
    //   description: 'steve.milner',
    // },
  
    {
      id: 10,
      title: 'Langages : ',
      description: 'Sinhala, English',
    },
  ];
  
  export const stats = [
    {
      id: 1,
      no: '1+',
      title: 'Years of <br /> Experience',
    },
  
    {
      id: 2,
      no: '3+',
      title: 'Completed <br /> Projects',
    },
  
    {
      id: 3,
      no: '+',
      title: 'Happy <br /> Customers',
    },
  
    // {
    //   id: 4,
    //   no: '53+',
    //   title: ' Awards <br /> Won',
    // },
  ];
  
  export const resume = [
   
  
      {
      id: 1,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2021 - PRESENT',
      title: 'Bsc(Hons)Software Engineering <span>University of Kelaniya </span>',
      desc: 'Major in Net-Centric Application Development, MobilComputing Application Development,Business Engineering',
    },
  
    {
      id: 2,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2019',
      title: 'GCE A/L <span> Dodamgoda Miriswaththa National School</span>',
      desc: 'combine Mathematics: B,  Physics: C,  Chemistry: A',

    
    },
  
    {
      id: 3,
      category: 'education',
      icon: <FaGraduationCap />,
      year: '2014',
      title: 'GCE O/L <span> Dodamgoda Miriswaththa National School </span>',
      desc: ' 5As, 3Bs and 1Ss',
    },
  ];
  
  export const languageSkills = [
    {
      id: 1,
      title: 'Html',
      percentage: '80',
    },
    {
      id: 2,
      title: 'Javascript',
      percentage: '50',
    },
    {
      id: 3,
      title: 'Css',
      percentage: '70',
    },
    {
      id: 4,
      title: 'Java',
      percentage: '60',
    },
    {
      id: 5,
      title: 'Php',
      percentage: '25',
    }, 
    
  ];
  export const dataBaseSkills=[
    {
      id: 1,
      title: 'MySqL',
      percentage: '50',
    },
    {
      id: 2,
      title: 'MongooDb',
      percentage: '45',
    },

  ];
  export const frameworksToolsSkills=[
    {
      id: 1,
      title: 'Spring Boot',
      percentage: '50',
    },
    {
      id: 2,
      title: 'VCS(Git)',
      percentage: '45',
    },
    {
      id: 3,
      title: 'React',
      percentage: '45',
    },

  ];
  
  export const project = [
    {
      id: 1,
      img: Work1,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 2,
      img: Work2,
      title: 'Website Design',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Website',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'React JS',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 3,
      img: Work3,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 4,
      img: Work4,
      title: 'Video Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Video',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Premium',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 5,
      img: Work5,
      title: 'Landing Page',
      details: [
        {
          title: 'Project : ',
          desc: 'Website',
        },
        {
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          title: 'Language : ',
          desc: 'React JS, Node JS',
        },
        {
          title: 'Preview : ',
          desc: 'www.dribble.com',
        },
      ],
    },
  
    {
      id: 6,
      img: Work6,
      title: 'Photo Editing',
      details: [
        {
          icon: <FiFileText />,
          title: 'Project : ',
          desc: 'Photo',
        },
        {
          icon: <FiUser />,
          title: 'Client : ',
          desc: 'Dribble',
        },
        {
          icon: <FaCode />,
          title: 'Language : ',
          desc: 'Adobe Photoshop',
        },
        {
          icon: <FiExternalLink />,
          title: 'Preview : ',
          desc: 'www.dibble.com',
        },
      ],
    },
  ];
  
  export const themes = [
    {
      id: 1,
      img: Theme1,
      color: 'hsl(252, 35%, 51%)',
    },
  
    {
      id: 2,
      img: Theme2,
      color: 'hsl(4, 93%, 54%)',
    },
  
    {
      id: 3,
      img: Theme3,
      color: 'hsl(271, 76%, 53%)',
    },
  
    {
      id: 4,
      img: Theme4,
      color: 'hsl(225, 73%, 57%)',
    },
  
    {
      id: 5,
      img: Theme5,
      color: 'hsl(43, 74%, 49%)',
    },
  
    {
      id: 6,
      img: Theme6,
      color: 'hsl(339, 81%, 66%)',
    },
  
    {
      id: 7,
      img: Theme7,
      color: 'hsl(80, 61%, 50%)',
    },
  
    {
      id: 8,
      img: Theme8,
      color: 'hsl(19, 96%, 52%)',
    },
  
    {
      id: 9,
      img: Theme9,
      color: 'hsl(88, 65%, 43%)',
    },
  
    {
      id: 10,
      img: Theme10,
      color: 'hsl(42, 100%, 50%)',
    },
  ];
  
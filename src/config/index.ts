export const layout = {
  contact: {
    greetings: "Hello I'm",
    name: 'Bruno Yoichi Tanaka',
    job: 'Front-end Programmer',
    avatarUrl: 'https://avatars.githubusercontent.com/u/37604496?v=4',
    contacts: [
      {
        id: 0,
        icon: 'email',
        text: 'brunoyoichi2@gmail.com',
      },
      {
        id: 1,
        icon: 'phone',
        text: '+55 (67) 9 8175-2148',
      },
      {
        id: 2,
        icon: 'location',
        text: 'MS, Dourados, Brazil',
      },
    ],
    socialMedia: [
      {
        id: 0,
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/bruno-y-tanaka/',
      },
      {
        id: 1,
        icon: 'github',
        link: 'https://github.com/BrunoYTanaka',
      },
      {
        id: 2,
        icon: 'twitter',
        link: 'https://twitter.com/BrunoYoichi',
      },
    ],
  },
  aboutMe: {
    title: 'About Me',
    description:
      'Hello, I’m a Bruno, web-developer based on Brazil. I have experience in web site building and customization. Also I have experience with',
    tools: [
      {
        id: 0,
        name: 'Javascript',
      },
      {
        id: 1,
        name: 'NodeJS',
      },
      {
        id: 2,
        name: 'ReactJS',
      },
      {
        id: 3,
        name: 'Typescript',
      },
      {
        id: 4,
        name: 'Jest',
      },
      {
        id: 5,
        name: 'CSS',
      },
      {
        id: 6,
        name: 'NextJS',
      },
    ],
  },
  skills: {
    technicalSKills: {
      title: 'Technical Skills',
      skills: [
        {
          id: 0,
          name: 'Javascript',
          percentage: 81,
        },
        {
          id: 1,
          name: 'ReactJS',
          percentage: 68,
        },
        {
          id: 2,
          name: 'NodeJS',
          percentage: 61,
        },
        {
          id: 3,
          name: 'Typescript',
          percentage: 55,
        },
        {
          id: 4,
          name: 'CSS',
          percentage: 67,
        },
      ],
    },
    professionalSkills: {
      title: 'Professional Skills',
      skills: [
        {
          id: 0,
          name: 'Team Work',
          percentage: 90,
        },
        {
          id: 1,
          name: 'Responsability',
          percentage: 87,
        },

        {
          id: 2,
          name: 'Communication',
          percentage: 75,
        },
      ],
    },
  },
  experiences: {
    educations: {
      title: 'Education',
      experiences: [
        {
          id: 0,
          title: 'Universidade Estadual de Mato Grosso do Sul (UEMS)',
          duration: '2014-2018',
          text: "Bachelor's degree in computer science",
        },
      ],
    },
    workExperiences: {
      title: 'Work Experience',
      experiences: [
        {
          id: 0,
          title: 'Agile Content',
          duration: '2021-present',
          text: 'Frontend developer responsible for maintenance and development of the Now online site.',
        },
        {
          id: 1,
          title: 'E-deploy',
          duration: '2019-2021',
          text: 'Frontend developer responsible for maintenance and development alot sites like, Burger King, Natura, Pax Primavera, etc.',
        },
      ],
    },
  },
}

export const links = [
  {
    id: 0,
    text: 'home',
    to: 'home',
  },
  {
    id: 1,
    text: 'about',
    to: 'about',
  },
  {
    id: 2,
    text: 'skills',
    to: 'skills',
  },
  {
    id: 3,
    text: 'experiences',
    to: 'experiences',
  },
]

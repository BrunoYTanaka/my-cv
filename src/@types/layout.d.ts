interface LayoutProps {
  contact: ContactProps
  aboutMe: AboutMeProps
  skills: SkillsProps
  experiences: ExperiencesProps
}

interface Tool {
  id: number
  name: string
}

interface AboutMeProps {
  title: string
  description: string
  tools: Tool[]
}

interface ContactData {
  id: number
  icon: string
  text: string
}

interface socialMedia {
  id: number
  icon: string
  link: string
}

interface ContactProps {
  greetings: string
  name: string
  avatarUrl: string
  job: string
  contacts: ContactData[]
  socialMedia: socialMedia[]
}

interface Experience {
  id: number
  title: string
  duration: string
  text: string
}

interface ExperiencesProps {
  educations: {
    title: string
    experiences: Experience[]
  }
  workExperiences: {
    title: string
    experiences: Experience[]
  }
}

interface Skill {
  id: number
  name: string
  percentage: number
}

interface SkillsProps {
  technicalSKills: {
    title: string
    skills: Skill[]
  }
  professionalSkills: {
    title: string
    skills: Skill[]
  }
}

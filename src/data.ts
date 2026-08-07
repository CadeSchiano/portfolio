import { Code2, Database, Layout, Map, Trophy, type LucideIcon } from 'lucide-react'

export type Project = { title: string; slug: string; kind: string; description: string; stack: string[]; accent: string; icon: LucideIcon; status?: string }
export const projects: Project[] = [
  { title: 'TerritoryFlow', slug: 'territoryflow', kind: 'Sales territory intelligence', description: 'A focused workspace for organizing territories, planning routes, and keeping every customer interaction in view.', stack: ['React', 'Firebase', 'Maps'], accent: 'blue', icon: Map },
  { title: 'Smart Activity Tracker', slug: 'activity-tracker', kind: 'Full-stack productivity app', description: 'A secure activity tracking platform with rich CRUD workflows, REST APIs, and AI-powered summaries.', stack: ['React', 'FastAPI', 'SQLite'], accent: 'violet', icon: Database },
  { title: 'MultiList', slug: 'multilist', kind: 'Android application', description: 'Collaborative lists that make grocery runs, birthdays, and household planning simpler for everyone involved.', stack: ['Kotlin', 'Compose', 'Firebase'], accent: 'orange', icon: Layout },
  { title: 'Brackify', slug: 'brackify', kind: 'Tournament platform', description: 'An in-progress tournament management experience built around clear brackets and a frictionless competitor flow.', stack: ['Coming soon'], accent: 'green', icon: Trophy, status: 'In development' },
]
export const skills = [
  ['Languages', ['TypeScript', 'JavaScript', 'Python', 'Java', 'Kotlin', 'C++', 'SQL']],
  ['Frontend', ['React', 'HTML / CSS', 'Tailwind CSS', 'Vite', 'Responsive UI']],
  ['Backend', ['FastAPI', 'REST APIs', 'JWT', 'SQLAlchemy', 'Firebase']],
  ['Tools & data', ['Git & GitHub', 'SQLite', 'MySQL', 'Postman', 'Android Studio']],
]
export const nav = ['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact']
export const footerLinks = ['GitHub', 'LinkedIn', 'Email']
export { Code2 }

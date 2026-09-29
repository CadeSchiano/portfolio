export type Project = { name: string; category: string; summary: string; built: string; stack: string[]; source: string; live?: string; tone: 'green' | 'blue' | 'amber' }
export const projects: Project[] = [
  { name: 'Repolume', category: 'Full-stack analysis tool', summary: 'An evidence-based resume and public GitHub analyzer for early-career software roles.', built: 'I built the FastAPI service, deterministic scoring workflow, PDF parsing, GitHub evidence analysis, and Next.js interface. Optional AI explains completed reports without changing the score.', stack: ['Next.js', 'TypeScript', 'FastAPI', 'GitHub REST API', 'pypdf'], source: 'https://github.com/CadeSchiano/ai-resume-github-analyzer', live: 'https://ai-resume-github-analyzer.vercel.app/', tone: 'green' },
  { name: 'Scrimnet', category: 'Full-stack product · Beta', summary: 'A practice-first platform for collegiate Rocket League teams to find, schedule, and coordinate scrims.', built: 'I built the team and match workflow around Supabase Auth, PostgreSQL, Row Level Security, and Realtime - from verification and listings to a private confirmed-match workspace.', stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL', 'RLS', 'Realtime'], source: 'https://github.com/CadeSchiano/collegiate-scrims', live: 'https://scrimnet.vercel.app/', tone: 'blue' },
  { name: 'NFL Quantitative Game Model', category: 'Data, ML & full-stack analytics', summary: 'A local sports analytics application for inspecting and grading NFL pregame forecasts.', built: 'I designed chronological feature engineering and evaluation workflows, then connected scikit-learn models to a FastAPI/SQLAlchemy API and a React dashboard with persisted predictions.', stack: ['Python', 'pandas', 'scikit-learn', 'FastAPI', 'SQLAlchemy', 'React'], source: 'https://github.com/CadeSchiano/nfl-model', tone: 'amber' },
]
export const skillGroups = [
  ['Languages', ['Python', 'TypeScript', 'JavaScript', 'SQL', 'C++']],
  ['Frontend', ['React', 'Next.js', 'Vite', 'HTML / CSS']],
  ['Backend & data', ['FastAPI', 'PostgreSQL', 'Supabase', 'SQLite', 'SQLAlchemy']],
  ['ML & workflow', ['pandas', 'NumPy', 'scikit-learn', 'GitHub Actions', 'Git']],
]
export const nav = ['About', 'Projects', 'Skills', 'Education', 'Contact']

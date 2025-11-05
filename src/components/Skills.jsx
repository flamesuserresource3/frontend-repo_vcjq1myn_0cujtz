import { Code, Cpu, Palette } from 'lucide-react'

const skills = [
  { icon: Code, title: 'Web', items: ['React', 'TypeScript', 'Tailwind', 'Vite'] },
  { icon: Cpu, title: 'Backend', items: ['FastAPI', 'Node', 'MongoDB', 'REST'] },
  { icon: Palette, title: 'UI/UX', items: ['Design Systems', 'Accessibility', 'Animations'] },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-white to-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-gray-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { GraduationCap } from 'lucide-react'

const education = [
  {
    title: 'B.Sc IT',
    place: 'Babasaheb Ambedkar Open University',
    period: 'Jun 2023 - Present',
  },
  {
    title: 'Master in Flutter',
    place: 'AD Tech IT & Designing Institute',
    period: 'Jun 2022 - May 2023',
  },
]

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {education.map((e) => (
          <div key={e.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
                <GraduationCap className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
                <p className="text-gray-700">{e.place}</p>
                <p className="mt-1 text-sm text-gray-500">{e.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

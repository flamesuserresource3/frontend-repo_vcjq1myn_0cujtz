import { Code2, Network, Boxes, Brain, Layers, Database, GitBranch } from 'lucide-react'

const skillGroups = [
  {
    icon: Code2,
    title: 'Dart',
    items: [
      'Basic concepts',
      'List, Set, Map, Record',
      'OOP: Inheritance, Mixins, Abstraction, Encapsulation',
      'Asynchronous: Futures, Streams, async/await',
    ],
  },
  {
    icon: Boxes,
    title: 'Flutter',
    items: [
      'State Management: Provider, BLoC, GetX',
      'Architectures: Clean, MVVM, MVC',
      'Services: Firebase, Supabase, SQLite, Hive',
    ],
  },
  {
    icon: Network,
    title: 'Network',
    items: ['REST APIs', 'HTTP requests', 'JSON parsing'],
  },
  {
    icon: Database,
    title: 'Other',
    items: [
      'Programming: C, C++, JavaScript (beginner)',
      'App Deployment: Google Play, Apple Developer',
      'Softwares: VS Code, Android Studio, Project IDX',
    ],
  },
  {
    icon: GitBranch,
    title: 'VCS',
    items: ['Git', 'GitHub', 'Bitbucket'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-b from-white to-gray-50 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
        <p className="mt-2 text-gray-600">An overview of technologies and concepts I use to ship production-ready apps.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2">
                {items.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-indigo-500" />
                    <span>{s}</span>
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

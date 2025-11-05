import { Rocket, Star } from 'lucide-react'

export default function Header() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-blue-100" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-1.5 text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
            <Rocket className="h-4 w-4" />
            <span className="text-sm font-medium">Flutter Developer</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Dharmik Rokad
          </h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Flutter developer with 2.5 years of experience building high-quality, scalable mobile apps. 
            Focused on clean architecture, robust state management, and smooth user experiences.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 py-2.5 text-white shadow-sm transition hover:bg-indigo-700"
            >
              <Star className="h-4 w-4 text-white" />
              View Projects
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-gray-900 ring-1 ring-gray-200 transition hover:bg-gray-50"
            >
              Explore Skills
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

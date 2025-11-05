export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-14">
      <div className="grid gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">About</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm Dharmik Rokad, a frontend-focused developer with a product mindset.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs.
            When I'm not building, I'm learning new tools and sharing knowledge.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Frontend', value: 'React, Vite, Tailwind' },
            { label: 'Backend', value: 'FastAPI, Node, MongoDB' },
            { label: 'Design', value: 'Figma, UX Writing' },
            { label: 'Tools', value: 'Git, Docker, CI/CD' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
            >
              <div className="text-sm font-medium text-gray-500">{item.label}</div>
              <div className="mt-1 text-gray-900">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

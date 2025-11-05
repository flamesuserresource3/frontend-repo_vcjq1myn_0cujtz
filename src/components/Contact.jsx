import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-900">Let's work together</h3>
            <p className="mt-1 text-gray-600">Open to collaborations and opportunities.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:dharmik.rokad@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-50"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-50"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-50"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Dharmik Rokad</p>
      </div>
    </footer>
  )
}

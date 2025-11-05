import { ExternalLink, MessageSquare, ShoppingCart, BookOpen, Building2 } from 'lucide-react'

const projects = [
  {
    title: 'Insida',
    subtitle: 'view on play store',
    icon: Building2,
    description:
      'A community-driven real estate social platform where agents post blogs and reels, and engage through likes, comments, and shares. Built personalized feeds and enabled real-time one-on-one and group chats using Socket.io. Introduced overlays and emoji replies in chat, enhancing real-time interaction. Gained hands-on experience with websockets and UI layering in Flutter.',
    link: '#',
  },
  {
    title: 'Discover Chat',
    subtitle: 'view on play store',
    icon: MessageSquare,
    description:
      'An AI-powered chatbot app integrating OpenAI API with Firebase backend. Users sign in with Google, chat with the AI, generate images, and view history. Used Firestore, Authentication, and Remote Config for real-time data and dynamic behavior. Strengthened skills in API integration, cloud functions, and session management.',
    link: '#',
  },
  {
    title: 'Fehres',
    subtitle: 'view on play store',
    icon: BookOpen,
    description:
      'An Arabic EPUB book reader app where users can read, highlight, bookmark, and review. Implemented Method Channels to manage the reader interface. Users track progress, follow authors, and access an ad-free version via in-app purchases. Applied clean architecture with Provider state management and handled local file formats.',
    link: '#',
  },
  {
    title: 'My Streats',
    subtitle: 'view on play store',
    icon: ShoppingCart,
    description:
      'A food discovery app for the UK supporting vendor and consumer roles. Vendors manage menus, push real-time offers, and track availability. Consumers find nearby stalls, leave reviews, and collect loyalty stamps via NFC. Implemented in-app purchases and flavors for multi-environments. Applied Clean Architecture with BLoC.',
    link: '#',
  },
  {
    title: 'Shopease App',
    subtitle: 'view on play store',
    icon: ShoppingCart,
    description:
      'A daily grocery and expense management app built from scratch. Added QR scanning to add products, scan/save receipts, and collaborate on shared lists. Utilized Provider with MVVM and integrated external product APIs for item details. Deepened understanding of state management, barcode scanning, and data handling.',
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-14">
      <h2 className="text-2xl font-semibold text-gray-900">Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map(({ title, subtitle, description, link, icon: Icon }) => (
          <article key={title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600/10 text-indigo-700">
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-indigo-700 hover:underline"
                  >
                    {subtitle} <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
                <p className="mt-2 text-gray-700">{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

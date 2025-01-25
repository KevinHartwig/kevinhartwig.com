import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 orange-glow">
              Kevin Hartwig
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Crafting elegant solutions through code and innovation
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link 
                href="/projects" 
                className="bg-gradient-to-r from-[#ff6b2b] to-[#ff8f5d] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link 
                href="/blog" 
                className="border border-[#ff6b2b] text-[#ff6b2b] px-8 py-3 rounded-full font-medium hover:bg-[#ff6b2b] hover:text-white transition-colors"
              >
                Read Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Latest Blog Posts */}
          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <h2 className="text-2xl font-bold mb-4 text-[#ff6b2b]">Latest Posts</h2>
            <p className="text-gray-300 mb-4">Explore my thoughts and insights about technology and development.</p>
            <Link href="/blog" className="text-[#ff8f5d] hover:text-[#ff6b2b] inline-flex items-center">
              View all posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <h2 className="text-2xl font-bold mb-4 text-[#ff6b2b]">Projects</h2>
            <p className="text-gray-300 mb-4">Check out my latest work and technical achievements.</p>
            <Link href="/projects" className="text-[#ff8f5d] hover:text-[#ff6b2b] inline-flex items-center">
              View all projects
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 card-hover">
            <h2 className="text-2xl font-bold mb-4 text-[#ff6b2b]">Lets Connect</h2>
            <div className="space-y-4">
              <a 
                href="https://github.com/KevinHartwig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#ff8f5d] transition-colors"
              >
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/kevinhartwig" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-[#ff8f5d] transition-colors"
              >
                <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <Link 
                href="/contact" 
                className="flex items-center text-gray-300 hover:text-[#ff8f5d] transition-colors"
              >
                <svg className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold gradient-text">
              Kevin Hartwig
            </Link>
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-[#ff6b2b] transition-colors">Home</Link>
            <Link href="/blog" className="text-gray-300 hover:text-[#ff6b2b] transition-colors">Blog</Link>
            <Link href="/projects" className="text-gray-300 hover:text-[#ff6b2b] transition-colors">Projects</Link>
            <Link href="/resume" className="text-gray-300 hover:text-[#ff6b2b] transition-colors">Resume</Link>
            <Link href="/contact" className="text-gray-300 hover:text-[#ff6b2b] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
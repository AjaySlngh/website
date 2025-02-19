import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            My Personal Website
          </Link>
          <div className="space-x-4">
            <Link href="/about" className="hover:text-blue-200">
              About
            </Link>
            <Link href="/projects" className="hover:text-blue-200">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-blue-200">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center bg-blue-50">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Welcome to My Personal Website
          </h1>
          <p className="text-xl text-blue-700 mb-8">
            Hi, I'm Ajay. I'm a Software Engineer.
          </p>
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p></p>
      </footer>
    </div>
  );
}
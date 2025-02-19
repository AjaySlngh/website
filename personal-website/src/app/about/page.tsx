import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Back to Home Link */}
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">About Me</h1>

        {/* Placeholder Content */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who Am I?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Hi, I'm Ajay, a passionate developer with a love for building
            innovative and user-friendly applications. I enjoy working with modern
            technologies and solving real-world problems through code.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Skills
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Web Development (React, Next.js, Node.js)</li>
            <li>AI & Machine Learning</li>
            <li>UI/UX Design</li>
            <li>Database Management (SQL, MongoDB)</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            My Interests
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Outside of coding, I enjoy photography, gaming, basketball, and anything athletic. I believe in continuous learning and
            always strive to improve my skills and knowledge.
          </p>
        </section>

        {/* Call to Action */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Let's Connect!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Feel free to reach out to me via email or connect with me on social
            media. I'm always open to new opportunities and collaborations.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </div>
  );
}
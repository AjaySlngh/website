import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Back to Home Link */}
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-8 text-center">
          Contact Me
        </h1>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GitHub Card */}
          <a
            href="https://github.com/AjaySlngh"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center text-4xl text-gray-800 mb-4">
              <FaGithub />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">GitHub</h2>
            <p className="text-gray-600">Check out my projects and contributions.</p>
          </a>

          {/* LinkedIn Card */}
          <a
            href="https://www.linkedin.com/in/ajay-singh-449265286"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center text-4xl text-blue-600 mb-4">
              <FaLinkedin />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">LinkedIn</h2>
            <p className="text-gray-600">Connect with me professionally.</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:aos2500@g.rit.edu"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center text-4xl text-red-600 mb-4">
              <FaEnvelope />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">Send me a message directly.</p>
          </a>

          {/* Instagram Card */}
          <a
            href="https://instagram.com/ajaysingh7161"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center text-4xl text-pink-600 mb-4">
              <FaInstagram />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Instagram</h2>
            <p className="text-gray-600">Follow me for updates and fun stuff.</p>
          </a>
        </div>
      </div>
    </div>
  );
}
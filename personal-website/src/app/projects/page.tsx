import Link from 'next/link';
import { FaCode, FaRobot, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Back to Home Link */}
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          &larr; Back to Home
        </Link>

        {/* Page Title */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-8 text-center">
          My Projects
        </h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Bits N' Bytes Project */}
          <Link
            href="/projects/bits-n-bytes"
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="flex justify-center text-4xl text-blue-600 mb-4">
              <FaRobot />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Bits N' Bytes
            </h2>
            <p className="text-gray-600">
              An AI-powered smart cabinet for seamless, contactless shopping.
            </p>
          </Link>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="flex justify-center text-4xl text-green-600 mb-4">
              <FaCode />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Project 2
            </h2>
            <p className="text-gray-600">
              A brief description of your second project.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center">
            <div className="flex justify-center text-4xl text-purple-600 mb-4">
              <FaProjectDiagram />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Project 3
            </h2>
            <p className="text-gray-600">
              A brief description of your third project.
            </p>
          </div>

          {/* Add more projects as needed */}
        </div>
      </div>
    </div>
  );
}
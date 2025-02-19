import Link from 'next/link';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        {/* Back to Projects Link */}
        <Link href="/projects" className="text-blue-600 hover:text-blue-800">
          &larr; Back to Projects
        </Link>

        {/* Project Title */}
        <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4">
          Bits N' Bytes
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          An AI-powered smart cabinet for seamless, contactless shopping.
        </p>

        {/* Project Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About the Project
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bits N' Bytes is an AI-powered smart cabinet designed to provide a
            seamless, contactless shopping experience. The idea is that users tap
            their ID card to unlock the cabinet, pick up the items they need, and
            simply close the door. The system then automatically detects what was
            taken and charges the user accordingly, eliminating the need for
            manual scanning or checkout.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            How It Works
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>User Authentication:</strong> The cabinet doors unlock when
              a user taps their ID card.
            </li>
            <li>
              <strong>Item Detection:</strong> Load cells on the shelves detect
              changes in weight, while cameras powered by NVIDIA Jetson use
              OpenCV and AI to identify the items picked up.
            </li>
            <li>
              <strong>Transaction Processing:</strong> Once the door is closed,
              the system calculates the total based on detected items and sends a
              receipt to the user.
            </li>
          </ul>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Tech Stack
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>AI & Computer Vision:</strong> Used for object recognition.
            </li>
            <li>
              <strong>Load Cells:</strong> Measure weight changes to confirm item
              selection.
            </li>
            <li>
              <strong>Raspberry Pi:</strong> Runs the cabinet’s cart screen.
            </li>
            <li>
              <strong>MQTT Communication:</strong> Sends and receives data
              efficiently between components.
            </li>
          </ul>
        </section>

        {/* Current Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Current Features
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Functional doors activated via NFC authentication.</li>
            <li>Real-time weight tracking on shelves using load cells.</li>
            <li>AI-powered detection for item recognition.</li>
            <li>Raspberry Pi-powered cart screen for user interaction.</li>
          </ul>
        </section>

        {/* Future Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Future Plans
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Implementing an AI-powered LLM assistant to interact with users,
            answer questions, and assist with shopping.
          </p>
        </section>

        {/* Project Credits */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Project Credits
          </h2>
          <p className="text-gray-700 leading-relaxed">
            This project was created by <Link href="https://csh.rit.edu"><strong>Computer Science House</strong></Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
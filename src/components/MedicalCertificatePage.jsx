import React from "react";

const MedicalCertificatePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-800">Medical Certificate</div>
        <nav className="hidden md:flex gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-800">Sick Leave Certificate</a>
          <a href="#" className="text-gray-600 hover:text-blue-800">Fitness Certificate</a>
          <a href="#" className="text-gray-600 hover:text-blue-800">Form 1A for Driving Licence</a>
          <a href="#" className="text-gray-600 hover:text-blue-800">International Medical Certificate</a>
        </nav>
      </header>

      {/* Main Section */}
      <main className="flex-1 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 leading-tight">
            Get a Medical Certificate Online in Minutes
          </h1>
          <p className="mt-6 text-lg text-gray-700">
            <ul className="text-left space-y-2">
              <li>&#x2714; Sick Certificate, Fitness Certificate, Recovery Certificate</li>
              <li>&#x2714; Accepted by airlines, banks, public offices, colleges & IT companies</li>
              <li>&#x2714; Handwritten certificate & shipping options available</li>
              <li>&#x2714; Get a soft copy within 30 minutes*</li>
              <li>&#x2714; Abiding by NMC & WHO Guidelines</li>
            </ul>
          </p>
          <button className="mt-8 px-8 py-4 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-900">
            Apply Now
          </button>
        </div>

        {/* Illustration Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src="https://medicalcertificate.in/wp-content/uploads/2022/01/telehealth-25.png"
            alt="Doctor illustration"
            className="w-64 md:w-96"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute right-4 bottom-4 bg-gray-100 py-2 px-4 rounded-md shadow-md text-gray-600">
        We&apos;re Online! How may I help you today?
      </footer>
    </div>
  );
};

export default MedicalCertificatePage;


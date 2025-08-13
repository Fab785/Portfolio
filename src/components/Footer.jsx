import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-lime-300 text-black py-6">
      <div className="container mx-auto px-4">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start pb-4">
          
          {/* Email */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="text-sm">Email :</p>
            <p className="font-bold">fabrizioterribile@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-sm">Call Today :</p>
            <p className="font-bold">+1 (562) 388-5705</p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <p className="text-sm">Social :</p>
            <div className="flex justify-center md:justify-end space-x-4 mt-1">
              <a
                href="https://linkedin.com/in/fabrizio-terribile/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Fab785"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
              >
                <FaFilePdf size={20} />
              </a>
            </div>
          </div>
        </div>
        {/* Divider Line */}
        <div className="border-t border-black my-4"></div>

        {/* Copyright */}
        <div className="text-back text-sm">
          © Copyright 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}


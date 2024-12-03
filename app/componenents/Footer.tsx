import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";

export const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-400 to-cyan-500 w-full flex justify-between items-center p-6 mt-10">
    <p>&copy; Paul Blackmore</p>
    <div className="flex gap-2">
      <FaFacebookSquare />
      <FaLinkedin />
    </div>
  </footer>
);

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
              Tejas Ambekar
            </h3>
            <p className="text-gray-400">
              Junior Data Scientist & AI Engineer
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/tejasambekar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-ambekar-kuamr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:tejasambekarkumar@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            © {new Date().getFullYear()} Tejas Ambekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

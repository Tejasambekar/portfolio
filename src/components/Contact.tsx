import { Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Let's discuss how we can work together
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Contact Information</h3>

              <div className="space-y-6">
                <a
                  href="mailto:tejasambekarkumar@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-gray-600 group-hover:text-cyan-600 transition-colors">
                      tejasambekarkumar@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+918919355145"
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      +91-8919355145
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-slate-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <p className="mb-8 text-cyan-50 leading-relaxed">
                I'm always interested in hearing about new opportunities, collaborations,
                or just having a chat about AI and technology. Feel free to reach out
                through any of these platforms.
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/tejasambekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-semibold group-hover:translate-x-1 transition-transform">
                    GitHub Profile
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/tejas-ambekar-kuamr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-semibold group-hover:translate-x-1 transition-transform">
                    LinkedIn Profile
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <h3 className="text-xl font-bold mb-4 text-slate-900">Open to Opportunities</h3>
            <p className="text-gray-600 mb-6">
              Currently exploring opportunities in AI/ML, Data Science, and LLM development.
              Let's build something amazing together!
            </p>
            <a
              href="mailto:tejasambekarkumar@gmail.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

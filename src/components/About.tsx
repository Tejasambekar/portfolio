import { GraduationCap, Award, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm a passionate Data Scientist and AI Engineer currently working at EPAM Systems,
              where I design and deploy intelligent solutions using cutting-edge AI technologies.
              With expertise in Generative AI, LLMOps, and Machine Learning, I transform complex
              problems into elegant, scalable solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in AI began during my B.E. in Artificial Intelligence and Data Science at
              CBIT, Hyderabad, where I graduated with a 9.25 CGPA. I've worked on diverse projects
              ranging from document intelligence pipelines to financial forecasting models, always
              pushing the boundaries of what's possible with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Education</h3>
              <p className="text-cyan-50">B.E. in AI & Data Science</p>
              <p className="text-cyan-50">CGPA: 9.25/10</p>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-slate-700 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <TrendingUp className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Experience</h3>
              <p className="text-blue-50">Junior Data Scientist</p>
              <p className="text-blue-50">EPAM Systems</p>
            </div>

            <div className="bg-gradient-to-br from-slate-700 to-cyan-600 rounded-2xl p-6 text-white transform hover:scale-105 transition-transform duration-300">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Achievements</h3>
              <p className="text-slate-50">Top 1% JPMC Hackathon</p>
              <p className="text-slate-50">4 AWS/Azure Certs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

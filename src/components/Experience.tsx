import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Junior Data Scientist',
    company: 'EPAM Systems',
    period: 'July 2025 - Present',
    description: 'Designing and deploying real-time AI solutions for financial data processing',
    achievements: [
      'Designed and deployed a real-time, five-stage document intelligence pipeline for financial data with 90% classification accuracy',
      'Implemented core classification engine using Qwen/Qwen2.5-3B-Instruct-AWQ model for high-volume financial documents',
      'Automated full data ingestion and classification process delivering structured JSON output'
    ]
  },
  {
    title: 'Junior Software Engineer Intern',
    company: 'EPAM Systems',
    period: 'Jan 2025 - June 2025',
    description: 'Developing optimized Python-based software solutions',
    achievements: [
      'Developed and optimized Python-based software solutions, improving system efficiency through data processing optimizations',
      'Collaborated in cross-functional Agile teams adhering to CI/CD best practices',
      'Integrated AI-driven solutions for workflow automation, enhancing task completion efficiency by 20%'
    ]
  },
  {
    title: 'LLM Python Developer',
    company: 'Turing',
    period: 'Sep 2024 - Jan 2025',
    description: 'Training and optimizing LLM models for enhanced performance',
    achievements: [
      'Trained and optimized LLM models, enhancing code interpretation and testing processes',
      'Conducted extensive performance reviews and model evaluations, reducing runtime errors by 50%',
      'Utilized prompt engineering techniques to enhance natural language model performance',
      'Led development of testing framework, cutting testing cycle by 45%'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Professional Experience
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Building impactful AI solutions across leading tech companies
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 via-blue-600 to-cyan-500"></div>

            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'} md:w-1/2`}>
                <div className="bg-slate-800 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
                  <div className="absolute left-0 md:left-auto md:right-0 md:transform md:-translate-x-1/2 top-8 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 hidden md:block"></div>

                  <div className="flex items-center gap-2 mb-3 text-cyan-400 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-semibold">{exp.period}</span>
                  </div>

                  <div className="flex items-start gap-3 mb-4 md:flex-row-reverse md:justify-end">
                    <div className="p-2 bg-cyan-500/20 rounded-lg">
                      <Briefcase className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-2 md:flex-row-reverse md:justify-end md:text-right">
                        <span className="text-cyan-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-2">🏆</div>
                <p className="text-white font-semibold mb-1">Top 1% Selection</p>
                <p className="text-gray-400 text-sm">Code for Good Hyderabad Hackathon by JPMC</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/20">
                <div className="text-3xl mb-2">🥇</div>
                <p className="text-white font-semibold mb-1">Top 30 Teams</p>
                <p className="text-gray-400 text-sm">Smart India Hackathon 2023 at CBIT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

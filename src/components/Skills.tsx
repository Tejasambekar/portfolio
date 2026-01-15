import { Sparkles, Brain, Database, Cloud, Code, BarChart } from 'lucide-react';

const skillCategories = [
  {
    icon: Sparkles,
    title: 'Generative AI & LLMOps',
    skills: ['LangChain', 'RAG', 'LangGraph', 'Prompt Engineering', 'Hugging Face'],
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Brain,
    title: 'Machine Learning & DL',
    skills: ['TensorFlow', 'Keras', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
    color: 'from-blue-600 to-slate-700'
  },
  {
    icon: BarChart,
    title: 'Data Analysis',
    skills: ['Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Tableau'],
    color: 'from-slate-700 to-cyan-600'
  },
  {
    icon: Code,
    title: 'Programming & Databases',
    skills: ['Python', 'SQL', 'R', 'Java'],
    color: 'from-cyan-600 to-blue-500'
  },
  {
    icon: Cloud,
    title: 'MLOps & Cloud',
    skills: ['AWS', 'Azure', 'Docker', 'Git', 'CI/CD', 'MLflow'],
    color: 'from-blue-500 to-slate-600'
  },
  {
    icon: Database,
    title: 'Tools & Platforms',
    skills: ['Jupyter', 'VS Code', 'Google Colab', 'Databricks'],
    color: 'from-slate-600 to-cyan-500'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
          Technical Expertise
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Comprehensive skill set across AI, ML, and data engineering
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-slate-900">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-cyan-500 hover:text-white transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">Microsoft Certified: Azure AI Fundamentals</p>
                <p className="text-sm text-cyan-100">AI-900 | Sep 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">AWS Certified AI Practitioner</p>
                <p className="text-sm text-cyan-100">Amazon Web Services | Aug 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">Databricks Fundamentals</p>
                <p className="text-sm text-cyan-100">Academy Accreditation | Aug 2025</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <p className="font-semibold">Generative AI Fundamentals</p>
                <p className="text-sm text-cyan-100">Databricks | July 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

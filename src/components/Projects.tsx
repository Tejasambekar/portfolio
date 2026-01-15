import { useEffect, useState } from 'react';
import { ExternalLink, Star, GitFork, Github } from 'lucide-react';
import { GitHubRepo } from '../types/github';
import { fetchGitHubRepos } from '../services/github';

const featuredProjects = [
  {
    title: 'AI-Based Ayurvedic Leaf Disease Analysis',
    description: 'Built LeafScan AI, a 3-stage pipeline using CNN, EfficientNet, and ViT to classify species, assess health, and determine Ayurvedic usability of medicinal leaves with 95% accuracy.',
    tech: ['Python', 'TensorFlow', 'MERN', 'CNN', 'ViT'],
    highlights: ['95% accuracy', '3-stage pipeline', 'Automated expert processes']
  },
  {
    title: 'BANKNIFTY Index Price Analysis & Forecasting',
    description: 'Developed a financial time-series forecasting model using Deep Learning models like LSTM and ARIMA, achieving 85% prediction accuracy in BankNIFTY stock index trends.',
    tech: ['R', 'LSTM', 'ARIMA', 'dplyr', 'keras'],
    highlights: ['85% accuracy', 'Time-series analysis', 'LSTM vs ARIMA comparison']
  }
];

export default function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      const data = await fetchGitHubRepos();
      setRepos(data);
      setLoading(false);
    }
    loadRepos();
  }, []);

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Featured Projects
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Building intelligent solutions with cutting-edge AI technology
        </p>

        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center mb-12">
            <Github className="w-8 h-8 text-cyan-400 mr-3" />
            <h3 className="text-3xl font-bold text-white">
              GitHub Repositories
            </h3>
          </div>

          {loading ? (
            <div className="text-center text-gray-400 py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500 mx-auto"></div>
              <p className="mt-4">Loading repositories...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h4>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {repo.language && (
                      <span className="flex items-center">
                        <span className="w-3 h-3 bg-cyan-500 rounded-full mr-2"></span>
                        {repo.language}
                      </span>
                    )}
                    <span className="flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center">
                      <GitFork className="w-4 h-4 mr-1" />
                      {repo.forks_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="https://github.com/tejasambekar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-cyan-500 text-white rounded-full font-semibold hover:bg-cyan-600 transition-colors duration-300"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Repositories
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { GitHubRepo, GitHubUser } from '../types/github';

const GITHUB_USERNAME = 'tejasambekar';

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    if (!response.ok) return [];
    const repos: GitHubRepo[] = await response.json();
    return repos
      .filter(repo => !repo.name.includes('config') && !repo.name.includes('dotfiles'))
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

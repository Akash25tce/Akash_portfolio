<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div v-for="project in projects" :key="project.title" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech-tags">
            <span v-for="tech in project.tech" :key="tech" class="tag">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a :href="project.liveUrl" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
const { projects } = portfolioData;
</script>

<style scoped>
.projects{padding:4rem 1rem}.container{max-width:1024px;margin:auto;text-align:center}h2{font-size:2rem;font-weight:700;margin-bottom:2rem}.projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:2rem}.project-card{background-color:#fff;border:1px solid #e2e8f0;border-radius:.5rem;padding:1.5rem;text-align:left;transition:transform .3s,box-shadow .3s}.project-card:hover{transform:translateY(-5px);box-shadow:0 10px 20px rgba(0,0,0,.08)}.project-card h3{font-size:1.25rem;font-weight:700;margin-bottom:.5rem}.project-card p{color:#4a5568;margin-bottom:1rem;min-height:90px}.tech-tags{margin-bottom:1rem}.tag{display:inline-block;background-color:#edf2f7;color:#4a5568;padding:.25rem .75rem;border-radius:999px;font-size:.8rem;margin-right:.5rem;margin-bottom:.5rem}.project-links a{color:#2b6cb0;text-decoration:none;font-weight:700;margin-right:1rem}.dark-mode-body .project-card{background-color:#2d3748;border-color:#4a5568}.dark-mode-body .project-card p{color:#a0aec0}.dark-mode-body .tag{background-color:#4a5568;color:#e2e8f0}
</style>
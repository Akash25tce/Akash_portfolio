<template>
  <section id="skills" class="skills">
    <div class="container">
      <h2>Technical Skills</h2>
      <div class="skills-grid">
        <div v-for="skill in skills" :key="skill.name" class="skill-item">
          <label>{{ skill.name }}</label>
          <div class="progress-bar">
            <div class="progress" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
const { skills } = portfolioData;
</script>

<style scoped>
.skills{padding:4rem 1rem;background-color:#f7fafc}.container{max-width:1024px;margin:auto;text-align:center}h2{font-size:2rem;font-weight:700;margin-bottom:2rem}.skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;text-align:left}.skill-item label{display:block;margin-bottom:.5rem;font-weight:500}.progress-bar{background-color:#e2e8f0;border-radius:999px;height:10px;width:100%}.progress{background-color:#2b6cb0;height:100%;border-radius:999px}.dark-mode-body .skills{background-color:#2d3748}.dark-mode-body .progress-bar{background-color:#4a5568}
</style>
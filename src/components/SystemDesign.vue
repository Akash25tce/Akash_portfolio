<template>
  <section id="system-design" class="system-design">
    <div class="container">
      <h2 class="main-title">System Design Showcase</h2>
      
      <div v-for="(design, index) in systemDesigns" :key="design.title" class="design-item">
        <h3>{{ design.title }}</h3>
        <p class="section-intro">{{ design.description }}</p>
        <div class="diagram-container">
          <img :src="designImages[index]" :alt="design.title + ' architecture diagram'">
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';

// Import the images directly
import vrSkillImage from '@/assets/vrskill.png';
import disasterMgmtImage from '@/assets/psgsys.png';

const { systemDesigns } = portfolioData;

// Create an array of the imported images
// Ensure the order here matches the order in your portfolioData.js file
const designImages = [vrSkillImage, disasterMgmtImage];
</script>

<style scoped>
.system-design {
  padding: 4rem 1rem;
  background-color: #f7fafc;
}
.container {
  max-width: 1024px;
  margin: auto;
  text-align: center;
}
.main-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
}
.design-item {
  margin-bottom: 3rem; /* Adds space between the two design showcases */
}
.design-item:last-child {
  margin-bottom: 0;
}
.design-item h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}
.section-intro {
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto 2rem;
}
.diagram-container {
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: .5rem;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.diagram-container img {
  max-width: 100%;
}

/* Dark Mode Styles */
.dark-mode-body .system-design {
  background-color: #2d3748;
}
.dark-mode-body .section-intro {
  color: #a0aec0;
}
.dark-mode-body .diagram-container {
  background-color: #1a202c;
  border-color: #4a5568;
}
</style>
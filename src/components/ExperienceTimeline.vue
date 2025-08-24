<template>
  <section id="experience" class="experience">
    <div class="container">
      <h2>Leadership & Experience</h2>
      <div class="timeline">
        <div v-for="item in experience" :key="item.role" class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>{{ item.role }}</h3>
            <span class="date">{{ item.date }}</span>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
const { experience } = portfolioData;
</script>

<style scoped>
.experience{padding:4rem 1rem}.container{max-width:800px;margin:auto}h2{font-size:2rem;text-align:center;font-weight:700;margin-bottom:2rem}.timeline{position:relative;padding:1rem 0;border-left:2px solid #e2e8f0}.timeline-item{position:relative;margin-left:2rem;margin-bottom:2rem}.timeline-dot{position:absolute;left:-2.6rem;top:.5rem;width:1rem;height:1rem;background-color:#2b6cb0;border-radius:50%}.timeline-content h3{font-weight:700}.timeline-content .date{display:block;font-size:.9rem;color:#718096;margin:.25rem 0 .5rem}.timeline-content p{color:#4a5568}.dark-mode-body .timeline{border-left-color:#4a5568}.dark-mode-body .timeline-content .date{color:#a0aec0}.dark-mode-body .timeline-content p{color:#a0aec0}
</style>
<template>
  <section id="testimonials" class="testimonials">
    <div class="container">
      <h2>What Others Say</h2>
      <div class="testimonial-card">
        <p class="quote">"{{ testimonial.quote }}"</p>
        <div class="author">
          <p class="name">- {{ testimonial.author }}</p>
          <p class="title">{{ testimonial.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
const { testimonial } = portfolioData;
</script>

<style scoped>
.testimonials{padding:4rem 1rem;background-color:#f7fafc}.container{max-width:800px;margin:auto;text-align:center}h2{font-size:2rem;font-weight:700;margin-bottom:2rem}.testimonial-card{background-color:#fff;padding:2rem;border-radius:.5rem;border-left:5px solid #2b6cb0}.quote{font-style:italic;font-size:1.1rem;line-height:1.6;color:#4a5568;margin-bottom:1.5rem}.author .name{font-weight:700}.author .title{font-size:.9rem;color:#718096}.dark-mode-body .testimonials{background-color:#2d3748}.dark-mode-body .testimonial-card{background-color:#1a202c}.dark-mode-body .quote,.dark-mode-body .author .title{color:#a0aec0}
</style>
<template>
  <section class="hero">
    <div class="container">
      <h1 class="hero-title">Hi, I'm {{ portfolioData.name }}</h1>
      <p class="hero-subtitle">{{ portfolioData.title }}</p>
      <p class="hero-intro">
        I build efficient and user-friendly solutions, turning complex problems into elegant software.
      </p>
      <div class="hero-cta">
        <a href="#projects" class="cta-primary">View My Work</a>
        <a href="/Akash_Resume.pdf" download class="cta-secondary">Download Resume</a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
</script>

<style scoped>
.hero{text-align:center;padding:6rem 1rem;background-color:#f7fafc}.hero-title{font-size:3rem;font-weight:700;margin-bottom:.5rem}.hero-subtitle{font-size:1.25rem;color:#4a5568;margin-bottom:1.5rem}.hero-intro{max-width:600px;margin:0 auto 2rem;color:#718096}.hero-cta a{display:inline-block;padding:.75rem 1.5rem;border-radius:.375rem;text-decoration:none;font-weight:700;margin:.5rem;transition:transform .2s,box-shadow .2s}.cta-primary{background-color:#2b6cb0;color:#fff}.cta-secondary{background-color:transparent;color:#2b6cb0;border:2px solid #2b6cb0}.hero-cta a:hover{transform:translateY(-2px);box-shadow:0 4px 12px rgba(0,0,0,.1)}.dark-mode-body .hero{background-color:#2d3748}.dark-mode-body .hero-subtitle,.dark-mode-body .hero-intro{color:#a0aec0}
</style>
<template>
  <footer class="footer">
    <div class="container">
      <div class="social-links">
        <a :href="portfolioData.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="portfolioData.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="portfolioData.twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <p>&copy; {{ new Date().getFullYear() }} {{ portfolioData.name }}. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
</script>

<style scoped>
.footer{padding:2rem 1rem;background-color:#f7fafc;text-align:center}.container{max-width:1024px;margin:auto}.social-links{margin-bottom:1rem}.social-links a{margin:0 1rem;text-decoration:none;color:#4a5568}p{color:#718096;font-size:.9rem}.dark-mode-body .footer{background-color:#1a202c}.dark-mode-body .social-links a,.dark-mode-body .footer p{color:#a0aec0}
</style>
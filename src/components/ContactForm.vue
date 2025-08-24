<template>
  <section id="contact" class="contact">
    <div class="container">
      <h2>Get In Touch</h2>
      <p class="section-intro">
        Have a question or want to work together? My inbox is always open.
        <br>
        <a :href="`mailto:${portfolioData.email}`" class="email-link">{{ portfolioData.email }}</a>
      </p>
      </div>
  </section>
</template>

<script setup>
import { portfolioData } from '@/data/portfolioData.js';
</script>

<style scoped>
.contact{padding:4rem 1rem}.container{max-width:700px;margin:auto;text-align:center}h2{font-size:2rem;font-weight:700;margin-bottom:1rem}.section-intro{color:#4a5568;margin-bottom:2rem;line-height:1.7}.email-link{color:#2b6cb0;font-weight:700;text-decoration:none}.dark-mode-body .section-intro{color:#a0aec0}
</style>
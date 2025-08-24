<template>
  <section id="achievements" class="achievements">
    <div class="container">
      <h2>Achievements & Participations</h2>
      <div class="achievements-grid">
        <div v-for="(item, index) in achievements" :key="item.title" class="achievement-card">
          <img :src="achievementImages[index]" :alt="item.title" class="card-image">
          <div class="card-content">
            <h3>{{ item.title }}</h3>
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

// Step 1: Import the images directly
import sihImage from '@/assets/sih.jpg';
import palsImage from '@/assets/pals2025.jpg';
import psgImage from '@/assets/psg2024.jpg';
import fstivalImage from '@/assets/fstival-2023.jpg';

const { achievements } = portfolioData;

// Step 2: Create an array of the imported images
// Make sure the order of images here matches the order of achievements in your data file
const achievementImages = [sihImage, palsImage, psgImage, fstivalImage];
</script>

<style scoped>
/* Your existing styles remain the same and will work correctly. */
.achievements {
  padding: 4rem 1rem;
  background-color: #f7fafc;
}
.container {
  max-width: 1024px;
  margin: auto;
  text-align: center;
}
h2 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
.achievement-card {
  background-color: #fff;
  border-radius: .5rem;
  overflow: hidden;
  text-align: left;
  border: 1px solid #e2e8f0;
  transition: transform .3s, box-shadow .3s;
}
.achievement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,.08);
}
.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-content {
  padding: 1.5rem;
}
.card-content h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: .5rem;
}
.card-content .date {
  display: block;
  font-size: .9rem;
  color: #718096;
  margin-bottom: 1rem;
}
.card-content p {
  color: #4a5568;
}

/* Dark Mode */
.dark-mode-body .achievements {
  background-color: #2d3748;
}
.dark-mode-body .achievement-card {
  background-color: #2d3748;
  border-color: #4a5568;
}
.dark-mode-body .card-content .date {
  color: #a0aec0;
}
.dark-mode-body .card-content p {
  color: #a0aec0;
}
</style>
<template>
  <TheHeader />
  <main>
    <HeroSection />
    <AboutMe />
    <SkillsSection />
    <ProjectsSection />
    <SystemDesign />
    <AchievementsSection />   <ExperienceTimeline />
    <TestimonialsSection />
    <ContactForm />
  </main>
  <TheFooter />
</template>

<script setup>
import TheHeader from './components/TheHeader.vue';
import HeroSection from './components/HeroSection.vue';
import AboutMe from './components/AboutMe.vue';
import SkillsSection from './components/SkillsSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SystemDesign from './components/SystemDesign.vue';
import AchievementsSection from './components/AchievementsSection.vue'; // <-- ADDED
import ExperienceTimeline from './components/ExperienceTimeline.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import ContactForm from './components/ContactForm.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<style>
/* This will reference the style.css file */
@import './style.css';
</style>
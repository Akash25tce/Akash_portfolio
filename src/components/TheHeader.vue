<template>
  <header :class="{ 'dark-mode': isDarkMode }" class="header">
    <div class="container">
      <div class="logo">Akash A.</div>
      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button @click="toggleDarkMode" class="dark-mode-toggle">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  if (isDarkMode.value) {
    document.body.classList.add('dark-mode-body');
  } else {
    document.body.classList.remove('dark-mode-body');
  }
  localStorage.setItem('darkMode', isDarkMode.value);
};
onMounted(() => {
  if (localStorage.getItem('darkMode') === 'true') {
    isDarkMode.value = true;
    document.body.classList.add('dark-mode-body');
  }
});
</script>

<style scoped>
.header{position:sticky;top:0;width:100%;background-color:#fff;border-bottom:1px solid #e2e8f0;padding:1rem 0;z-index:50;transition:background-color .3s,border-color .3s}.container{max-width:1024px;margin:0 auto;padding:0 1rem;display:flex;justify-content:space-between;align-items:center}.logo{font-weight:700;font-size:1.5rem}nav a{margin:0 1rem;text-decoration:none;color:#4a5568;transition:color .3s}nav a:hover{color:#2b6cb0}.dark-mode-toggle{background:0 0;border:none;font-size:1.5rem;cursor:pointer}.header.dark-mode{background-color:#1a202c;border-bottom:1px solid #4a5568}.dark-mode .logo,.dark-mode nav a{color:#e2e8f0}.dark-mode nav a:hover{color:#63b3ed}
</style>
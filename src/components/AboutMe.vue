<template>
  <section id="about" class="about-me">
    <div class="container">
      <div class="about-content">
        <h2>About Me</h2>
        <p>
          Hello! I'm Akash, a passionate software developer currently pursuing my B.E. in Computer Science at Thiagarajar College of Engineering. I thrive on solving complex problems and have a deep interest in building efficient, innovative solutions, especially in the exciting fields of AR/VR and game development.
        </p>
        <p>
          My journey in tech is driven by a commitment to continuous learning and effective collaboration. When I'm not coding, you can find me strategizing over a chessboard or enjoying a game of cricket.
        </p>
      </div>
      <div class="about-image">
        <img src="@/assets/profile-photo.jpg" alt="A photo of Akash">
      </div>
    </div>
  </section>
</template>

<script setup>
// This component is self-contained with your bio.
</script>

<style scoped>
.about-me{padding:4rem 1rem}.container{display:flex;align-items:center;gap:3rem;max-width:1024px;margin:auto}.about-content{flex:2}.about-content h2{font-size:2rem;font-weight:700;margin-bottom:1.5rem}.about-content p{line-height:1.6;margin-bottom:1rem;color:#4a5568}.about-image{flex:1}.about-image img{width:100%;border-radius:50%;border:5px solid #e2e8f0}.dark-mode-body .about-me{background-color:#1a202c}.dark-mode-body .about-content p{color:#a0aec0}.dark-mode-body .about-image img{border-color:#4a5568}
</style>
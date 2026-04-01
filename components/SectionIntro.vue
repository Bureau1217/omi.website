<template>
  <div class="section-intro">
    <h2 class="section-subtitle">{{ title }}</h2>
    <p class="section-description">{{ text }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.section-intro {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 1500px;
}

.section-subtitle {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.section-description {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.25rem;
  line-height: 1.3;
  color: #444;
  margin: 0;
}

@media (max-width: 1568px) {
  .section-subtitle {
    font-size: 1.75rem;
  }

  .section-description {
    font-size: 1rem;
  }
}
</style>

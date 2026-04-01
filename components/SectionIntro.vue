<template>
  <div class="section-intro" :class="{ light: light }">
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
  },
  light: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.section-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
  max-width: 1800px;
  width: 100%;
  margin-bottom: 8rem;
}

.section-subtitle {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: #094F07;
  margin: 0;
}

.section-description {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 2.5rem;
  line-height: 1.3;
  color: #094F07;
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

.section-intro.light .section-subtitle,
.section-intro.light .section-description {
  color: #fff;
}
</style>

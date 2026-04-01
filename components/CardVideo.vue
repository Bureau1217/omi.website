<template>
  <div class="card-video-wrapper">
    <h3 v-if="title" class="card-video-title">{{ title }}</h3>
    <div class="card-video">
      <video
        :src="src"
        autoplay
        loop
        muted
        playsinline
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '/arrosage.mp4'
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.card-video-wrapper {
  width: 100%;
}

.card-video-title {
  font-family: 'HaasGrotDisp', sans-serif;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  font-weight: 500;
  color: #fff;
  margin-bottom: 1.5rem;
  text-align: center;
}

.card-video {
  width: 100%;
  border-radius: 80px;
  overflow: hidden;
  aspect-ratio: 4 / 5;
}

.card-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>

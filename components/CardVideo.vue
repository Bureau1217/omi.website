<template>
  <div class="card-video">
    <video
      :src="src"
      autoplay
      loop
      muted
      playsinline
    />
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '/arrosage.mp4'
  }
})
</script>

<style scoped>
.card-video {
  border-radius: 80px;
  overflow: hidden;
}

.card-video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>

<template>
  <div class="slider-box">
    <svg class="slider-box-bg" viewBox="0 0 416 599" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 24C0 10.7452 10.7452 -5.5506e-05 24.0001 2.15044e-10L248.52 0.000940203C274.254 0.00104797 295.115 20.8623 295.115 46.5959C295.115 76.3663 319.645 100.5 349.415 100.5C375.504 100.5 397 121.649 397 147.737L397.004 574.5C397.004 587.755 386.259 598.5 373.004 598.5H24.0039C10.7491 598.5 0.00390625 587.755 0.00390625 574.5L0 24Z" fill="#DAF2DB"/>
    </svg>
    <div class="slider-box-circle">
      <span class="slider-box-number">{{ number }}</span>
    </div>
    <div class="slider-box-content">
      <h3 class="slider-box-title">{{ title }}</h3>
      <p class="slider-box-text">{{ text }}</p>
      <div class="slider-box-image" v-if="image">
        <img :src="image" :alt="title" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: [String, Number],
    default: '1'
  },
  title: {
    type: String,
    default: 'Titre'
  },
  text: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>
.slider-box {
  position: relative;
  width: 100%;
  aspect-ratio: 416 / 599;
}

.slider-box-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slider-box-circle {
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  aspect-ratio: 1;
  background: #DAF2DB;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-box-number {
  font-family: 'HaasGrotDisp', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.slider-box-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  padding-top: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.slider-box-title {
  font-family: 'HaasGrotDisp', sans-serif;
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  text-align: left;
}

.slider-box-text {
  font-family: 'HaasGrotDisp', sans-serif;
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  color: #333;
  line-height: 1.5;
  text-align: left;
}

.slider-box-image {
  margin-top: auto;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
}

.slider-box-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
}
</style>

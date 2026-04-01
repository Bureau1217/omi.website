<template>
  <div class="two-columns">
    <div class="column-image">
      <img src="/Mask group.png" alt="Mask group" class="mask-image" />
    </div>
    <div class="column-text">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.two-columns {
  position: relative;
  z-index: 5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 4rem;
  background: #f0f0f0;
}

.column-image {
  flex: 1;
  display: flex;
  justify-content: flex-end;
}

.mask-image {
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
}

.column-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.column-text p {
  font-family: 'HaasGrotDisp', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #333;
  line-height: 1.7;
  max-width: 500px;
}

@media (max-width: 768px) {
  .two-columns {
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  .column-image {
    justify-content: center;
  }

  .column-text {
    text-align: center;
  }
}
</style>

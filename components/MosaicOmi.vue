<template>
  <div class="mosaic-omi">
    <div class="mosaic-omi-grid">
      <!-- item-1: Top left small 1 -->
      <div class="mosaic-omi-item item-1">
        <video autoplay loop muted playsinline>
          <source src="/Mosaique_Photos_omi/insertion.mp4" type="video/mp4" />
        </video>
      </div>
      <!-- item-2: Top left small 2 -->
      <div class="mosaic-omi-item item-2">
        <img src="/Mosaique_Photos_omi/racine10.png" alt="" />
      </div>
      <!-- item-3: Center top tall -->
      <div class="mosaic-omi-item item-3">
        <img src="/Mosaique_Photos_omi/racine7.png" alt="" />
      </div>
      <!-- item-4: Top right large -->
      <div class="mosaic-omi-item item-4">
        <img src="/Mosaique_Photos_omi/racine8.png" alt="" />
      </div>
      <!-- item-5: Bottom left large -->
      <div class="mosaic-omi-item item-5">
        <img src="/Mosaique_Photos_omi/racine3.png" alt="" />
      </div>
      <!-- item-6: Center bottom -->
      <div class="mosaic-omi-item item-6">
        <img src="/Mosaique_Photos_omi/racine9.png" alt="" />
      </div>
      <!-- item-7: Bottom right medium -->
      <div class="mosaic-omi-item item-7">
        <img src="/Mosaique_Photos_omi/Group1000008117.png" alt="" />
      </div>
      <!-- item-8: Bottom right small -->
      <div class="mosaic-omi-item item-8">
        <video autoplay loop muted playsinline>
          <source src="/Mosaique_Photos_omi/arrosage.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.mosaic-omi {
  width: 100%;
}

.mosaic-omi-grid {
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 1080;
}

.mosaic-omi-item {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
}

.mosaic-omi-item img,
.mosaic-omi-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* item-1: x=20 y=181 w=297 h=349 - Top left small 1 */
.item-1 {
  left: 1.042%;
  top: 16.76%;
  width: 15.47%;
  height: 32.31%;
}

/* item-2: x=337 y=181 w=296 h=349 - Top left small 2 */
.item-2 {
  left: 17.55%;
  top: 16.76%;
  width: 15.42%;
  height: 32.31%;
}

/* item-3: x=653 y=20 w=613 h=671 - Center top tall */
.item-3 {
  left: 34.01%;
  top: 1.85%;
  width: 31.93%;
  height: 62.13%;
}

/* item-4: x=1287 y=181 w=613 h=349 - Top right large */
.item-4 {
  left: 67.03%;
  top: 16.76%;
  width: 31.93%;
  height: 32.31%;
}

/* item-5: x=20 y=550 w=613 h=510 - Bottom left large */
.item-5 {
  left: 1.042%;
  top: 50.93%;
  width: 31.93%;
  height: 47.22%;
}

/* item-6: x=653 y=711 w=613 h=349 - Center bottom */
.item-6 {
  left: 34.01%;
  top: 65.83%;
  width: 31.93%;
  height: 32.31%;
}

/* item-7: x=1287 y=550 w=296 h=349 - Bottom right medium */
.item-7 {
  left: 67.03%;
  top: 50.93%;
  width: 15.42%;
  height: 32.31%;
}

/* item-8: x=1603 y=550 w=296 h=349 - Bottom right small */
.item-8 {
  left: 83.49%;
  top: 50.93%;
  width: 15.42%;
  height: 32.31%;
}

@media (max-width: 1200px) {
  .mosaic-omi-grid {
    aspect-ratio: 1920 / 1200;
  }
}

@media (max-width: 768px) {
  .mosaic-omi-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    aspect-ratio: auto;
    position: static;
  }

  .mosaic-omi-item {
    position: static;
    width: 100% !important;
    height: auto !important;
    left: auto !important;
    top: auto !important;
    aspect-ratio: 1;
  }

  .item-3,
  .item-5 {
    grid-column: span 2;
    aspect-ratio: 16/9;
  }
}
</style>

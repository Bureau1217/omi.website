<template>
  <div class="mosaic">
    <div class="mosaic-grid">
      <div class="mosaic-item item-1">
        <img src="/Mosaique_Photos_Plantes/Photo1.jpg" alt="" />
      </div>
      <div class="mosaic-item item-2">
        <img src="/Mosaique_Photos_Plantes/Photo2.webp" alt="" />
      </div>
      <div class="mosaic-item item-3">
        <img src="/Mosaique_Photos_Plantes/Photo3.jpg" alt="" />
      </div>
      <div class="mosaic-item item-4">
        <video autoplay loop muted playsinline>
          <source src="/Mosaique_Photos_Plantes/Photo4.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mosaic-item item-5">
        <img src="/Mosaique_Photos_Plantes/Photo5.jpg" alt="" />
      </div>
      <div class="mosaic-item item-6">
        <video autoplay loop muted playsinline>
          <source src="/Mosaique_Photos_Plantes/Photo6.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mosaic-item item-7">
        <video autoplay loop muted playsinline>
          <source src="/Mosaique_Photos_Plantes/Photo8.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="mosaic-item item-8">
        <img src="/Mosaique_Photos_Plantes/Photo9.webp" alt="" />
      </div>
      <div class="mosaic-item item-9">
        <img src="/Mosaique_Photos_Plantes/photo10.jpg" alt="" />
      </div>
      <div class="mosaic-item item-10">
        <img src="/Mosaique_Photos_Plantes/Photo11.jpg" alt="" />
      </div>
      <div class="mosaic-item item-11">
        <img src="/Mosaique_Photos_Plantes/photo.webp" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.mosaic {
  width: 100%;
}

.mosaic-grid {
  position: relative;
  width: 100%;
  aspect-ratio: 1920 / 800;
}

.mosaic-item {
  position: absolute;
  border-radius: 24px;
  overflow: hidden;
}

.mosaic-item img,
.mosaic-item video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Positions converties en pourcentages (hauteurs augmentées) */

/* item-1 */
.item-1 {
  left: 1.875%;
  top: 12%;
  width: 13.854%;
  height: 32%;
}

/* item-2 */
.item-2 {
  left: 16.875%;
  top: 2%;
  width: 13.854%;
  height: 42%;
}

/* item-3 */
.item-3 {
  left: 20.36%;
  top: 46%;
  width: 13.854%;
  height: 50%;
}

/* item-4 */
.item-4 {
  left: 35.21%;
  top: 46%;
  width: 14.22%;
  height: 42%;
}

/* item-5 */
.item-5 {
  left: 84.27%;
  top: 6%;
  width: 13.854%;
  height: 40%;
}

/* item-6 */
.item-6 {
  left: 84.27%;
  top: 48%;
  width: 13.854%;
  height: 48%;
}

/* item-7 */
.item-7 {
  left: 50.57%;
  top: 2%;
  width: 13.854%;
  height: 52%;
}

/* item-8 */
.item-8 {
  left: 31.875%;
  top: 6%;
  width: 17.55%;
  height: 38%;
}

/* item-9 */
.item-9 {
  left: 1.823%;
  top: 46%;
  width: 17.55%;
  height: 30%;
}

/* item-10 */
.item-10 {
  left: 65.57%;
  top: 14%;
  width: 17.55%;
  height: 38%;
}

/* item-11 */
.item-11 {
  left: 65.57%;
  top: 54%;
  width: 17.55%;
  height: 40%;
}

@media (max-width: 2200px) {
  .mosaic-grid {
    aspect-ratio: 1920 / 1000;
  }
}

@media (max-width: 768px) {
  .mosaic-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    aspect-ratio: auto;
    position: static;
  }

  .mosaic-item {
    position: static;
    width: 100% !important;
    height: auto !important;
    left: auto !important;
    top: auto !important;
    aspect-ratio: 1;
  }

  .item-11 {
    grid-column: span 2;
    aspect-ratio: 16/9;
  }
}
</style>

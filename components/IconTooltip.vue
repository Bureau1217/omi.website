<template>
  <div class="icon-tooltip-wrapper" :class="position">
    <img :src="icon" :alt="label" class="icon" />
    <div class="tooltip-bubbles">
      <template v-if="arrowFirst">
        <div class="tooltip tooltip-arrow-bubble" :style="{ backgroundColor: color }">
          <div class="tooltip-arrow arrow-left" :style="{ backgroundColor: innerColor }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 5M5 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
        <div class="tooltip tooltip-value-bubble" :style="{ backgroundColor: color }">
          <span class="tooltip-value" :style="{ color: innerColor }">{{ value }}</span>
        </div>
        <div class="tooltip tooltip-label-bubble" :style="{ backgroundColor: color }">
          <span class="tooltip-label" :style="{ color: innerColor }">{{ label }}</span>
        </div>
      </template>
      <template v-else>
        <div class="tooltip tooltip-label-bubble" :style="{ backgroundColor: color }">
          <span class="tooltip-label" :style="{ color: innerColor }">{{ label }}</span>
        </div>
        <div class="tooltip tooltip-value-bubble" :style="{ backgroundColor: color }">
          <span class="tooltip-value" :style="{ color: innerColor }">{{ value }}</span>
        </div>
        <div class="tooltip tooltip-arrow-bubble" :style="{ backgroundColor: color }">
          <div class="tooltip-arrow" :style="{ backgroundColor: innerColor }">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    default: '94 %'
  },
  color: {
    type: String,
    default: '#333'
  },
  innerColor: {
    type: String,
    default: '#333'
  },
  position: {
    type: String,
    default: 'top-left'
  },
  arrowFirst: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.icon-tooltip-wrapper {
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  cursor: pointer;
  animation: float 3s ease-in-out infinite;
}

/* Left pictos: tooltip opens to the left */
.icon-tooltip-wrapper.top-left,
.icon-tooltip-wrapper.bottom-left {
  flex-direction: row-reverse;
}

/* Right pictos: tooltip opens to the right */
.icon-tooltip-wrapper.top-right,
.icon-tooltip-wrapper.bottom-right {
  flex-direction: row;
}

.icon-tooltip-wrapper.top-left {
  top: 15%;
  left: 0%;
  animation-delay: 0s;
}

.icon-tooltip-wrapper.top-right {
  top: 15%;
  right: 0%;
  animation-delay: 0.5s;
}

.icon-tooltip-wrapper.bottom-left {
  top: 55%;
  left: 0%;
  animation-delay: 1s;
}

.icon-tooltip-wrapper.bottom-right {
  top: 55%;
  right: 0%;
  animation-delay: 1.5s;
}

.icon {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
}

.tooltip-bubbles {
  display: flex;
  align-items: center;
  gap: 0;
}

/* Left pictos: bubbles on the left */
.icon-tooltip-wrapper.top-left .tooltip-bubbles,
.icon-tooltip-wrapper.bottom-left .tooltip-bubbles {
  margin-right: -10px;
}

/* Right pictos: bubbles on the right */
.icon-tooltip-wrapper.top-right .tooltip-bubbles,
.icon-tooltip-wrapper.bottom-right .tooltip-bubbles {
  margin-left: -10px;
}

.tooltip {
  opacity: 0;
  height: 80px;
  padding: 0 1.5rem;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
}

/* Left pictos: tooltip animation */
.icon-tooltip-wrapper.top-left .tooltip,
.icon-tooltip-wrapper.bottom-left .tooltip {
  transform: translateX(20px);
}

/* Right pictos: tooltip animation */
.icon-tooltip-wrapper.top-right .tooltip,
.icon-tooltip-wrapper.bottom-right .tooltip {
  transform: translateX(-20px);
}

.icon-tooltip-wrapper:hover .tooltip {
  opacity: 1;
  transform: translateX(0);
}

/* Staggered animation delays */
.tooltip-label-bubble {
  transition-delay: 0s;
}

.tooltip-value-bubble {
  transition-delay: 0.1s;
}

.tooltip-arrow-bubble {
  transition-delay: 0.2s;
  padding: 0;
  width: 80px;
  height: 80px;
}

.tooltip-label {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.tooltip-value {
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
}

.tooltip-arrow {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tooltip-arrow svg {
  width: 24px;
  height: 24px;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
}
</style>

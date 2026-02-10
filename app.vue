<template>
  <div>
    <div class="background"></div>
    <div class="glass-overlay"></div>
    <div class="content">
      <p class="construction">Site en construction</p>
      <div class="main-content">
        <h1 class="project-name">OMI</h1>
        <div class="newsletter">
          <p class="newsletter-text">Restez informé de l'évolution du projet</p>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input
              v-model="fullName"
              type="text"
              placeholder="Nom Prénom"
              class="newsletter-input"
              required
            />
            <input
              v-model="email"
              type="email"
              placeholder="Votre adresse email"
              class="newsletter-input"
              required
              @keyup.enter="subscribe"
            />
          </form>
          <p v-if="message" :class="['newsletter-message', messageType]">{{ message }}</p>
        </div>
      </div>
      <div class="contact">
        Contact : <a href="mailto:hello@bureau1217.com">hello@bureau1217.com</a>
      </div>
      <footer class="footer">
        Projet réalisé par Bureau 1217
      </footer>
    </div>
  </div>
</template>

<script setup>
const fullName = ref('')
const email = ref('')
const loading = ref(false)
const message = ref('')
const messageType = ref('')

const subscribe = async () => {
  if (!email.value || !fullName.value) return

  loading.value = true
  message.value = ''

  try {
    await $fetch('/api/subscribe', {
      method: 'POST',
      body: {
        email: email.value,
        fullName: fullName.value
      }
    })

    message.value = 'Merci pour votre inscription !'
    messageType.value = 'success'
    fullName.value = ''
    email.value = ''
  } catch (error) {
    message.value = error.data?.message || 'Une erreur est survenue'
    messageType.value = 'error'
  } finally {
    loading.value = false
    setTimeout(() => {
      message.value = ''
    }, 5000)
  }
}
</script>

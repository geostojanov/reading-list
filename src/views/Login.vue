<template>
  <form @submit.prevent="handleSubmit">
    <h2>Login</h2>

    <label for="email">Email:</label>
    <input type="email" name="email" v-model="email" required>

    <label for="password">Password:</label>
    <input type="password" name="password" v-model="password" required>

    <button>Login</button>
    <div class="error" v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '@/composables/useLogin'

export default {
  setup() {
    const email = ref('')
    const password = ref('')
    
    const { login, error } = useLogin()
    const router = useRouter()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) router.push({ name: 'Home' })
    }

    return { email, password, handleSubmit, error }
  }
}
</script>
<style>
  .error {
    color: #f83f5e
  }
</style>
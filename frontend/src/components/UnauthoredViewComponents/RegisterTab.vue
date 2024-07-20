<template>
  <div class="login-tab">
    <h2 class="text-2xl font-bold">Регистрация</h2>
    <form @submit.prevent="handleLogin" class="space-y-4 mt-10">
      <div>
        <label for="name" class="block mb-1">Имя:</label>
        <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-3 py-2 border rounded-md"
        >
      </div>
      <div>
        <label for="email" class="block mb-1">Email:</label>
        <input
            type="email"
            id="email"
            v-model="email"
            required
            class="w-full px-3 py-2 border rounded-md"
        >
      </div>
      <div>
        <label for="password" class="block mb-1">Пароль:</label>
        <input
            type="password"
            id="password"
            v-model="password"
            required
            class="w-full px-3 py-2 border rounded-md"
        >
      </div>
      <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
      >
        Войти
      </button>
    </form>
    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
  // Здесь должна быть логика аутентификации
  try {
    // Пример асинхронного вызова API
    // const response = await loginAPI(email.value, password.value);
    console.log('Попытка входа с:', { email: email.value, password: password.value });
    // Если вход успешен, можно выполнить перенаправление или обновление состояния приложения
  } catch (err) {
    error.value = 'Неверный email или пароль';
  }
};
</script>

<style scoped>
.login-tab {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
<script setup>
import LoginTab from "@/components/UnauthoredViewComponents/LoginTab.vue";
import RegisterTab from "@/components/UnauthoredViewComponents/RegisterTab.vue";
import {ref} from "vue";

const loginOrRegistration = ref(true);
const toggleRegistration = ()=> {
  loginOrRegistration.value = false;
}
const toggleLogin = ()=> {
  loginOrRegistration.value = true;
}
const woof = ref(false)
const makeWoof = () => {
  woof.value = !woof.value;
}
</script>


<template>
  <div class="absolute h-screen w-full overflow-hidden">
    <div class="absolute right-0 top-0 h-screen w-1/3 bg-white z-50">

      <RegisterTab v-if="!loginOrRegistration"/>
      <LoginTab v-if="loginOrRegistration"/>
    </div>
    <div class="absolute right-1/3 flex flex-col top-1/3 font-Roboto">
      <div @click = "toggleRegistration"
           class="border-back-ground-color border-b-0 items-center p-5 hover:bg-white cursor-pointer text-center rounded-l-2xl transition-colors duration-300"
           :class="{'bg-white/0' : loginOrRegistration, 'bg-white shadow-2xl' : !loginOrRegistration}">
        Регистрация
      </div>
      <div @click = "toggleLogin"
           class="border-back-ground-color items-center p-5 hover:bg-white cursor-pointer text-center rounded-l-2xl transition-colors duration-300"
           :class="{'bg-white/0' : !loginOrRegistration, 'bg-white shadow-2xl' : loginOrRegistration}">
        Вход
      </div>
    </div>
    <img @click="makeWoof" class="absolute right-1/3 bottom-0 h-1/2 object-contain transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer" src="/img.png" alt="doge">
    <Transition name="fade">
      <img class="absolute bottom-1/5 right-2/4 h-4/5 transition-transform duration-300" v-if="woof" src="/img_1.png" alt="woof!"/>
    </Transition>
    <a class="border-2 bg-black border-black-500 absolute bottom-10 px-8 py-2 left-10 rounded-full text-white text-5xl text-xl hover:bg-black/70 cursor-pointer transition-colors duration-300" href="https://github.com/kkrinitskiy/second_nose">github</a>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
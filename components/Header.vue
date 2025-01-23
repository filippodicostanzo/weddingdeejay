<template>
  <header class="bg-[#222] shadow-md" id="top">
    <div class="container mx-auto px-4">
      <div class="flex flex-col lg:flex-row items-center lg:py-8 py-4 relative">
        <!-- Logo -->
        <div class="w-full lg:w-auto lg:mb-0">
          <Logo type="header" />
        </div>
        <!-- Menu -->
        <nav class="hidden lg:block w-full">
          <MainMenu />
        </nav>
        <!-- Menu mobile -->
        <div class="lg:hidden absolute right-5 top-7">
          <button @click="openSideNav" class="text-white text-2xl hover:text-gray-700 focus:outline-none">
            <font-awesome-icon :icon="['fas', 'bars']" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNuxtApp } from '#app'
import Logo from "~/components/Logo.vue";
import MainMenu from "~/components/MainMenu.vue";
import {emitter as eventBus} from "../utils/eventBus";

const openSideNav = () => {
  eventBus.emit('openSideNav');
  console.log('OpenSideNav')
};
</script>
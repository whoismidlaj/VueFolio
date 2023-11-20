<script setup>
// import { RouterLink } from 'vue-router';
// import { useDark, useToggle } from '@vueuse/core';

// const isDark = useDark();
// const toggleDark = useToggle(isDark);
</script>

<template>
    <div class="fixed top-5 px-5 w-full">
        <!-- <div class="container mx-auto flex justify-end">
            <button @click="toggleDark()" class="px-5 py-2 rounded font-bold text-slate-100 bg-slate-600 dark:text-slate-300 dark:bg-slate-600">Dark</button>
        </div> -->
    </div>
    <nav class="fixed bottom-0 z-50 w-full p-5 bg-slate-400 dark:bg-slate-800">
        <div class="container mx-auto flex justify-center">
            <div class="menu flex space-x-5 text-slate-100">
                <NuxtLink :class="{'bg-slate-700': $route.path !== '/', 'bg-slate-500': $route.path === '/'}" class="px-5 py-2 rounded font-bold" to="/">Home</NuxtLink>
                <NuxtLink :class="{'bg-slate-700': $route.path !== '/about', 'bg-slate-500': $route.path === '/about'}" class="px-5 py-2 rounded font-bold" to="/about">About</NuxtLink>
                <NuxtLink :class="{'bg-slate-700': $route.path !== '/works', 'bg-slate-500': $route.path === '/works'}" class="px-5 py-2 rounded font-bold" to="/works">Works</NuxtLink>
            </div>
        </div>
    </nav>
</template>
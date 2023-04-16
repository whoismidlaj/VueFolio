<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="fixed bottom-0 z-50 w-full p-5 bg-slate-800">
        <div class="container mx-auto flex justify-center">
            <div class="menu flex space-x-5">
                <RouterLink :class="{'bg-slate-700': $route.path !== '/', 'bg-slate-500': $route.path === '/'}" class="px-5 py-2 rounded font-bold" to="/">Home</RouterLink>
                <RouterLink :class="{'bg-slate-700': $route.path !== '/about', 'bg-slate-500': $route.path === '/about'}" class="px-5 py-2 rounded font-bold" to="/about">About</RouterLink>
                <RouterLink :class="{'bg-slate-700': $route.path !== '/works', 'bg-slate-500': $route.path === '/works'}" class="px-5 py-2 rounded font-bold" to="/works">Works</RouterLink>
            </div>
        </div>
    </nav>
</template>
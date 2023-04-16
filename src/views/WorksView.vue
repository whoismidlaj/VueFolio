<script setup>
import works from "../data/works.json"
</script>

<template>
    <div class="container mx-auto mt-10 mb-32 px-5">
        <h1 class="text-center font-bold text-5xl mb-10">Works</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            <div class="rounded-md overflow-hidden" v-for="work in works" :key="work.id">
                <img :src="`${ work.img }`" alt="">
                <div class="flex justify-between items-center p-5 bg-slate-800">
                    <h3 class="font-bold text-lg">{{ work.name }}</h3>
                    <a :href="`${ work.link }`" target="_blank" class="font-semibold bg-slate-700 px-5 py-2 rounded hover:bg-slate-500">See Live</a>
                </div>
            </div>
        </div>
    </div>
</template>
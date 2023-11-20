<script setup>
import works from "~/assets/data.json"
</script>

<template>
    <div class="rounded-md overflow-hidden bg-gradient-to-tr from-slate-700" v-for="work in works" :key="work.id">
        <Suspense>
            <img class="w-full h-72 md:h-64 lg:h-80 object-cover" :src="`${ work.img }`" alt="">
            <template #fallback>
                <AnimatedPlaceholder class="w-full h-72 md:h-64 lg:h-80" />
            </template>
        </Suspense>
        <div class="flex justify-between items-center p-5 bg-slate-200 dark:bg-slate-800">
            <h3 class="font-bold text-lg">{{ work.name }}</h3>
            <a :href="`${ work.link }`" target="_blank" class="font-semibold bg-slate-400 dark:bg-slate-700 px-5 py-2 rounded hover:bg-slate-500 hover:dark:bg-slate-500">See Live</a>
        </div>
    </div>
</template>
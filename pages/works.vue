<template>
    <div class="container mx-auto pt-10 mb-32 px-5">
        <h1 class="text-center font-bold text-5xl mb-10">Works</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
            <Suspense>
                <WorkCard />
                <template #fallback>
                    <WorkCardSkeleton />
                </template>
            </Suspense>
        </div>
    </div>
</template>

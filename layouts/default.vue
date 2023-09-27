<script setup lang="ts">
import Header from '@/components/blocks/Header/index.vue';
import Navigation from '@/components/blocks/Navigation/index.vue';

</script>

<template>
    <main class="max-w-screen-l mx-auto mt-2">
        <Navigation />
        <Header />
        <slot />
    </main>
</template>
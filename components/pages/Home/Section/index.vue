<script setup lang="ts">
import { SectionProps } from './model/types';
import Card from '@/components/shared/Card/index.vue';

const props = defineProps<SectionProps>()

</script>

<template>
    <section>
        <h1 v-if="title" class="text-3xl font-bold mb-6 mt-10">{{ title }}</h1>
        <div class="grid section-grid gap-x-8 items-stretch" >
            <Card v-for="(item, index) in data" v-bind="item" :key="index" />
        </div>
    </section>
    <div class="h-1 my-8"></div>
</template>

<style scoped>
    .section-grid{
        grid-template-columns: repeat( auto-fill, minmax(255px, 1fr) );
    }
</style>
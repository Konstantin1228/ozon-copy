<script setup lang="ts">
import Title from '@/components/pages/Category/Filters/ui/Title.vue'
import { CategoryFilterProps } from '@/components/pages/Category/Filters/CategoryFilter/types'

const props = defineProps<CategoryFilterProps>()

</script>
<template>
    <div class="flex flex-col mb-5">
        <Title>Категория</Title>
        <NuxtLink v-for="(categoryParent, index) in categories.parents" :key="index" :to="categoryParent.fetchPrefix" class="flex items-start py-0.5 transition hover:text-blue-600">
            <NuxtImg format="webp" height="16" width="16" src="images/section/filters/arrowLeft.svg" />
            <Text>{{ categoryParent.readebleName }}</Text>
            <!-- <span class="font-medium text-base h-full flex items-start">{{ categoryParent.readebleName }}</span> -->
        </NuxtLink>
        <div class="rounded-sm py-1 bg-blue-300 transition hover:text-blue-600">
            <button class="py-1 px-2 font-medium text-left">{{ categories.readebleName }}</button>
        </div>
        <ul class="ml-4">
            <li v-for="(child, index) in categories.childs" :key="index" class="my-1 transition hover:text-blue-600">
                <NuxtLink :to="child.fetchPrefix">
                    <Text>{{ child.readebleName }}</Text>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<style scoped></style>
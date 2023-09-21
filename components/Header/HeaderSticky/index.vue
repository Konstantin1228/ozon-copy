<script setup lang="ts">
import Input from './ui/Input.vue'
import Catalog from './ui/Catalog.vue'

const links = ref([
    { readebleName: 'Войти', href: '*', imageSrc: 'images/smile.svg' },
    { readebleName: 'Заказы', href: '*', imageSrc: 'images/box.svg' },
    { readebleName: 'Избранное', href: '*', imageSrc: 'images/heart.svg' },
    { readebleName: 'Корзина', href: '*', imageSrc: 'images/bag.svg' },
])

</script>
<template>
    <header class="flex mb-2">
        <NuxtImg class="w-32 h-10 mr-9" src="images/ozon-doobles.webp" alt="ozon doobles" />
        <Catalog />
        <Input />
        <div class="flex gap-11">
            <NuxtLink 
                v-for="({ readebleName, href,imageSrc}, index) in links" :key="index"
                :to="href" target="_blank" class="flex flex-col items-center text-sm">
                <NuxtImg class="h-full" :src="imageSrc" :alt="readebleName" />
                <span class="font-medium">{{readebleName}}</span>
            </NuxtLink>
        </div>
    </header>
</template>
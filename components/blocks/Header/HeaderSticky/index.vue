<script setup lang="ts">
import Input from './ui/Input.vue'
import Catalog from './ui/Catalog.vue'
import SignIn from './ui/SignIn.vue';

const links = ref([
    { readebleName: 'Заказы', href: '*', imageSrc: 'images/svg/box.svg' },
    { readebleName: 'Избранное', href: '*', imageSrc: 'images/svg/heart.svg' },
    { readebleName: 'Корзина', href: '*', imageSrc: 'images/svg/bag.svg' },
])

</script>
<template>
    <header class="flex mb-2">
        <NuxtImg class="w-32 h-10 mr-9" src="images/ozon-doobles.webp" alt="ozon doobles" />
        <Catalog />
        <Input />
        <div class="flex gap-11">
            <SignIn />
            <!-- <NuxtLink to="*" target="_blank" class="flex flex-col items-center text-sm hover:text-blue-500 ">
                <NuxtImg class="h-full hover:fill-blue-500" src="images/svg/box.svg" alt="Заказы" />
                <span class="font-medium">Заказы</span>
            </NuxtLink>
            <NuxtLink to="*" target="_blank" class="flex flex-col items-center text-sm hover:text-blue-500 ">
                <NuxtImg class="h-full hover:fill-blue-500" src="images/svg/heart.svg" alt="ЗакИзбранноезы" />
                <span class="font-medium">Избранное</span>
            </NuxtLink>

            <NuxtLink to="*" target="_blank" class="flex flex-col items-center text-sm hover:text-blue-500 ">
                <NuxtImg class="h-full hover:fill-blue-500" src="images/svg/bag.svg" alt="Корзина" />
                <span class="font-medium">Корзина</span>
            </NuxtLink> -->

            
            <NuxtLink v-for="({ readebleName, href, imageSrc }, index) in links" :key="index" :to="href" target="_blank" class="flex flex-col items-center text-sm hover:text-blue-500 ">
                <NuxtImg format="webp" class="h-full hover:fill-blue-500" :src="imageSrc" :alt="readebleName" />
                <span class="font-medium">{{ readebleName }}</span>
            </NuxtLink>
        </div>
    </header>
</template>
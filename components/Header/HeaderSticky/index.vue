<script setup lang="ts">
import OzonDoobles from '@/assets/images/ozon-doobles.webp'
import Bag from '@/assets/images/bag.svg'
import Box from '@/assets/images/box.svg'
import Heart from '@/assets/images/heart.svg'
import Smile from '@/assets/images/smile.svg'
import Input from './ui/Input.vue'
import Catalog from './ui/Catalog.vue'

</script>

<template>
    <header class="flex mb-2">
        <img class="w-32 h-10 mr-9" :src="OzonDoobles" alt="ozon doobles">
        <Catalog />
        <Input />
        <div class="flex gap-11">
            <NuxtLink to="/IN-PROCESS" target="_blank" class="flex flex-col items-center text-sm">
                <img :src="Smile" alt="Войти">
                <span class="font-medium">Войти</span>
            </NuxtLink>
            <NuxtLink to="/IN-PROCESS" target="_blank" class="flex flex-col items-center text-sm">
                <img :src="Box" alt="Заказы">
                <span class="font-medium">Заказы</span>
            </NuxtLink>
            <NuxtLink to="/IN-PROCESS" target="_blank" class="flex flex-col items-center text-sm">
                <img :src="Heart" alt="Избранное">
                <span class="font-medium">Избранное</span>
            </NuxtLink>
            <NuxtLink to="/IN-PROCESS" target="_blank" class="flex flex-col items-center text-sm">
                <img :src="Bag" alt="Корзина">
                <span class="font-medium">Корзина</span>
            </NuxtLink>
        </div>
    </header>
</template>
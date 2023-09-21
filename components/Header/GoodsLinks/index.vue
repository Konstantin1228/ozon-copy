<script setup lang="ts">

const goods = ref<{ href: string, imageLink: string, text: string, }[]>([
    { href: '/', imageLink: 'images/goods/union.png', text: 'Ozon Карта', },
    { href: '/', imageLink: 'images/goods/plane.svg', text: 'Билеты, отели, туры', },
    { href: '/', imageLink: 'images/goods/dress.png', text: 'Одежда и обувь', },
    { href: '/', imageLink: 'images/goods/electronicks.png', text: 'Электроника', },
    { href: '/', imageLink: 'images/goods/garden.png', text: 'Дом и сад', },
    { href: '/', imageLink: 'images/goods/duck.png', text: 'Детские товары', },
    { href: '/', imageLink: 'images/goods/sale.png', text: 'Акции', },
    { href: '/', imageLink: 'images/goods/crown.svg', text: 'Premium', },
    { href: '/', imageLink: 'images/goods/pants.png', text: 'Бренды', },
    { href: '/', imageLink: 'images/goods/foodProduct.png', text: 'Продукты питания', },
    { href: '/', imageLink: 'images/goods/decanter.png', text: 'Бытовая техника', },
])

</script>
<template>
    <div>
        <ul class="flex justify-between mt-5">
            <li v-for="({ href, imageLink, text }, index) in goods" :key="index">
                <NuxtLink :to="href" target="_blank" class="flex items-center font-medium text-sm hover:text-blue-500">
                    <NuxtImg class="h-4 w-4 mr-1.5" :src="imageLink" :alt="text" />
                    {{ text }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
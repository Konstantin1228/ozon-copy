<script setup lang="ts">

const goods = ref<{ href: string, imageLink: string, text: string, }[]>([
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/52/tae/union_13.png', text: 'Ozon Карта', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/fb/t19/ic_m_plane.svg', text: 'Билеты, отели, туры', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/17/t22/ic_m_dresses.png', text: 'Одежда и обувь', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/cc/tf7/ic_m_electronics.png', text: 'Электроника', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/a8/te3/union_8.png', text: 'Дом и сад', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/ff/tc3/union_3.png', text: 'Детские товары', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/47/t41/union_14.png', text: 'Акции', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/07/tcb/ic_m_status_points3x.svg', text: 'Premium', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/8e/tfb/union_18.png', text: 'Бренды', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/c1/t5a/union_11.png', text: 'Продукты питания', },
    { href: '/', imageLink: 'https://cdn1.ozone.ru/s3/cms/8f/t1d/union_9.png', text: 'Бытовая техника', },
])

</script>
<template>
    <div>
        <ul class="flex gap-4 mt-5">
            <li v-for="({ href, imageLink, text }, index) in goods" :key="index">
                <NuxtLink :to="href" target="_blank" class="flex items-center font-medium text-sm hover:text-blue-500">
                    <img class="h-4 w-4 mr-1.5" :src="imageLink" :alt="text">
                    {{ text }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
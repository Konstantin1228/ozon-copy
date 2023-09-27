<script setup lang="ts">
import Ad from '../../shared/Ad/index.vue';
import Section from './Section/index.vue';
import { Navigation, Pagination } from 'swiper/modules'

const forYouData = [
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, tag: 'hit' },
    { title: 'Фильтр угольный Elikor Ф-00 (2шт.)', imageSrc: 'https://ir.ozone.ru/s3/multimedia-o/wc300/6241108872.jpg', price: 2319, discount: 50 },
    { title: 'Пальто утепленное', imageSrc: 'https://ir.ozone.ru/s3/multimedia-g/wc300/6401176816.jpg', price: 5768, discount: 75, tag: 'sale' },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, tag: 'pointsForReview' },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, tag: 'pointsForReview' },
]


const data = [
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, tag: 'hit' },
    { title: 'Фильтр угольный Elikor Ф-00 (2шт.)', imageSrc: 'https://ir.ozone.ru/s3/multimedia-o/wc300/6241108872.jpg', price: 2319, discount: 50 },
    { title: 'Пальто утепленное', imageSrc: 'https://ir.ozone.ru/s3/multimedia-g/wc300/6401176816.jpg', price: 5768, discount: 75, tag: 'sale' },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, tag: 'pointsForReview' },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
    { title: 'Смартфон Infinix Note 30i 8/128 ГБ, золотой', imageSrc: 'https://ir.ozone.ru/s3/multimedia-8/wc300/6674371808.jpg', price: 19990, discount: 23, },
]

</script>
<template>
    <!-- <NuxtLink to="*">
        <NuxtImg format="webp" class="my-6 w-full rounded-xl hover:brightness-75 transition" src="/images/home/sale.webp" alt="sale" />
    </NuxtLink>
    <div class="flex mb-6 justify-between">
        <NuxtLink to="*">
            <NuxtImg format="webp" class="rounded-xl h-full w-full" src="/images/home/sale-days-left.webp" alt="sale days left" />
        </NuxtLink>

        <div class="flex flex-col gap-2 h-full">
            <Ad class="h-44" src="images/home/sezon-stars.webp" alt="sezon - start" />
            <Ad src="/images/home/hot-sale.webp" alt="hot-sale" />
        </div>
    </div>
    <Ad class="my-6" src="/images/home/benefit-banner.webp" alt="sale" /> -->

    <Swiper :modules="[Navigation, Pagination]" 
    :navigation="{
    }"
    :pagination="{
        clickable: true,
        bulletClass: 'bullet',
        horizontalClass: 'bullet-parent'
    }" class="mySwiper">
    <template>
    </template>
        <SwiperSlide>
            <Ad src="https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/0116dd96-534a-11ee-b0a7-3e22a876da59.jpeg" alt="eat" />
        </SwiperSlide>
        <SwiperSlide>
            <Ad src="https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/0116dd96-534a-11ee-b0a7-3e22a876da59.jpeg" alt="eat" />
        </SwiperSlide>
        <SwiperSlide>
            <Ad src="https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/0116dd96-534a-11ee-b0a7-3e22a876da59.jpeg" alt="eat" />
        </SwiperSlide>
        <SwiperSlide>
            <Ad src="https://cdn1.ozonusercontent.com/s3/sellerassets/ww1450_q80/0116dd96-534a-11ee-b0a7-3e22a876da59.jpeg" alt="eat" />
        </SwiperSlide>
    </Swiper>

    <Section title="Рекомендуем для вас!" :data="forYouData" />

    <div class="flex justify-between gap-5 my-8">
        <Ad src="https://ir.ozone.ru/s3/cms/ad/tb6/wc450/rolf__912300.jpg" alt="sale" ad />
        <Ad src="https://ir.ozone.ru/s3/cms/b2/ta3/wc450/scarlett_912300px.jpg" alt="sale" ad />
        <Ad src="https://ir.ozone.ru/s3/cms/46/tc2/wc450/bosnalek__912300.jpg" alt="sale" ad />
    </div>

    <Section title="Лучшие предложения!" :data="data" />
</template>
<style >
.bullet {
    display: block;
    background-color: hsla(0, 0%, 100%, .5);
    box-shadow: 0 4px 16px 1px rgba(0, 26, 52, .16);
    height: 10px;
    width: 10px;
    border-radius: 50%;
    margin: 5px;
}

.bullet-parent {
    display: flex;
    justify-content: center;
}
</style>
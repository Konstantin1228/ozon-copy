<script setup lang="ts">
import CurrencyVue from './Currency/index.vue';

</script>
<template>
    <div class="flex justify-between text-sm mb-5">
        <div class="flex font-medium">
            <CurrencyVue />
            <button class="text-blue-500">
                <span>Пункт Ozon</span>
                <span class="mx-1">•</span>
                <span>Цветочная ул., 923</span>
            </button>
        </div>
        <ul class="flex text-blue-700">
            <li class="ml-4 font-medium px-2 bg-blue-300 text-blue-700 rounded-xl hover:text-blue-500 transition">
                <NuxtLink to="*" target="_blank">Стать продавцом</NuxtLink>
            </li>
            <li class="ml-4 font-medium hover:text-blue-500 transition">
                <NuxtLink to="*" target="_blank">Покупать как компания</NuxtLink>
            </li>
            <li class="ml-4 font-medium hover:text-blue-500 transition">
                <NuxtLink to="*" target="_blank">Мобильное приложение</NuxtLink>
            </li>
            <li class="ml-4 font-medium hover:text-blue-500 transition">
                <NuxtLink to="*" target="_blank">Подарочные сертификаты</NuxtLink>
            </li>
            <li class="ml-4 font-medium hover:text-blue-500 transition">
                <a-popover>
                    <template #content>
                        <div class="flex flex-col py-1">
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Статус заказа</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Стоимость доставки</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Постаматы</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Примерка одежды и обуви</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Оплата</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Ozon Карта</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Ozon Premium</NuxtLink>
                            <NuxtLink to="*" class="py-4 px-3 hover:bg-blue-100 hover:text-black w-full">Ozon Рассрочка</NuxtLink>
                        </div>
                    </template>
                    <NuxtLink to="*" target="_blank">Помощь</NuxtLink>
                </a-popover>
            </li>
            <li class="ml-4 hover:text-blue-500 transition">
                <NuxtLink to="*" target="_blank">Пункты выдачи</NuxtLink>
            </li>
        </ul>
    </div>
</template>
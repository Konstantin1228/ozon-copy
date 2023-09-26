<script setup lang="ts">
const props = defineProps<{ src: string; alt: string; class?: string; ad?: boolean }>()


</script>

<template>
    <NuxtLink to="*" class="w-full relative">
        <div class="bullet"></div>
        <NuxtImg format="webp" :class="`w-full rounded-xl hover:brightness-75 transition ${props.class}`" :src="src" :alt="alt" />
        <template v-if="ad">
            <div class="absolute right-1.5 top-1.5 text-gray-400 bg-white-64 py-0.5 px-2 rounded-md flex cursor-pointer">
                <span class="text-xs font-medium mr-1">Реклама</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                    <path fill="currentColor" d="M8 14c3.723 0 6-2.277 6-6s-2.277-6-6-6-6 2.277-6 6 2.277 6 6 6ZM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm2 6a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v3Z"></path>
                </svg>
            </div>
            <!-- <a-popover @openChange="handleHoverChange" trigger="hover" :open="hovered" placement="bottom">
                <template #content>
                    <p>
                        Мы помогаем нашим продавцам рассказать об их товарах на OZON.
                        Для этого у нас есть разные способы продвижения. Узнать больше <span>о рекламе на Ozon</span>
                    </p>
                    <NuxtLink to="*">О работодателе</NuxtLink>
                    <span>Скопировать ссылку</span>
                </template>
            </a-popover> -->
        </template>
    </NuxtLink>
</template>
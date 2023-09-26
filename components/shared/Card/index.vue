<script setup lang="ts">
import { CardProps } from './model/types';

const { $formatPrice } = useNuxtApp()
const props = defineProps<CardProps>()

const applyDiscount = (price: number, discount: number) => {
    return (price - (price / 100 * discount)).toFixed()
}

</script>
<template>
    <NuxtLink to="*" class="hover:text-blue-500 mb-4">
        <!-- !!!! -->
        <NuxtImg format="webp"   class="rounded-xl w-64 h-64" :src="imageSrc" :alt="title"/>
        <div class="relative">
            <div v-if="tag" class="absolute bottom-1.5 left-1.5 py-0.5 px-2 rounded-md flex gap-1 text-sm font-medium text-white" :class="{
                'bg-red': ['hit', 'sale'].includes(tag),
                'bg-blue-500': tag === 'goodPrice',
                'bg-purple': points && tag === 'pointsForReview'
            }">
                <template v-if="['hit', 'sale'].includes(tag)">
                    <NuxtImg format="webp"   class="h-4 w-4" src="images/svg/card/hot.svg" alt="hot" />
                    <span v-if="tag === 'hit'">ХИТЫ НЕДЕЛИ</span>
                    <span v-else-if="tag === 'sale'">РАСПРОДАЖА</span>
                </template>
                <template v-else-if="tag === 'goodPrice'">
                    <NuxtImg format="webp"   class="h-4 w-4" src="/images/card/like.svg" alt="hot" />
                    <span>ЦЕНА ЧТО НАДО!</span>
                </template>
                <template v-else-if="points && tag === 'pointsForReview'">
                    <NuxtImg format="webp"   class="h-4 w-4" src="/images/card/point.svg" alt="hot" />
                    <span>{{ props.points }} баллов за отзыв</span>
                </template>
            </div>
        </div>
        <div class="flex items-end pb-1">
            <template v-if="!discount">
                <span class="text-black font-bold text-xl">{{ $formatPrice(price) }}</span>
            </template>
            <template v-else-if="discount">
                <span v-if="tag && ['hit', 'sale', 'pointsForReview'].includes(tag)" class="text-red text-xl font-bold ">
                    {{ $formatPrice(applyDiscount(price, discount!)) }}
                </span>
                <span v-else class="text-green text-xl font-bold ">{{ $formatPrice(applyDiscount(price, discount!)) }}</span>

                <span class="mx-1 text-gray-700 font-medium text-sm line-through">{{ $formatPrice(price) }}</span>
                <span class="font-medium text-sm text-red ml-0.5">-{{ discount }}%</span>
            </template>
        </div>
        <h1 class="line-clamp-2 duration-300 font-medium mb-1">{{ title }}</h1>
    </NuxtLink>
</template>
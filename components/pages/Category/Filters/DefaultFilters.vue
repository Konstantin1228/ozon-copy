<script setup lang="ts">
import Title from './ui/Title.vue';
import Text from './ui/Text.vue';
import TitleSwitch from './ui/TitleSwitch.vue';


const radioOptions: { value: number, text: string, imgSrc?: string, alt?: string }[] = [
    { value: 0, text: 'Неважно' },
    { value: 1, text: 'До 1 часа', imgSrc: 'images/section/filters/express.svg', alt: 'express' },
    { value: 2, text: 'Сегодня', imgSrc: 'images/section/filters/rocket.svg', alt: 'rocker' },
    { value: 3, text: 'Завтра' },
    { value: 4, text: 'До 3 дней' },
    { value: 5, text: 'До 7 дней' },
]

const sale = ref(false)
const deliviry = ref(0)
const installment = ref(false)
const original = ref(false)
const weeklyAction = ref(false)

watch([installment], () => {
})


</script>
<template>
    <section class="flex flex-col">
        <TitleSwitch text="Распродажа" v-model:checked="sale" />
        <div>
            <div class="mb-3">
                <Title>Сроки доставки</Title>
            </div>
            <a-radio-group v-model:value="deliviry" class="flex flex-col font-medium text-base">
                <a-radio v-for="({ value, text, imgSrc, alt }, index) in radioOptions" :key="index" :value="value">

                    <template v-if="imgSrc && alt">
                        <div class="flex items-center">
                            <NuxtImg height="16" class="mr-1" :src="imgSrc" :alt="alt" />
                            <Text>{{ text }}</Text>
                        </div>
                    </template>

                    <template v-else>
                        <Text>{{ text }}</Text>
                    </template>

                </a-radio>
            </a-radio-group>
        </div>
        <!-- <TitleSwitch text="Рассрочка 0%" :checked="installment" @update:checked="val => installment = val" /> -->
        <TitleSwitch text="Рассрочка 0%" v-model:checked="installment" />
        <TitleSwitch text="Оригинальный товар" v-model:checked="original" />
        <TitleSwitch text="Еженедельная акция" :popover="{ text: 'Выгодные предложения для регулярных покупок', position: 'afterSwitch' }" v-model:checked="weeklyAction" />
    </section>
</template>
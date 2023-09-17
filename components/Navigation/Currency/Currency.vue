<script setup lang="ts">

const selectOptions = ref<{ readebleName: string, value: string }[]>([
    { readebleName: 'Российский рубль', value: 'RUB', },
    { readebleName: 'Доллар США', value: 'USD', },
    { readebleName: 'Белорусский рубль', value: 'BYN', },
    { readebleName: 'Казахстанский тенге', value: 'KZT', },
    { readebleName: 'Израильский шекель', value: 'ILS', },
    { readebleName: 'Армянский драм', value: 'AMD', },
]);

const currency = ref('RUB')
const isModalOpen = ref(false)

const handleModal = () => {
    isModalOpen.value = !isModalOpen.value
}


</script>
<template>
    <button class="mr-3 px-1.5 text-xs bg-blue-300 text-blue-700 rounded" @click="handleModal()">{{ currency }}</button>
    <a-modal v-model:open="isModalOpen" :footer="null" wrap-class-name="p-60" class="curreny-modal">
        <h1 class="font-bold text-3xl mb-9">Валюта</h1>
        <a-select v-bind:value="currency" class="w-full">
            <a-select-option  class="text-blue-500">РЕКОМЕНДУЕМЫЕ</a-select-option>
            <a-select-option v-for="(option, index) in selectOptions" :key="index">
{{ option.readebleName }}
            </a-select-option>
        </a-select>
    </a-modal>
</template>
<style >
.curreny-modal:where(.css-dev-only-do-not-override-kqecok).ant-modal .ant-modal-content {
    padding: 40px 48px 54px;
}
</style>
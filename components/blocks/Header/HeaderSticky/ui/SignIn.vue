<script setup lang="ts">
const isModalOpen = ref(false)

const handleModal = () => isModalOpen.value = !isModalOpen.value

</script>
<template>
    <button @click="handleModal" class="flex flex-col items-center text-sm hover:text-blue-500 ">
        <NuxtImg format="webp" class="h-full hover:fill-blue-500" src="images/svg/smile.svg" alt="smile image" />
        <span class="font-medium">Войти</span>
    </button>
    <a-modal v-model:open="isModalOpen" :footer="null" centered class="currenсy-modal">

    </a-modal>
</template>
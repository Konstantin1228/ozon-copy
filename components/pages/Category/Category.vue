<script setup lang="ts">
import Filters from './Filters/index.vue'
const { categoryName } = defineProps<{ categoryName: string }>()

</script>
<template>
    <div class="flex">
        <Filters />
        <div class="w-full"></div>
    </div>
</template>
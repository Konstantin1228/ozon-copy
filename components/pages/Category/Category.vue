<script setup lang="ts">
import Filters from './Filters/index.vue'
const { categoryName } = defineProps<{ categoryName: string }>()

</script>
<template>
    <Filters />
</template>
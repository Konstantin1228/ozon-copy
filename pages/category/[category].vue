<script setup lang="ts">
import Category from '~/components/pages/Category/Category.vue';

const category=useRoute().params.category as string
// console.log(category);

</script>
<template>
    <Category :categoryName="category"/>    
</template>
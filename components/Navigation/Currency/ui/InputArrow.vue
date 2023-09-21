<script setup lang="ts">
const props=defineProps<{active:boolean}>()
</script>
<template>
    <svg class="duration-500" :class="{
        'rotate-180': props.active
    }" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
        <path fill="currentColor" d="m4 6 4 5 4-5H4Z"></path>
    </svg>
</template>
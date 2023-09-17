<script setup lang="ts">
    
</script>
<template>
    <div class="flex mr-12 w-full bg-white border-2 border-blue-500 rounded-lg">
        <button :style="{ backgroundColor: 'rgba(0,48,120,.039)' }" class="flex items-center bg-gray text-blue-700 m-1 rounded-lg">
            <span class="ml-2 mr-0.5 text-sm">Везде</span>
            <svg class="fill-blue-700" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path d="m4 6 4 5 4-5H4Z"></path>
            </svg>
        </button>
        <div class="flex w-full bg-blue-500">
            <input class="pr-2 w-full pl-0.5 bg-white rounded-e-md border-none outline-none" placeholder="Искать на Ozon" type="text">
            <button class="p-2 px-6 rounded-md">
                <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-8 6a8 8 0 1 1 14.281 4.955l4.419 4.33a1 1 0 1 1-1.4 1.43l-4.444-4.357A8 8 0 0 1 3 11Z"></path>
                </svg>
            </button>
        </div>
    </div>
</template>
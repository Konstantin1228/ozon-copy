<script setup lang="ts">
import { PopoverProps } from './TextWithPopover/types';

const props = defineProps<PopoverProps>()

const range = ref<[number, number]>([0, 200])

</script>
<template>
    <div>
        <TextWithPopover :text="text" :popover-text="popoverText" />
        <a-slider class="mb-6" :tooltip-visible="false"  range v-model:value="range" />
        <div class="flex gap-2 justify-between">
            <div class="flex items-center border-gray-500 border-2 rounded-md transition hover:border-blue-500">
                <span class="text-sm leading-6 pl-1.5 text-gray-600">от</span>
                <input v-model="range[0]" class="w-full font-medium text-sm leading-5 p-1.5 pl-1 bg-transparent" :style="{}" type="text">
            </div>
            <div class="flex items-center border-gray-500 border-2 rounded-md transition hover:border-blue-500">
                <span class="text-sm leading-6 pl-1.5 text-gray-600">до</span>
                <input v-model="range[1]" class="w-full font-medium text-sm leading-5 p-1.5 pl-1 bg-transparent" :style="{}" type="text">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { PopoverProps } from './types';


const props = defineProps<PopoverProps>()
const isPopoverActive = ref(false)

const handlePopover = () => isPopoverActive.value = !isPopoverActive.value
</script>
<template>
    <span class="font-bold leading-6 tracking-wide">
        {{ text }}
        <template v-if="popoverText">
            <a-popover v-model:open="isPopoverActive" trigger="click" placement="bottom">
                <button @click="handlePopover">
                    <NuxtImg v-if="isPopoverActive" height="16" width="16" format="webp" src="images/section/filters/close.svg" alt="close" />
                    <NuxtImg v-else height="16" width="16" format="webp" src="images/section/filters/info.svg" alt="info" />
                </button>
                <template #content>
                    <Text>{{ popoverText }}</Text>
                </template>
            </a-popover>
        </template>
    </span>
</template>
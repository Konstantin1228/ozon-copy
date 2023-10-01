<script setup lang="ts">
import { PopoverProps } from './TextWithPopover/types';

const props = defineProps<PopoverProps & { checked: boolean }>()
const emits = defineEmits(['update:checked']);

</script>
<template>
    <div class="flex mb-6 justify-between  relative">
        <TextWithPopover :text="text" :popover-text="popoverText" />
        <a-switch class="bg-gray-500" :checked="checked" @change="$emit('update:checked', $event)" />
    </div>
</template>
<script setup lang="ts">
import Title from './Title.vue';
import Text from './Text.vue';

type Props = {
    checked: boolean
    text: string
    popover?: {
        text: string
        position: 'afterText' | 'afterSwitch'
    }
}

const props = defineProps<Props>()
const emits = defineEmits(['update:checked']);


const isPopoverActive = ref(false)

const handlePopover = () => isPopoverActive.value = !isPopoverActive.value

</script>
<template>
    <div class="flex mb-6 justify-between flex-wrap relative">
        <Title>{{ text }}</Title>

        <!-- <template v-if="popover && popover.position === 'afterText'">
            <button @click="handlePopover">
                <NuxtImg height="16" src="images/section/filters/info.svg" alt="info" />
            </button>
            <a-popover v-model:visible="isPopoverActive" trigger="click">
                <template #content>
                    <span>{{ popover.text }}</span>
                </template>
            </a-popover>
        </template> -->

        <a-switch class="bg-gray-500" :checked="checked" @change="$emit('update:checked', $event)" />

        <template v-if="popover && popover.position === 'afterSwitch'">
            <button @click="handlePopover">
                <NuxtImg class="h-fit" height="16" width="16" src="images/section/filters/info.svg" alt="info" />
            </button>
            <a-popover v-model:open="isPopoverActive" trigger="click" placement="bottom">
                <template #content>
                    <Text>{{ popover.text }}</Text>
                </template>
            </a-popover>
        </template>
    </div>
</template>
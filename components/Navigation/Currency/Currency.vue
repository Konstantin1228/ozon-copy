<script setup lang="ts">
import CloseIcon from '@/assets/images/close.svg'
import ArrowBlue from './ui/ArrowBlue.vue';
import InputArrow from './ui/InputArrow.vue';


const selectOptions = ref<{ readebleName: string, value: string }[]>([
    { readebleName: 'Российский рубль', value: 'RUB', },
    { readebleName: 'Доллар США', value: 'USD', },
    { readebleName: 'Белорусский рубль', value: 'BYN', },
    { readebleName: 'Казахстанский тенге', value: 'KZT', },
    { readebleName: 'Израильский шекель', value: 'ILS', },
    { readebleName: 'Армянский драм', value: 'AMD', },
]);

const filteredOptions=ref(selectOptions.value)

const currency = ref(selectOptions.value[0])
const isModalOpen = ref(false)
const isSelectOpen = ref(false)
const inputValue=ref('')


const handleModal = () => isModalOpen.value = !isModalOpen.value
const handleSelect = () => isSelectOpen.value = !isSelectOpen.value

const changeCurrency=(currenсyIdx:number)=>{
    currency.value=selectOptions.value[currenсyIdx]
    isSelectOpen.value=false
    isModalOpen.value=false
}

const inputHandler=()=>{
    filteredOptions.value=selectOptions.value.filter(option=>(option.readebleName.includes(inputValue.value))||(option.value.includes(inputValue.value)))
}

const clickOusideHandler=()=>{
    isSelectOpen.value=false
}


</script>
<template>
    <button class="mr-3 px-1.5 bg-blue-300 text-blue-700 rounded" @click="handleModal">{{ currency.value }}</button>
    <a-modal  v-model:open="isModalOpen" :footer="null" centered class="currenсy-modal">
        <template #closeIcon>
            <NuxtImg class="w-full" src="/images/close.svg" alt="Закрыть"/>
        </template>
        <h1 class="font-bold text-3xl mb-9">Валюта</h1>
        <div class="relative" v-clickOutside="clickOusideHandler" > 
            <div 
                class="flex items-center justify-between px-3 py-2 border-2 rounded-lg w-[80%] transition hover:border-blue-500" 
                :class="{
                    'border-blue-500':isSelectOpen,
                    'border-gray-500':!isSelectOpen
                }"
                @click="handleSelect"
            >
                <input 
                    v-model="inputValue" @input="inputHandler" 
                    class="font-medium w-full outline-none text-black placeholder:text-black text-base" 
                    :placeholder="currency.readebleName + ', ' + currency.value" 
                    type="text">
                <InputArrow :active="isSelectOpen"/>
            </div>
            <transition name="fade">
                <div v-if="isSelectOpen" class="absolute transition mt-3 left-0 max-h-64 overflow-y-auto rounded-xl w-[80%] font-medium" :style="{ boxShadow: '0 4px 16px 1px rgba(0,26,52,.16)' }">
                    <div class="bg-blue-300 px-4 py-2">
                        <span class="text-blue-700 uppercase text-xs">Рекомендуемые</span>
                    </div>
                    <button 
                        v-for="({readebleName,value}, index) in filteredOptions" :key="index" 
                        @click="changeCurrency(index)"
                        class="bg-white w-full text-left px-4 py-2 flex items-center justify-between"
                    >
                        <div>
                            <h1 class="text-base">{{ readebleName }}</h1>
                            <span class="text-sm text-blue-700 uppercase">{{ value }}</span>
                        </div>
                        <div v-if="value === currency.value">
                           <ArrowBlue/>
                        </div>
                    </button>
               </div>
            </transition>
        </div>
    </a-modal>
</template>
<style>
.currenсy-modal:where(.css-dev-only-do-not-override-kqecok).ant-modal .ant-modal-content {
    padding: 40px 40px 54px;
    border-radius: 20px;
}

</style>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
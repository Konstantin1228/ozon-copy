<script setup lang="ts">

const categories = {
    readebleName: 'Аксессуары для смартфонов и телефонов', fetchPrefix: 'electronick',
    parents: [
        { readebleName: 'Электроника', fetchPrefix: 'electronick' },
        { readebleName: 'Телефоны и смарт-часы', fetchPrefix: 'electronick' },
    ],
    childs: [
        { readebleName: 'Чехлы', fetchPrefix: 'electronick' },
        { readebleName: 'Защитные стекла', fetchPrefix: 'electronick' },
        { readebleName: 'Защитные пленки', fetchPrefix: 'electronick' },
        { readebleName: 'Кабели', fetchPrefix: 'electronick' },
        { readebleName: 'Подставки и держатели', fetchPrefix: 'electronick' },
        { readebleName: 'Автомобильные и мотоциклетные держатели', fetchPrefix: 'electronick' },
    ]
}

</script>
<template>
    <div class="max-w-[12.5rem]">
        <CategoryFilter :categories="categories" />
        <DefaultFilters />
        <FilterSlider text="Цена" popover-text="Фильтр учитывает только цену по Ozon Карте"/>
    </div>
</template>
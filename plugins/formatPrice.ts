
export default defineNuxtPlugin(app => ({
    provide: {
        formatPrice: (val: string | number) => new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 }).format(+val)
    }
}))

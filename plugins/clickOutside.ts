import { Directive, DirectiveBinding } from "nuxt/dist/app/compat/capi";

export default defineNuxtPlugin((nuxtApp) => {
    const documentClickHandler = ({ target }: MouseEvent, el: HTMLElement, binding: DirectiveBinding<() => void>) => {
        if ((el.contains(target as Node))) return
        binding.value()
    }

    nuxtApp.vueApp.directive('clickOutside', <Directive<HTMLElement, () => void>>{
        created(el, binding) {
            console.log('mount');
            document.addEventListener('click', e => documentClickHandler(e, el, binding))
        },
        unmounted(el, binding) {
            console.log('unmounted');
            document.removeEventListener('click', e => documentClickHandler(e, el, binding))
        }
    })
})
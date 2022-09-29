import { useTitle as usePageTitle } from '@vueuse/core'
import { watch, unref } from 'vue'
import { useRouter } from 'vue-router'

export function useTitle() {
    const { currentRoute } = useRouter()  // 周边生态
    const pageTitle = usePageTitle()

    watch(
        [() => currentRoute.value.path],
        () => {
            const route = unref(currentRoute)
            const tTitle = route?.meta?.title as string
            pageTitle.value = tTitle
        }
    )
}
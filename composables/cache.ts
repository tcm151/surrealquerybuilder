import type { Ref } from "vue"
import { defineStore, storeToRefs } from "pinia"

interface Cache {
    [key: string]: any 
}

export const useCache = defineStore("cache", () => {
    const events = useEvents()
    const { settings } = storeToRefs(useSettings())

    let cache = useLocalStorage<Cache>(`cache:${settings.value.namespace}`, {})

    function get<T>(key: string, fallback: () => T): Ref<T> {
        if (cache.value[key] != undefined) {
            const cachedRef = ref<T>(cache.value[key]) as Ref<T>
            // WARN potential for performance degradations here
            watch (cachedRef, () => cache.value[key] = cachedRef.value)
            return cachedRef
        }
        else {
            cache.value[key] = fallback()
            const fallbackRef = ref<T>(cache.value[key]) as Ref<T>
            // WARN potential for performance degradations here
            watch (fallbackRef, () => cache.value[key] = fallbackRef.value)
            return fallbackRef
        }
    }

    return { get }
})

import { defineStore } from "pinia"

export interface Hint {
    number: number
    message: string
    type: "message" | "success" | "warning" | "error"
}

export const useHints = defineStore("hints", () => {

    let count = ref(0);
    let items = ref<Hint[]>([])
    
    function addHint(payload: Hint) {
        items.value.push(payload);
        setTimeout(() => remove(payload), 5000);
    }
    
    function remove(hint: Hint) {
        items.value = items.value.filter(n => n.number !== hint.number)
    }

    function addMessage(message: string) {
        addHint({
            number: count.value += 1,
            message: message,
            type: "message"
        })
    }

    function addSuccess(message: string) {
        addHint({
            number: count.value += 1,
            message: message,
            type: "success"
        })
    }

    function addWarning(message: string) {
        addHint({
            number: count.value += 1,
            message: message,
            type: "warning"
        })
    }

    function addError(message: string) {
        addHint({
            number: count.value += 1,
            message: message,
            type: "error"
        })
    }

    return { items, count, addMessage, addSuccess, addWarning, addError, remove }
})

import { defineStore, skipHydrate } from "pinia";

interface Settings {
    host: string,
    username: string,
    password: string,
    namespace: string,
    database: string,
}

export const useSettings = defineStore("settings", () => {
    const settings = skipHydrate(useLocalStorage<Settings>("settings", {
        host: "",
        username: "",
        password: "",
        namespace: "",
        database: ""
    }));

    return { settings };
})
export default defineNuxtConfig({
    ssr: false,
    devtools: { enabled: false },
    modules: [
        "@pinia/nuxt",
        "@vueuse/nuxt"
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@use "~/assets/scss/modules/colors" as *;',
                        '@use "~/assets/scss/modules/flex" as *;',
                    ].join('\n'),
                }
            }
        }
    },
    css: [
        '~/assets/scss/styles.scss',
    ],
    app: {
        baseURL: '/surrealquerybuilder/',
        buildAssetsDir: 'assets',
        head: {
            title: "Surreal Query Builder",
            link: [
                {
                    rel: "stylesheet",
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css",
                    integrity: "sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==",
                    crossorigin: "anonymous",
                    referrerpolicy: "no-referrer",
                },
            ],
            meta: [
                { name: "viewport", content: "width=device-width, height=device-height, initial-scale=1" }
            ]
        },
    },
})

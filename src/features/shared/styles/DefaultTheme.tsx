import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
    colors: {
        background:   "#f8f8f8",
        foreground:   "#111111",
        brand1: {
            main:     "#02a0da",
            contrast: "#ffffff",
        },
        brand2: {
            main:     "#b8afc9",
            contrast: "#ffffff",
        },
        primary: {
            main:     "#005f81",
            contrast: "#ebebeb",
        },
        warning: {
            main:     "#dacc02",
            contrast: "#f0f0f0",
        },
        danger: {
            main:     "#da2202",
            contrast: "#fafafa",
        },
        success: {
            main:     "#528e86",
            contrast: "#f5f5f5",
        },

    }
}

export { theme as AppDefaultTheme };
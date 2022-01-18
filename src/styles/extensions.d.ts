import "styled-components";

interface Color {
    main: string;
    contrast: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            background: string;
            foreground: string;
            brand1: Color;
            brand2: Color;
            primary: Color;
            danger: Color;
            warning: Color;
            success: Color;
        }
    }
}
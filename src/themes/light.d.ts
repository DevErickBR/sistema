import 'styled-components';

declare module 'styled-components' {
    export interface DefaulTheme {
        title: string;
        colors: {
            background: {
                bg100: string;
                bg200: string;
                bg300: string;
            },
            text: {
                tx100: string;
                tx200: string;
            },
            extras: {
                mx1: string;
                mx2: string;
                mx3: string;
            },
            alerts: {
                err: string;
                sucess: string;
                alert: string;
            }
        };
    }
}
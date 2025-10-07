import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    :root {
        --color-bg: #3B363F;
        --color-border: rgba(132, 132, 132, 0.5);
        --color-title-one: #CCC7D7;
        --color-title-two: #A39FAA;
        --color-text: #E1DEE6;
        --color-orange-elipse: radial-gradient(circle at 20% 80%, rgba(202, 41, 1, 1) 0%, rgba(239, 136, 17, 1) 100%);
        --color-blue-elipse: radial-gradient(circle at 50% 80%, rgba(59, 16, 147, 1) 0%, rgba(31, 104, 215, 1) 100%);
        --color-green-elipse: radial-gradient(circle at 50% 20%,rgba(29, 158, 98, 1) 0%, rgba(43, 239, 17, 1) 100%);
        --color-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
        --color-glass-border: rgba(255, 255, 255, 0.14);
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        color: var(--color-text);
        background: var(--color-bg);
        min-height: 100%;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    ul, ol {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    button {
        font-family: inherit;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }


`;

export default GlobalStyles;

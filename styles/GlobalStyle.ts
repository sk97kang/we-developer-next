import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, ::before, ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: ${({ theme }) => theme.font};
        font-size: ${({ theme }) => theme.fontSizes.normal};
        font-weight: ${({ theme }) => theme.fontWeights.medium};
        color: ${({ theme }) => theme.colors.text};
        padding-top: ${({ theme }) => theme.heights.header};
        line-height: 1.2;
    }
    a {
        text-decoration: none;
        color : ${({ theme }) => theme.colors.text}
    }
    img {
        width: 100%;
        height: auto;
        display: block;
    }

    @media (min-width: 768px) {
        body {
            padding-top: calc(${({ theme }) => theme.heights.header} + 1rem);
        }
    }
`;

export default GlobalStyle;

import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

import { fontFamily, fontSizes, colors } from './variables';

export const GlobalStyles = createGlobalStyle`
    html, body, #root {
        height: 100%
    }
    body {
        margin: 0;
        font-family: ${fontFamily.primary};
        font-size: ${fontSizes.normal};
        color: ${colors.black}
    }
`;

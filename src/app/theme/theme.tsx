import {
    extendBaseTheme,

} from '@chakra-ui/react'
import { Button } from './components/button';
import { Heading } from './components/heading';
import { Text } from './components/text';


export const fonts = {
    fontFamily: `Inter Variable, sans-serif`,
    // fontStyle: 'bold',
    fontSize: "50px",
    body: `Open Sans, sans-serif`,
};

const breakpoints = {
    base: "0px", // 0px
    sm: "480px", // ~480px. em is a relative unit and is dependant on the font size.
    md: "768px", // ~768px
    lg: "1024px", // ~992px
    xl: "1280px", // ~1280px
    "2xl": "1536px", // ~1536px
};

export const colors = {
    primary: {
        100: '#3f82e0',
        200: '#4979bc',
    },
    secondary: {
        100: '',
    },
    background: {
        // 100: '#0F0F0F',
        100: '#131313',
        200: '#242527',
        300: '#313235',
    },
    hover: {
        100: '#6b6e73',
        200: '#bebebe',
    },
    foreground: {
        100: "#F1F1F1",
        200: "#E6E6E6",
    }
}


const theme = extendBaseTheme({
    fonts,
    breakpoints,
    colors,
    components: {
        Button,
        Heading,
        Text,
        //   Button,
    },
})

export default theme;
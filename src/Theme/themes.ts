import { createTheme } from'@mui/material'; 


export const theme = createTheme({
    typography: {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif'
    },
    palette: {
        primary: {
            main: '#f44336'
        },
        secondary: {
            main: '#b6d7a8',
            light: '#9fc5e8'
        },
        info: {
            main: '#11bb22'
        }
    }
})
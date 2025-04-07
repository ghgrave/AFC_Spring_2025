import {createTheme} from "@mui/material/styles"

const theme = createTheme(
    {
        palette: {
            primary: {
                main: "#00bcd4"
            },
            secondary: {
                main: "#01ffeb"
            },
            text: {
                primary: "#000"
            },
            error: {
                main: "#00ff2a"
            }
        }
    }
)

export default theme;
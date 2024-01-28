import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// color design tokens

export const tokens = (mode) => ({
    ...(mode === 'light'
        ? {
            primary: {
                100: "#ccdafd",
                200: "#99b5fc",
                300: "#668ffa",
                400: "#336af9",
                500: "#0045f7",
                600: "#0037c6",
                700: "#002994",
                800: "#001c63",
                900: "#000e31"
            },
            greenAccent: {
                100: "#cceedc",
                200: "#99deb9",
                300: "#66cd95",
                400: "#33bd72",
                500: "#00ac4f",
                600: "#008a3f",
                700: "#00672f",
                800: "#004520",
                900: "#002210"
            },
            redAccent: {
                100: "#f9cdcd",
                200: "#f29b9b",
                300: "#ec6868",
                400: "#e53636",
                500: "#df0404",
                600: "#b20303",
                700: "#860202",
                800: "#590202",
                900: "#2d0101"
            },
            white: {
                100: "#fefeff",
                200: "#fdfdff",
                300: "#fcfdff",
                400: "#fbfcff",
                500: "#fafbff",
                600: "#c8c9cc",
                700: "#969799",
                800: "#646466",
                900: "#323233"
            },
            grey: {
                100: "#e5e4e7",
                200: "#cbc9cf",
                300: "#b1afb7",
                400: "#97949f",
                500: "#7d7987",
                600: "#64616c",
                700: "#4b4951",
                800: "#323036",
                900: "#19181b"
            },
        } : {
            primary: {
                100: "#000e31",
                200: "#001c63",
                300: "#002994",
                400: "#0037c6",
                500: "#0045f7",
                600: "#336af9",
                700: "#668ffa",
                800: "#99b5fc",
                900: "#ccdafd",
            },
            greenAccent: {
                100: "#002210",
                200: "#004520",
                300: "#00672f",
                400: "#008a3f",
                500: "#00ac4f",
                600: "#33bd72",
                700: "#66cd95",
                800: "#99deb9",
                900: "#cceedc",
            },
            redAccent: {
                100: "#2d0101",
                200: "#590202",
                300: "#860202",
                400: "#b20303",
                500: "#df0404",
                600: "#e53636",
                700: "#ec6868",
                800: "#f29b9b",
                900: "#f9cdcd",
            },
            white: {
                100: "#323233",
                200: "#646466",
                300: "#969799",
                400: "#c8c9cc",
                500: "#fafbff",
                600: "#fbfcff",
                700: "#fcfdff",
                800: "#fdfdff",
                900: "#fefeff",
            },
            grey: {
                100: "#19181b",
                200: "#323036",
                300: "#4b4951",
                400: "#64616c",
                500: "#7d7987",
                600: "#97949f",
                700: "#b1afb7",
                800: "#cbc9cf",
                900: "#e5e4e7",
            },
        }
    )
});

//mui theme settings

export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'light'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.white[500]
                    }
                } : {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.white[500]
                    }
                }
            )
        },
        typography: {
            fontFamily: ["Source Sans 3","sans-serif"].join(","),
            fontSize: 12,
            h1:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 40,
            },
            h2:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 32,
            },
            h3:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 24,
            },
            h4:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 20,
            },
            h5:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 16,
            },
            h6:{
                fontFamily: ["Source Sans 3","sans-serif"].join(","),
                fontSize: 14,
            }
        }
    };
};

// react context for color mode

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode,setMode] = useState("light");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}




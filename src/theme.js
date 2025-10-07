import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
createTheme({
palette: {
mode,
...(mode === "light"
? {
background: { default: "#fafafa", paper: "#fff" },
text: { primary: "#1a1a1a", secondary: "#555" },
}
: {
background: { default: "#0c0c0c", paper: "#1a1a1a" },
text: { primary: "#fff", secondary: "#bbb" },
}),
primary: { main: "#c4a69f" },
secondary: { main: "#a0887e" },
},
typography: {
fontFamily: "'Inter', sans-serif",
h2: { fontWeight: 600 },
h4: { fontWeight: 500 },
},
});

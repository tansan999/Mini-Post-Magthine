import React from "react";
import { AppBar, Toolbar, Typography, Switch, Box } from "@mui/material";

const Header = ({ mode, toggleMode }) => {
return (
<AppBar
position="static"
color="transparent"
elevation={0}
sx={{ borderBottom: 1, borderColor: "divider" }}
>
<Toolbar sx={{ justifyContent: "space-between" }}>
<Typography variant="h6" sx={{ fontWeight: 600 }}>
Dress Story </Typography> <Box display="flex" alignItems="center" gap={1}> <Typography variant="body2">🌞</Typography>
<Switch checked={mode === "dark"} onChange={toggleMode} /> <Typography variant="body2">🌜</Typography> </Box> </Toolbar> </AppBar>
);
};

export default Header;

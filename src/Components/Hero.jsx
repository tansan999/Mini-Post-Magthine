import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";

const Hero = () => {
return (
<Box
sx={{
bgcolor: "background.default",
color: "text.primary",
py: 10,
textAlign: "center",
}}
> <Container maxWidth="md"> <Typography variant="h2" gutterBottom>
Каждое платье — твоя уникальная история </Typography>
<Typography variant="body1" sx={{ mb: 3 }}>
Создаем женственность через элегантные силуэты. Наши платья — это не
просто одежда, это способ самовыражения. </Typography>
<Button variant="contained" color="primary" sx={{ borderRadius: 10 }}>
Смотреть </Button> </Container>
<Box
sx={{
mt: 6,
mx: "auto",
width: "80%",
height: 400,
bgcolor: "#dfefff",
borderRadius: 3,
}}
/> </Box>
);
};

export default Hero;

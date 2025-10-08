import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

// === КОМПОНЕНТ ===

const Hero = () => {
  return (
    <HeroSection>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Каждое платье — твоя уникальная история
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Создаем женственность через элегантные силуэты. Наши платья — это не
          просто одежда, это способ самовыражения.
        </Typography>
{/* 
        <HeroButton variant="contained" color="primary">
          Смотреть
        </HeroButton> */}
      </Container>

      <HeroImage />
    </HeroSection>
  );
};

export default Hero;

// === СТИЛИ ===

const HeroSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(10),
  textAlign: "center",
}));

const HeroImage = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
  height: 400,
  backgroundColor: "#dfefff",
  borderRadius: theme.shape.borderRadius * 3,
}));

// const HeroButton = styled(Button)(({ theme }) => ({
//   borderRadius: 10,
//   paddingLeft: theme.spacing(4),
//   paddingRight: theme.spacing(4),
//   textTransform: "none",
//   fontWeight: 600,
//   boxShadow: theme.shadows[3],
//   "&:hover": {
//     boxShadow: theme.shadows[6],
//   },
// }));

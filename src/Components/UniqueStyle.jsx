import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";

const UniqueStyle = () => {
  return (
    <Box
      sx={{
        py: 10,
        bgcolor: "background.default",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h4" mb={2}>
          Создай свой уникальный образ
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          Откройте для себя мир элегантности и женственности. Каждое платье —
          это возможность почувствовать себя особенной.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
          <a href="https://t.me/mylifelikeeasy">telegram</a>
          <a href="https://www.instagram.com/v_dior_v?igsh=MTJzeTJpc3VicDAzbQ==">
            Instagram
          </a>
        </Stack>
      </Container>
    </Box>
  );
};

export default UniqueStyle;

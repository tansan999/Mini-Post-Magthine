import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.paper", mt: 5 }}>
      <Container>
        <Grid spacing={4}>
          <Typography variant="body2">Instagram</Typography>
          <Typography variant="body2">TikTok</Typography>
        </Grid>
        <Box textAlign="center" mt={5}>
          <Typography variant="caption" color="text.secondary">
            © 2024 Dress Story. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

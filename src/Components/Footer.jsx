import React from "react";
import { Box, Container, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ py: 6, bgcolor: "background.paper", mt: 5 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Каталог
            </Typography>
            <Typography variant="body2">Повседневные</Typography>
            <Typography variant="body2">Вечерние</Typography>
            <Typography variant="body2">Летние</Typography>
            <Typography variant="body2">Новинки</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Контакты
            </Typography>
            <Typography variant="body2">Доставка</Typography>
            <Typography variant="body2">Оплата</Typography>
            <Typography variant="body2">Возврат</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Соцсети
            </Typography>
            <Typography variant="body2">Instagram</Typography>
            <Typography variant="body2">TikTok</Typography>
            <Typography variant="body2">Pinterest</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subtitle1" fontWeight={600}>
              Подписка
            </Typography>
            <Typography variant="body2">
              Получайте первыми информацию о новых коллекциях.
            </Typography>
          </Grid>
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

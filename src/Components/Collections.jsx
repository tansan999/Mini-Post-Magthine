import React from "react";
import { Box, Container, Grid, Typography, Button, Paper } from "@mui/material";

const collections = [
{
title: "Повседневные",
text: "Комфорт и элегантность для каждого дня.",
},
{
title: "Вечерние",
text: "Роскошь и изящество для особых моментов.",
},
{
title: "Летние",
text: "Легкость и свобода летних дней.",
},
{
title: "Новинки",
text: "Последние тренды в мире моды.",
},
];

const Collections = () => {
return (
<Box sx={{ py: 10, bgcolor: "background.paper" }}> <Container> <Typography variant="h4" textAlign="center" mb={1}>
Наши коллекции </Typography> <Typography
       variant="body1"
       textAlign="center"
       color="text.secondary"
       mb={5}
     >
Откройте для себя разнообразие женственности через наши платья. </Typography>


    <Grid container spacing={3}>
      {collections.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Paper
            elevation={2}
            sx={{
              bgcolor: "background.default",
              p: 2,
              borderRadius: 3,
              height: "100%",
            }}
          >
            <Box
              sx={{
                height: 180,
                bgcolor: "#dfefff",
                borderRadius: 2,
                mb: 2,
              }}
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {item.text}
            </Typography>
            <Button size="small" sx={{ textTransform: "none" }}>
              Смотреть →
            </Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
</Box>


);
};

export default Collections;

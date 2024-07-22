import React from "react";
import { Container, Grid, Group, Title } from "@mantine/core";
import { BadgeCard } from "../../containers/BadgeCard";

const SellProduct = () => {
  const cards = [0, 1, 2, 3, 4].map((item) => (
    <Grid.Col span={{ base: 12, sm: 4, xs: 6 }} key={item}>
      <BadgeCard />
    </Grid.Col>
  ));
  return (
    <Container>
      <Group align="center" justify="center">
        <Title order={1}>Integrate effortlessly</Title>
        <Grid overflow="hidden">{cards}</Grid>
      </Group>
    </Container>
  );
};

export default SellProduct;

import React, { useEffect } from "react";
import { Layout } from "../components/templates/Layout";
import { sponsors } from "../components/Sponsors/sponsors.json";
import {
  Box,
  Badge,
  SimpleGrid,
  Image,
  Stack,
  Heading,
  AspectRatioBox,
} from "@chakra-ui/core";
import { initScrollView } from "../helpers/backToTop";

const mapping = {
  partenaire: "teal",
  gold: "yellow",
  silver: "gray",
  bronze: "orange",
  startup: "blue",
};

const Card = ({ sponsor }) => (
  <Box rounded="lg" borderWidth={1}>
    <AspectRatioBox ratio={16 / 9}>
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        borderBottomWidth={1}
        roundedTop="lg"
        objectFit="contain"
        padding={2}
      />
    </AspectRatioBox>
    <Box
      p={2}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
    >
      <Heading
        mb={2}
        fontWeight="semibold"
        as="h4"
        size="md"
        textAlign="center"
      >
        {sponsor.name}
      </Heading>

      <Badge variantColor={mapping[sponsor.type]} px={2}>
        {sponsor.type}
      </Badge>
    </Box>
  </Box>
);

export const Sponsors = () => {
  useEffect(() => {
    initScrollView();
  }, []);

  return (
    <Layout>
      <Box
        borderWidth={1}
        rounded="lg"
        color="brand.900"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        target="_blank"
        rel="noopener noreferrer"
        my={4}
      >
          Grâce à eux cet événement a pu voir le jour
      </Box>
      <Stack spacing={8}>

      <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
      >
          {sponsors
              .filter(sponsor => sponsor.type === "co-organisateur")
              .map(sponsor => (
                  <Card sponsor={sponsor} key={sponsor.name} />
              ))}
      </SimpleGrid>

      <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
      >
          {sponsors
              .filter(sponsor => sponsor.type === "partenaire")
              .map(sponsor => (
                  <Card sponsor={sponsor} key={sponsor.name} />
              ))}
      </SimpleGrid>

        <SimpleGrid columns={{ xs: 1, md: 2 }} spacing={{ xs: 2, md: 8 }}>
          {sponsors
            .filter(sponsor => sponsor.type === "gold")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "silver")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "bronze")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>

        <SimpleGrid
          columns={{ xs: 1, sm: 2, md: 4 }}
          spacing={{ xs: 2, md: 8 }}
        >
          {sponsors
            .filter(sponsor => sponsor.type === "startup")
            .map(sponsor => (
              <Card sponsor={sponsor} key={sponsor.name} />
            ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};

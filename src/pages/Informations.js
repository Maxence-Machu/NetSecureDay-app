import React, { useEffect } from "react";
import { Heading, Box, Text, Stack, Icon } from "@chakra-ui/core";
import { Layout } from "../components/templates/Layout";
import { initScrollView } from "../helpers/backToTop";

export function Informations() {
  useEffect(() => {
    initScrollView();
  }, []);

  return (
    <Layout>
      <Box
        borderWidth={1}
        rounded="lg"
        color="brand.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={2}
        as="a"
        href="https://www.netsecure-day.fr"
        target="_blank"
        rel="noopener noreferrer"
        my={4}
      >
        Toutes les informations sont disponibles sur le site de NetSecure-Day
        <Icon ml={2} name="external-link" />
      </Box>
      <Heading as="h2" size="sm" mb={4}>
        Comment venir ?
      </Heading>

      <Stack spacing={4}>
        <Box>
          <Text>
            Parc des Expositions de Rouen
            <br />
            76121 Le Grand-Quevilly
          </Text>
        </Box>

        <Box textAlign="center">
          <iframe
            title="Carte montrant l'emplacement du Parc des Expositions de Rouen"
            width="90%"
            height="350"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://www.openstreetmap.org/export/embed.html?bbox=1.0459766909480097%2C49.388059632408456%2C1.0640011355280878%2C49.39789176468678&amp;layer=transportmap&amp;marker=49.392975944551345%2C1.0549889132380486"
            style={{ border: "1px solid black", margin: "auto" }}
          />

          <small>
            <a
              href="https://www.openstreetmap.org/?mlat=49.3930&mlon=1.0550#map=16/49.3930/1.0550&layers=T"
              title="Lien vers le site d'OpenStreetMap pour afficher la carte en plus grande"
              target="_blank"
              rel="noopener noreferrer"
            >
              Afficher une carte plus grande
            </a>
          </small>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en vélo{" "}
            <span role="img" aria-label="Emoji de vélo">
              🚲
            </span>
          </Text>
          <Text fontWeight="bold">
            Il existe plusieurs parking à vélo autour du Parc des Expositions
          </Text>
          <a
            href="https://www.cyclosm.org/#map=17/49.44759/1.06432/cyclosm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Il est possible de les consulter sur CyclOSM
            <Icon ml={2} name="external-link" />
          </a>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en transport public{" "}
            <span role="img" aria-label="Emoji de train">
              🚆
            </span>
          </Text>
          <Text fontWeight="bold">TEOR T4</Text>
          <Text>Arrêt Zénith - Parc Expo</Text>
        </Box>

        <Box>
          <Text fontSize="1.4rem" mb={2}>
            Venir en voiture{" "}
            <span role="img" aria-label="Emoji de voiture">
              🚗
            </span>
          </Text>
          <Text fontWeight="bold">Parking du Parc des Expositions</Text>
        </Box>
      </Stack>
    </Layout>
  );
}

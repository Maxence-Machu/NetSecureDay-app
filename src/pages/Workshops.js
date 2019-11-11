import React, { Fragment, useEffect } from "react";
import {Box, Heading, Text} from "@chakra-ui/core";
import { useFavoriteContext } from "../contexts/FavoritesContext";
import { Layout } from "../components/templates/Layout";
import Card from "../components/Card";
import { useTalks } from "../hooks/useTalks";
import { groupBy } from "lodash";
import Hour from "../components/Hour";
import { sortHours } from "../helpers/sortHours";
import { CardSkeleton } from "../components/CardSkeleton";
import { SCROLLVIEW_ID } from "../helpers/backToTop";

export const PROGRAM_SCROLL_OFFSET_KEY = "scroll-offset";

export function Workshops({ isFavorite = false }) {
  const [talks, loading] = useTalks();
  const { favorites } = useFavoriteContext();

  useEffect(() => {
    if (!loading) {
      const IS_FAVORITE_KEY = `${PROGRAM_SCROLL_OFFSET_KEY}${
        isFavorite ? "-fav" : ""
      }`;

      const scrollview = document.getElementById(SCROLLVIEW_ID);

      scrollview.scrollTo(0, sessionStorage.getItem(IS_FAVORITE_KEY));

      const lastPosition = () => {
        sessionStorage.setItem(IS_FAVORITE_KEY, scrollview.scrollTop);
      };

      scrollview.addEventListener("scroll", lastPosition);

      return () => {
        scrollview.removeEventListener("scroll", lastPosition);
      };
    }
  }, [loading, isFavorite]);

  const workshops = talks.filter(talk => talk.state === 'workshop');
  const talksGroupedByHour = groupBy(workshops, "hour");

  const sortRoom = (a, b) => a.room.localeCompare(b.room);

  const getContent = () => {

    console.log(talksGroupedByHour);
    return Object.keys(talksGroupedByHour)
      .sort(sortHours)
        .map(hour => (
          <Fragment key={hour}>
            <Hour>{hour}</Hour>
            {talksGroupedByHour[hour]
                .filter(talk => talk.state === 'workshop')
                .sort(sortRoom)
                .map(talk =>
                    talk.state === "event" ? (
                        <Card key={talk.id} talk={talk}/>
                    ) : (
                        <Card key={talk.id} to={`/talk/${talk.id}`} talk={talk}/>
                    )
                )}
          </Fragment>
        ));
  };

  return (
    <Layout>
      {loading && [...Array(20).keys()].map(key => <CardSkeleton key={key} />)}
      <Box
          d="block"
          boxShadow={"paper"}
          borderRadius="md"
          borderColor={"gray.300"}
          borderWidth={"1px"}
          backgroundColor={"white"}
          py="2"
          px="3"
          mb="4"
      >
        <Heading size="md" mb="2">Prérequis</Heading>
        <Text>Texte ici pour expliquer ques les workshops ont des prérequis</Text>
      </Box>
      {!loading && <Box>{getContent()}</Box>}
    </Layout>
  );
}

import React, { useState } from "react";
import marked from "marked";
import {
  Box,
  Text,
  Stack,
  Heading,
  Button,
  AspectRatioBox,
  Flex
} from "@chakra-ui/core";
import { MdBrokenImage } from "react-icons/md";

const propTypes = {};

const defaultProps = {};

const SpeakerDisplay = ({ speaker }) => {
  const [showAvatar, setShowAvatar] = useState(true);

  return (

    <Box
        my="8"
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
      <Stack isInline spacing="4" my="2">
        <AspectRatioBox
          ratio={1}
          width={100}
          backgroundColor="gray.100"
          rounded="md"
          overflow="hidden"
        >
          <Flex align="center" justify="center">
            {!showAvatar && (
              <Box as={MdBrokenImage} size="30px" color="gray.300"/>
            )}
            {showAvatar && (
              <Box
                as="img"
                src={speaker.photoURL}
                alt={speaker.displayName}
                onError={() => setShowAvatar(false)}
              />
            )}
          </Flex>
        </AspectRatioBox>
        )}
        <Box>
          <Box mb="2">
            <Heading as="h4" fontSize="md" mb="1">
              {speaker.displayName}
            </Heading>
            {speaker.company && (
              <Heading as="h5" fontSize="xs" color="gray.500">
                {speaker.company.displayName}
              </Heading>
            )}
          </Box>
          <Stack isInline>
            {speaker.twitter && (
              <Box>
                <Button
                  as="a"
                  href={`https://twitter.com/${speaker.twitter.slice(1, speaker.twitter.length)}`}
                  size="xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </Button>
              </Box>
            )}
            {speaker.github && (
              <Box>
                <Button
                  as="a"
                  href={`https://github.com/${speaker.github}`}
                  size="xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Button>
              </Box>
            )}
          </Stack>
        </Box>
      </Stack>
      <Text fontSize="sm" as="i" dangerouslySetInnerHTML={{ __html: marked(speaker.bio || "") }} />
    </Box>
  );
};

export default SpeakerDisplay;

SpeakerDisplay.propTypes = propTypes;
SpeakerDisplay.defaultProps = defaultProps;

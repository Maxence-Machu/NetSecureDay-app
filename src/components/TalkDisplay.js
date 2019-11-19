import React from "react";
import PropTypes from "prop-types";
import marked from "marked";
import {Box, Divider, Text} from "@chakra-ui/core";

const propTypes = {
  talk: PropTypes.object.isRequired
};

const defaultProps = {};

const TalkDisplay = ({ talk }) => {
  return (
    <Box mb="4">
      {talk.abstract && (
        <Text
          dangerouslySetInnerHTML={{ __html: marked(talk.abstract || "") }}
        />
      )}

      {talk.requirement && (
          <Box>
            <Divider my="5"/>
            <Text fontWeight="bold" color="brand.700">
              Prérequis du Workshop:
            </Text>
            <Text
              dangerouslySetInnerHTML={{ __html: marked(talk.requirement || "") }}
            />
          </Box>
      )}
    </Box>
  );
};

export default TalkDisplay;

TalkDisplay.defaultProps = defaultProps;
TalkDisplay.propTypes = propTypes;

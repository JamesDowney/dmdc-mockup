import { Box, Flex, Text, BoxProps, Divider, Center } from "@chakra-ui/react";
import React from "react";

interface WidgetTileProps extends BoxProps {
  widgetTileTitle: string;
  widgetTileDescription?: JSX.Element;
}

function WidgetTile(props: WidgetTileProps) {
  return (
    <Box
      backgroundColor={"gray.200"}
      minHeight={"-moz-fit-content"}
      width={"30%"}
      boxShadow={"dark-lg"}
      zIndex={"100"}
      alignSelf={"start"}
    >
      <Flex minHeight={50} textColor={"black"} justifyContent={"center"}>
        <Text fontSize={"x-large"} alignSelf={"center"} justifySelf={"center"}>
          <Text>{props.widgetTileTitle}</Text>
        </Text>
      </Flex>
      <Center>
        <Divider
          orientation={"horizontal"}
          borderColor={"gray.600"}
          width="80%"
          alignSelf={"center"}
        />
      </Center>
      <Flex fontSize={"lg"} padding={5} minHeight={50} textColor={"black"}>
        {props.widgetTileDescription}
      </Flex>
    </Box>
  );
}

export default WidgetTile;
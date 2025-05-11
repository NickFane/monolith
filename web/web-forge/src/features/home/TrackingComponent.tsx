import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  id: string;
};

const TrackingComponent = (props: Props) => {
  const { id } = props;

  const [trackingCount, setTrackingCount] = React.useState(0);
  console.log("TrackingComponent rendered!", id);
  return (
    <Flex
      width={"720px"}
      justifyContent={"space-between"}
      border={"1px solid black"}
    >
      <Text>TrackingComponent</Text>
      <Text fontSize={"8px"}>{id}</Text>
      <Text>Tracking Count: {trackingCount}</Text>
      <Button onClick={() => setTrackingCount(trackingCount + 1)}>
        Increment
      </Button>
    </Flex>
  );
};

export default TrackingComponent;

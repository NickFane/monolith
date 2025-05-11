/// <reference types="react/experimental" />
import { Button, Flex } from "@chakra-ui/react";
import React, { unstable_Activity as Activity } from "react";
import TrackingComponent from "./TrackingComponent";

const HomeContainer = () => {
  const [activityVisible, setActivityVisible] = React.useState(false);
  const handleButtonClick = () => {
    setActivityVisible(!activityVisible);
  };
  return (
    <Flex
      direction={"column"}
      height={"100%"}
      gap={"20px"}
      alignItems={"center"}
    >
      <h1>Home</h1>
      <Button width="160px" onClick={handleButtonClick}>
        Click Me!
      </Button>
      <TrackingComponent id={"header"} />
      <Activity mode={activityVisible ? "visible" : "hidden"}>
        <TrackingComponent id={crypto.randomUUID()} />
      </Activity>
      <TrackingComponent id={"footer"} />
    </Flex>
  );
};

export default HomeContainer;

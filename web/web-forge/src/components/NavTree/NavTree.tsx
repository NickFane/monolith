import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";

const routes = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Journey", path: "/journey" },
];

export const NavTree = () => {
  const navigate = useNavigate();

  return (
    <Flex
      w={"100%"}
      h={"40px"}
      background={
        "radial-gradient(circle,rgba(251, 154, 63, 1) 0%, rgba(179, 70, 252, 1) 100%)"
      }
      justifyContent={"center"}
      alignItems={"center"}
    >
      {routes.map((route) => {
        return (
          <Button
            borderRadius={"0"}
            onClick={() => navigate({ to: route.path })}
            key={route.text}
          >
            {route.text}
          </Button>
        );
      })}
    </Flex>
  );
};

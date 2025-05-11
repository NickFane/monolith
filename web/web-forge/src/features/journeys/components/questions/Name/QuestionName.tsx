import { Flex } from "@chakra-ui/react";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getFullName } from "../../../store/JourneySlice";
import useNextButton from "../../../../../hooks/useNextButton";
import { Input } from "../../../../../components";
import { setFirstName, setLastName } from "../../../store/actions";

const handleFirstNameChange = (
  dispatch: React.Dispatch<object>,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  console.log("First Name: ", event.target.value);
  dispatch(setFirstName(event.target.value));
};

const handleLastNameChange = (
  dispatch: React.Dispatch<object>,
  event: React.ChangeEvent<HTMLInputElement>
) => {
  console.log("Last Name: ", event.target.value);
  dispatch(setLastName(event.target.value));
};

const QuestionName = () => {
  const dispatch = useAppDispatch();

  const fullName = useAppSelector(getFullName);
  const { nextButton } = useNextButton();

  return (
    <Flex direction={"column"}>
      {fullName !== "" && <h2>{`Hello ${fullName}`}</h2>}
      {fullName === "" && <h2>What is your name?</h2>}

      <Flex>
        <Input
          placeholder="First Name"
          onChange={(e) => handleFirstNameChange(dispatch, e)}
        />
        <Input
          placeholder="Last Name"
          onChange={(e) => handleLastNameChange(dispatch, e)}
        />
      </Flex>
      {nextButton}
    </Flex>
  );
};

export default QuestionName;

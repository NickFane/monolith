import React from 'react'
import { Input as ChakraInput } from "@chakra-ui/react";

type Props = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

export const Input = (props: Props) => {
    const { onChange, placeholder } = props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    }
  return (
        <ChakraInput
          placeholder={placeholder}
          size="md"
          onChange={handleChange}
        />
  )
}

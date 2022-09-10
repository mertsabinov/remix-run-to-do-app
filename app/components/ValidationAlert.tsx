import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { FC } from "react";

interface IProps {
  title: string;
  description: string;
}

export const ValidationAlert: FC<IProps> = ({ title, description }) => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default ValidationAlert;

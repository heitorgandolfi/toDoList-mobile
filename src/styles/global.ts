import styled, { keyframes } from "styled-components";

import { EvilIcons } from "@expo/vector-icons";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AnimatedSpinner = styled(EvilIcons)`
  animation: ${spinAnimation} 1.5s linear infinite;
`;

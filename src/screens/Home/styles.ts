import styled from "styled-components/native";

export const AppContainer = styled.View`
  height: 100%;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const LogoImage = styled.Image`
  align-self: center;

  margin-top: 20%;
`;

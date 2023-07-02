import styled from "styled-components/native";

export const FormContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;

  padding: 8px;
  margin: 50px 16px 0;
`;

export const Input = styled.TextInput`
  width: 70%;
  padding: 8px;

  border: 1px solid transparent;
  border-radius: 8px;
  color: ${(props) => props.theme["gray-300"]};
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const InputButton = styled.TouchableOpacity`
  justify-content: center;
  width: 30%;
  padding: 12px;

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${(props) => props.theme["blue-500"]};
`;

export const ButtonText = styled.Text`
  align-self: center;
  color: ${(props) => props.theme["white"]};
`;

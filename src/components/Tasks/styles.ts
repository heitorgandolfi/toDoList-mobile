import styled from "styled-components/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export const TaskWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 6px 16px;
  padding: 8px;

  border: 1px solid transparent;
  border-radius: 8px;
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const TaskContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const TaskText = styled.Text`
  max-width: 220px;
  color: ${(props) => props.theme["gray-300"]};
`;

export const CircleOutlineIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${(props) => props.theme["gray-300"]};
`;

export const CheckedCircleIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${(props) => props.theme["green-500"]};
`;

export const TrashCanIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: ${(props) => props.theme["gray-300"]};
`;

export const EmptyTaskTextWrapper = styled.View`
  margin-top: 20px;
`;

export const EmptyTaskText = styled.Text`
  text-align: center;
  color: ${(props) => props.theme["gray-450"]};
`;

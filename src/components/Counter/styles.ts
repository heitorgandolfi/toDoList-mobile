import styled from "styled-components/native";

export const CounterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 25px 16px;
  padding: 12px;

  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme["gray-500"]};
  border-radius: 1px;
`;

export const CounterContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

interface CounterTextProps {
  variant?: "done";
}

export const CounterText = styled.Text<CounterTextProps>`
  color: ${(props) =>
    props.variant === "done"
      ? props.theme["green-500"]
      : props.theme["yellow-300"]};
`;

interface CounterNumberProps {
  variant?: "done";
}

export const CounterNumber = styled.Text<CounterNumberProps>`
  padding: 2px 8px;
  border-radius: 999px;
  background-color: ${(props) =>
    props.variant === "done"
      ? props.theme["green-500"]
      : props.theme["yellow-300"]};
  color: ${(props) =>
    props.variant === "done" ? props.theme["white"] : props.theme["gray-700"]};
`;

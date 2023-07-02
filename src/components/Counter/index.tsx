import {
  CounterContent,
  CounterNumber,
  CounterText,
  CounterWrapper,
} from "./styles";

export const Counter = () => {
  return (
    <CounterWrapper>
      <CounterContent>
        <CounterText>Tarefas Criadas</CounterText>
        <CounterNumber>0</CounterNumber>
      </CounterContent>

      <CounterContent>
        <CounterText variant="done">Tarefas Concluídas </CounterText>
        <CounterNumber variant="done">0</CounterNumber>
      </CounterContent>
    </CounterWrapper>
  );
};

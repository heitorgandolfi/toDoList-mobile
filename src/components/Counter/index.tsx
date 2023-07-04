import { useStore } from "effector-react";
import {
  CounterContent,
  CounterNumber,
  CounterText,
  CounterWrapper,
} from "./styles";
import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

export const Counter = () => {
  const { tasks } = useStore(NewTaskStore);

  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <CounterWrapper>
      <CounterContent>
        <CounterText>Tarefas Criadas</CounterText>
        <CounterNumber>{tasks.length}</CounterNumber>
      </CounterContent>

      <CounterContent>
        <CounterText variant="done">Tarefas Concluídas </CounterText>
        <CounterNumber variant="done">{completedTasks.length}</CounterNumber>
      </CounterContent>
    </CounterWrapper>
  );
};

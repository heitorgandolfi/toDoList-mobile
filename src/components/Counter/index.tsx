import { useStore } from "effector-react";
import {
  CounterContent,
  CounterNumber,
  CounterText,
  CounterWrapper,
} from "./styles";
import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";
import i18n from "../../i18n/locales";

export const Counter = () => {
  const { tasks } = useStore(NewTaskStore);

  const completedTasks = tasks.filter((task) => task.isDone);

  return (
    <CounterWrapper>
      <CounterContent>
        <CounterText>{i18n.t("createdTasks")}</CounterText>
        <CounterNumber>{tasks.length}</CounterNumber>
      </CounterContent>

      <CounterContent>
        <CounterText variant="done">{i18n.t("completedTasks")}</CounterText>
        <CounterNumber variant="done">{completedTasks.length}</CounterNumber>
      </CounterContent>
    </CounterWrapper>
  );
};

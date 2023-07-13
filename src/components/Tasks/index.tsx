import { useEffect } from "react";
import { Alert } from "react-native";

import { useStore } from "effector-react";
import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import i18n from "../../i18n/locales";

import GetTasksUseCase from "../../useCases/GetTasksUseCase/GetTasksUseCase";
import DoneTasksUseCase from "../../useCases/DoneTaskUseCase/DoneTaskUseCase";
import RemoveTaskUseCase from "../../useCases/RemoveTaskUseCase/RemoveTaskUseCase";

import { TaskListRender } from "../TaskListRender";

type TasksProps = {
  isDone?: boolean;
};

export const Tasks = ({ isDone = false }: TasksProps) => {
  const { tasks } = useStore(NewTaskStore);

  const toDoTasks = tasks.filter((task) => !task.isDone);
  const doneTasks = tasks.filter((task) => task.isDone);

  useEffect(() => {
    GetTasksUseCase.execute();
  }, []);

  function handleDoneTask(id: string) {
    DoneTasksUseCase.execute(id);
  }

  function handleRemoveTask(id: string) {
    Alert.alert(
      `${i18n.t("removeTaskConfirmationTitle")}`,
      `${i18n.t("removeTaskConfirmationDescription")}`,
      [
        {
          text: `${i18n.t("yes")}`,
          style: "default",
          onPress: () => {
            RemoveTaskUseCase.execute(id);
          },
        },
        {
          text: `${i18n.t("no")}`,
          style: "cancel",
        },
      ]
    );
  }

  return (
    <TaskListRender
      data={isDone ? doneTasks : toDoTasks}
      onPressDone={handleDoneTask}
      onPressDelete={handleRemoveTask}
    />
  );
};

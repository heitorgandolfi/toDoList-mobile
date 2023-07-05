import { useEffect } from "react";

import { useStore } from "effector-react";

import GetTasksUseCase from "../../useCases/GetTasksUseCase/GetTasksUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { TaskListRender } from "../TaskListRender";

import DoneTasksUseCase from "../../useCases/DoneTaskUseCase/DoneTaskUseCase";
import RemoveTaskUseCase from "../../useCases/RemoveTaskUseCase/RemoveTaskUseCase";
import { Alert } from "react-native";
import i18n from "../../i18n/locales";

export const Tasks = () => {
  const { tasks } = useStore(NewTaskStore);

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
      data={tasks}
      onPressDone={handleDoneTask}
      onPressDelete={handleRemoveTask}
    />
  );
};

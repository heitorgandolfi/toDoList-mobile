import { useEffect } from "react";

import { useStore } from "effector-react";

import GetTasksUseCase from "../../useCases/GetTasksUseCase/GetTasksUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { TaskListRender } from "../TaskListRender";

import DoneTasksUseCase from "../../useCases/DoneTaskUseCase/DoneTaskUseCase";
import RemoveTaskUseCase from "../../useCases/RemoveTaskUseCase/RemoveTaskUseCase";
import { Alert } from "react-native";

export const Tasks = () => {
  const { tasks } = useStore(NewTaskStore);

  useEffect(() => {
    GetTasksUseCase.execute();
  }, []);

  function handleDoneTask(id: string) {
    DoneTasksUseCase.execute(id);
  }

  function handleRemoveTask(id: string) {
    Alert.alert("Exclusão de tarefa", "Deseja realmente excluir?", [
      {
        text: "Sim",
        style: "default",
        onPress: () => {
          RemoveTaskUseCase.execute(id);
        },
      },
      {
        text: "Nao",
        style: "cancel",
      },
    ]);
  }

  return (
    <TaskListRender
      data={tasks}
      onPressDone={handleDoneTask}
      onPressDelete={handleRemoveTask}
    />
  );
};

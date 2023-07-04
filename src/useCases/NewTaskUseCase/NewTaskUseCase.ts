import AsyncStorage from "@react-native-async-storage/async-storage";

import uuid from "react-native-uuid";

import { NewTaskParams } from "../../domain/newTask";

import {
  loadNewCreateTaskDone,
  loadNewTask,
} from "../../stores/NewTaskStore/NewTaskEvents";

import { Toast } from "react-native-toast-message/lib/src/Toast";

const execute = async (description: string): Promise<void> => {
  loadNewTask();

  const newTask: NewTaskParams = {
    id: uuid.v4().toString(),
    description,
    isDone: false,
  };

  try {
    const existingTasksString = await AsyncStorage.getItem("@toDoMobile:tasks");

    let existingTasks: NewTaskParams[] = [];

    if (existingTasksString) {
      existingTasks = JSON.parse(existingTasksString);
    }

    const updatedTasks = [newTask, ...existingTasks];

    await AsyncStorage.setItem(
      "@toDoMobile:tasks",
      JSON.stringify(updatedTasks)
    );

    loadNewCreateTaskDone(newTask);

    Toast.show({
      type: "success",
      text1: "Tarefa criada com sucesso!",
    });
  } catch (error) {
    Toast.show({
      type: "error",
      text1: "Ops... Parece que ocorreu um erro!",
    });
  }
};

const NewTaskUseCase = {
  execute,
};

export default NewTaskUseCase;

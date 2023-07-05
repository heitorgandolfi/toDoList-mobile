import AsyncStorage from "@react-native-async-storage/async-storage";

import i18n from "../../i18n/locales";

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
      text1: `${i18n.t("createTaskSuccess")}`,
    });
  } catch (error) {
    Toast.show({
      type: "error",
      text1: `${i18n.t("createTaskFail")}`,
    });
  }
};

const NewTaskUseCase = {
  execute,
};

export default NewTaskUseCase;

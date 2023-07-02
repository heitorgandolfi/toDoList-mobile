import AsyncStorage from "@react-native-async-storage/async-storage";

import uuid from "react-native-uuid";

import { NewTaskParams } from "../domain/NewTask";

import { Toast } from "react-native-toast-message/lib/src/Toast";

export async function newTask(description: string) {
  const newTask: NewTaskParams = {
    id: uuid.v4().toString(),
    description,
    isDone: false,
  };

  try {
    const response = await AsyncStorage.getItem("@toDoMobile: tasks");
    const previousData = response ? JSON.parse(response) : [];

    const data = [...previousData, newTask];

    await AsyncStorage.setItem("@toDoMobile: tasks", JSON.stringify(data));

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
}

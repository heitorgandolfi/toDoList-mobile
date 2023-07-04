import AsyncStorage from "@react-native-async-storage/async-storage";

import { NewTaskParams } from "../../domain/newTask";

import { loadDeleteTaskDone } from "../../stores/NewTaskStore/NewTaskEvents";

const execute = async (id: string): Promise<void> => {
  try {
    const response = await AsyncStorage.getItem("@toDoMobile:tasks");
    const data = response ? JSON.parse(response) : [];

    const task = data.filter((task: NewTaskParams) => task.id !== id);

    await AsyncStorage.setItem("@toDoMobile:tasks", JSON.stringify(task));
    loadDeleteTaskDone(id);
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};

const RemoveTaskUseCase = {
  execute,
};

export default RemoveTaskUseCase;

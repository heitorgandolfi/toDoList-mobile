import AsyncStorage from "@react-native-async-storage/async-storage";

import { NewTaskParams } from "../../domain/newTask";

import { loadNewTaskDone } from "../../stores/NewTaskStore/NewTaskEvents";

const execute = async (id: string): Promise<void> => {
  try {
    const response = await AsyncStorage.getItem("@toDoMobile:tasks"); // Colocar remove sempre que desejar limpar.
    const data = response ? JSON.parse(response) : [];

    const task = data.find((task: NewTaskParams) => task.id === id);

    if (task) {
      task.isDone = !task.isDone;
      console.log(data);

      await AsyncStorage.setItem("@toDoMobile:tasks", JSON.stringify(data));
      loadNewTaskDone(data);
    }
  } catch (error) {
    console.error("Error updating task status:", error);
  }
};

const DoneTasksUseCase = {
  execute,
};

export default DoneTasksUseCase;

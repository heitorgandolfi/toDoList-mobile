import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  loadNewTask,
  loadNewTaskDone,
} from "../../stores/NewTaskStore/NewTaskEvents";

const execute = async (): Promise<void> => {
  //   loadNewTask();

  try {
    const response = await AsyncStorage.getItem("@toDoMobile: tasks"); // Colocar remove sempre que desejar limpar.
    const data = response ? JSON.parse(response) : [];

    loadNewTaskDone(data);
  } catch (error) {
    console.log(error);
  }
};

const GetTasksUseCase = {
  execute,
};

export default GetTasksUseCase;

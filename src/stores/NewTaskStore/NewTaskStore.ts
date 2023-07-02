import { createStore } from "effector";
import { NewTaskState } from "./NewTaskState";
import {
  loadNewCreateTaskDone,
  loadNewTask,
  loadNewTaskDone,
  loadNewTaskFail,
} from "./NewTaskEvents";

const initialState: NewTaskState = {
  isLoading: false,
  tasks: [],
  hasError: false,
  errorMessage: "",
};

const NewTaskStore = createStore<NewTaskState>(initialState)
  .on(loadNewTask, (state) => ({
    ...state,
    isLoading: true,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadNewCreateTaskDone, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: false,
    errorMessage: "",
    tasks: [data, ...state.tasks],
  }))
  .on(loadNewTaskDone, (_, data) => ({
    isLoading: false,
    tasks: data,
    hasError: false,
    errorMessage: "",
  }))
  .on(loadNewTaskFail, (state, data) => ({
    ...state,
    isLoading: false,
    hasError: data.hasError,
    errorMessage: data.message,
  }));

export default NewTaskStore;

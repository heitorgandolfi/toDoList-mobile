import { NewTaskParams } from "../../domain/newTask";

export interface NewTaskState {
  isLoading: boolean;
  tasks: NewTaskParams[];
  hasError: boolean;
  errorMessage: string;
}

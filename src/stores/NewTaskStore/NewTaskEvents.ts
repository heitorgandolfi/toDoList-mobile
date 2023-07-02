import { createEvent } from "effector";

import { RequestError } from "../../domain/request";
import { NewTaskParams } from "../../domain/newTask";

export const loadNewTask = createEvent("loadNewTask");
export const loadNewCreateTaskDone = createEvent<NewTaskParams>(
  "loadNewCreateTaskDone"
);
export const loadNewTaskDone = createEvent<NewTaskParams[]>("loadNewTaskDone");
export const loadNewTaskFail = createEvent<RequestError>("loadNewTaskFail");

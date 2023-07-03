import { useEffect } from "react";

import { TouchableOpacity, View } from "react-native";

import { useStore } from "effector-react";

import GetTasksUseCase from "../../useCases/GetTasksUseCase/GetTasksUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { LogoImage } from "../../screens/Home/styles";

import {
  CheckedCircleIcon,
  CircleOutlineIcon,
  EmptyTaskText,
  EmptyTaskTextWrapper,
  TaskContent,
  TaskText,
  TaskWrapper,
  TrashCanIcon,
} from "./styles";

export const Tasks = () => {
  const { tasks } = useStore(NewTaskStore);

  useEffect(() => {
    GetTasksUseCase.execute();
  }, []);

  function showTasks() {
    if (tasks.length > 0) {
      return tasks.map(({ description, isDone, id }) => (
        <TaskWrapper key={id}>
          <TaskContent>
            <TouchableOpacity>
              {isDone ? (
                <CheckedCircleIcon name="check-circle" />
              ) : (
                <CircleOutlineIcon name="circle-outline" />
              )}
            </TouchableOpacity>

            <TaskText>{description}</TaskText>
          </TaskContent>

          <TouchableOpacity>
            <TrashCanIcon name="trash-can" />
          </TouchableOpacity>
        </TaskWrapper>
      ));
    }

    return (
      <>
        <LogoImage source={require("../../../assets/empty-tasks.png")} />

        <EmptyTaskTextWrapper>
          <EmptyTaskText>Você ainda não tem tarefas cadastradas.</EmptyTaskText>
          <EmptyTaskText>
            Crie tarefas e organize seus itens a fazer.
          </EmptyTaskText>
        </EmptyTaskTextWrapper>
      </>
    );
  }

  // Depois, transformar o View em uma FlatList

  return <View>{showTasks()}</View>;
};

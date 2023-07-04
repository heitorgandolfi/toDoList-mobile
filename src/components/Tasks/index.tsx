import { useEffect } from "react";

import { FlatList, TouchableOpacity } from "react-native";

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
import DoneTasksUseCase from "../../useCases/DoneTaskUseCase/DoneTaskUseCase";

export const Tasks = () => {
  const { tasks } = useStore(NewTaskStore);
  
  useEffect(() => {
    GetTasksUseCase.execute();
  }, []);

  function handleDeleteTask(id: any) {
    DoneTasksUseCase.execute(id);
  }

  return (
    <>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { description, id, isDone } }) => (
            <TaskWrapper key={id}>
              <TaskContent>
                <TouchableOpacity
                  onPress={() => {
                    handleDeleteTask(id);
                  }}
                >
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
          )}
        />
      ) : (
        <>
          <LogoImage source={require("../../../assets/empty-tasks.png")} />

          <EmptyTaskTextWrapper>
            <EmptyTaskText>
              Você ainda não tem tarefas cadastradas.{"\n"}
              Crie tarefas e organize seus itens a fazer.
            </EmptyTaskText>
          </EmptyTaskTextWrapper>
        </>
      )}
    </>
  );
};

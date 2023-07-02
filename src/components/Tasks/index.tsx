import { useState, useEffect } from "react";

import { TouchableOpacity, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { NewTaskParams } from "../../domain/NewTask";

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
  const [data, setData] = useState<NewTaskParams[]>([]);

  async function handleFetchData() {
    const response = await AsyncStorage.getItem("@toDoMobile: tasks"); // Colocar remove sempre que desejar limpar.
    const data = response ? JSON.parse(response) : [];
    setData(data);
  }

  useEffect(() => {
    handleFetchData();
  }, [data]);

  function showTasks() {
    if (data.length > 0) {
      return data.map(({ description, isDone }) => (
        <TaskWrapper key={description}>
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

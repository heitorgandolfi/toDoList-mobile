import { useState } from "react";

import { ActivityIndicator, Alert } from "react-native";

import { useStore } from "effector-react";

import NewTaskUseCase from "../../useCases/NewTaskUseCase/NewTaskUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { ButtonText, FormContainer, Input, InputButton } from "./styles";

export const FormInput = () => {
  const { isLoading } = useStore(NewTaskStore);

  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask() {
    if (taskDescription === "") {
      return Alert.alert(
        "Ops...",
        "Não é possível adicionar tarefas em branco."
      );
    }

    NewTaskUseCase.execute(taskDescription);
    setTaskDescription("");
  }

  return (
    <FormContainer>
      <Input
        value={taskDescription}
        onChangeText={setTaskDescription}
        placeholder="Descreva sua tarefa"
        placeholderTextColor="#707070"
      />
      <InputButton onPress={handleCreateTask} activeOpacity={0.9}>
        <ButtonText>
          {isLoading ? <ActivityIndicator color="#FFF" /> : "Criar"}
        </ButtonText>
      </InputButton>
    </FormContainer>
  );
};

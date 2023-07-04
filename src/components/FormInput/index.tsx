import { useState } from "react";

import { useStore } from "effector-react";

import NewTaskUseCase from "../../useCases/NewTaskUseCase/NewTaskUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { ActivityIndicator } from "react-native";
import { ButtonText, FormContainer, Input, InputButton } from "./styles";

export const FormInput = () => {
  const { isLoading } = useStore(NewTaskStore);
  const [taskDescription, setTaskDescription] = useState("");

  function handleInputChange(inputValue: string) {
    setTaskDescription(inputValue);
  }

  function handleCreateTask() {
    NewTaskUseCase.execute(taskDescription);
    setTaskDescription("");
  }

  return (
    <FormContainer>
      <Input value={taskDescription} onChangeText={handleInputChange} />
      <InputButton onPress={handleCreateTask} activeOpacity={0.9}>
        <ButtonText>
          {isLoading ? <ActivityIndicator color="#FFF" /> : "Criar"}
        </ButtonText>
      </InputButton>
    </FormContainer>
  );
};

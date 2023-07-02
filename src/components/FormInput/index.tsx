import { useEffect, useState } from "react";

import { newTask } from "../../Database";

import { ButtonText, FormContainer, Input, InputButton } from "./styles";

export const FormInput = () => {
  const [taskDescription, setTaskDescription] = useState("");

  function handleInputChange(inputValue: string) {
    setTaskDescription(inputValue);
  }

  function handleCreateTask() {
    newTask(taskDescription);
    setTaskDescription("");
  }

  return (
    <FormContainer>
      <Input value={taskDescription} onChangeText={handleInputChange} />
      <InputButton onPress={handleCreateTask} activeOpacity={0.9}>
        <ButtonText>Criar</ButtonText>
      </InputButton>
    </FormContainer>
  );
};

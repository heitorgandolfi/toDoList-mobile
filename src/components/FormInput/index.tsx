import { useState } from "react";

import { ActivityIndicator, Alert } from "react-native";

import i18n from "../../i18n/locales";

import { useStore } from "effector-react";

import NewTaskUseCase from "../../useCases/NewTaskUseCase/NewTaskUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { ButtonText, FormContainer, Input, InputButton } from "./styles";

export const FormInput = () => {
  const { isLoading } = useStore(NewTaskStore);

  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask() {
    if (taskDescription === "") {
      return Alert.alert(`${i18n.t("invalidTaskDescription")}`);
    }

    NewTaskUseCase.execute(taskDescription);
    setTaskDescription("");
  }

  return (
    <FormContainer>
      <Input
        value={taskDescription}
        onChangeText={setTaskDescription}
        placeholder={i18n.t("placeholderTaskInput")}
        placeholderTextColor="#707070"
      />
      <InputButton onPress={handleCreateTask} activeOpacity={0.9}>
        <ButtonText>
          {isLoading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <>{i18n.t("createTaskButtonText")}</>
          )}
        </ButtonText>
      </InputButton>
    </FormContainer>
  );
};

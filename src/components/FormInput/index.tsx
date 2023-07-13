import { useRef, useState } from "react";

import { ActivityIndicator, Alert, Keyboard } from "react-native";

import i18n from "../../i18n/locales";

import { useStore } from "effector-react";

import NewTaskUseCase from "../../useCases/NewTaskUseCase/NewTaskUseCase";

import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";

import { ButtonText, FormContainer, Input, InputButton } from "./styles";
import { defaultTheme } from "../../styles/defaultTheme";

export const FormInput = () => {
  const { isLoading } = useStore(NewTaskStore);

  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask() {
    if (taskDescription === "") {
      return Alert.alert(`${i18n.t("invalidTaskDescription")}`);
    }

    NewTaskUseCase.execute(taskDescription);

    Keyboard.dismiss();
    setTaskDescription("");
  }

  return (
    <FormContainer>
      <Input
        value={taskDescription}
        onChangeText={setTaskDescription}
        placeholder={i18n.t("placeholderTaskInput")}
        placeholderTextColor={defaultTheme["gray-450"]}
        onSubmitEditing={handleCreateTask}
      />
      <InputButton onPress={handleCreateTask} activeOpacity={0.9}>
        <ButtonText>
          {isLoading ? (
            <ActivityIndicator color={defaultTheme["white"]} />
          ) : (
            <>{i18n.t("createTaskButtonText")}</>
          )}
        </ButtonText>
      </InputButton>
    </FormContainer>
  );
};

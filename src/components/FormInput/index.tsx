import { useState } from "react";

import { ActivityIndicator, Keyboard } from "react-native";

import { useStore } from "effector-react";
import { Toast } from "react-native-toast-message/lib/src/Toast";

import NewTaskUseCase from "../../useCases/NewTaskUseCase/NewTaskUseCase";
import NewTaskStore from "../../stores/NewTaskStore/NewTaskStore";
import i18n from "../../i18n/locales";
import { defaultTheme } from "../../styles/defaultTheme";

import { ButtonText, FormContainer, Input, InputButton } from "./styles";

export const FormInput = () => {
  const { isLoading } = useStore(NewTaskStore);

  const [taskDescription, setTaskDescription] = useState("");

  function handleCreateTask() {
    if (taskDescription === "") {
      return Toast.show({
        type: "error",
        text1: `${i18n.t("invalidTaskDescription")}`,
      });
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
        onSubmitEditing={handleCreateTask}
        returnKeyType="send"
        placeholder={i18n.t("placeholderTaskInput")}
        placeholderTextColor={defaultTheme["gray-450"]}
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

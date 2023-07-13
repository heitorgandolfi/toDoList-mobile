import { Tasks } from "../../components/Tasks";

import { AppContainer, LogoImage } from "./styles";

export const DoneTasks = () => {
  return (
    <AppContainer>
      <LogoImage source={require("../../../assets/todo-log.png")} />

      <Tasks isDone />
    </AppContainer>
  );
};

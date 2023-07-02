import { AppContainer, LogoImage } from "./styles";

import { FormInput } from "../../components/FormInput";
import { Counter } from "../../components/Counter";
import { Tasks } from "../../components/Tasks";

export const Home = () => {
  return (
    <AppContainer>
      <LogoImage source={require("../../../assets/todo-log.png")} />

      <FormInput />
      <Counter />

      <Tasks />
    </AppContainer>
  );
};

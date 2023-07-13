import { AppContainer, LogoImage } from "./styles";

import { Counter } from "../../components/Counter";
import { FormInput } from "../../components/FormInput";
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

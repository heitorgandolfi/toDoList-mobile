import { NavigationContainer } from "@react-navigation/native";
import { TabsRoutes } from "./tabs.routes";

export const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <TabsRoutes />
      </NavigationContainer>
    </>
  );
};

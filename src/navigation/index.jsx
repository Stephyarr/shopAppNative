import { NavigationContainer } from "@react-navigation/native";

import ShopNavigator from "./ShopNavigator";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

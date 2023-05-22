import { NavigationContainer } from "@react-navigation/native";

import ShopNavigation from "./ShopNavigation";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <ShopNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;

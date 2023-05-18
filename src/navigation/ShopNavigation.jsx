import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, ProductDetail, Products } from "../screens";

const ShopNaviation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ShopNaviation;

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Categories, ProductDetail, Products } from "../screens";

const ShopNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerShown: false,
          title: "Categoria",
        }}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          title: "Product",
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: "Product Detail",
        }}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigator;

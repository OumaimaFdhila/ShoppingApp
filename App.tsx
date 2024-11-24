import { NavigationContainer } from "@react-navigation/native";
import ProductDetailsScreen from "./src/screens/productDetaisScreen";
import ProductsScreenHome from "./src/screens/productScreenHome";
import ShoppingCart from "./src/screens/ShoppingCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Products">
        <Stack.Screen name="Products" component={ProductsScreenHome} options={{ headerShown: false }}/>
        <Stack.Screen name="Product Details" component={ProductDetailsScreen}  options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={ShoppingCart}  options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

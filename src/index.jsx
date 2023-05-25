import { useFonts } from "expo-font";
import { View } from "react-native";

// import { Categories } from "./screens";
import AppNavigation from "./navigation";
import { styles } from "./styles";

const App = () => {
  const [loaded] = useFonts({
    "DMSans-Bold.ttf": require("../assets/fonts/DMSans-Bold.ttf"),
    "DMSans-BoldItalic": require("../assets/fonts/DMSans-BoldItalic.ttf"),
    "DMSans-Italic": require("../assets/fonts/DMSans-Italic.ttf"),
    "DMSans-Medium": require("../assets/fonts/DMSans-Medium.ttf"),
    "DMSans-MediumItalic": require("../assets/fonts/DMSans-MediumItalic.ttf"),
    "DMSans-Regular": require("../assets/fonts/DMSans-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

export default App;

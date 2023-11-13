import { StatusBar } from 'react-native';
import {useFonts, Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold} from '@expo-google-fonts/poppins';
import {ThemeProvider} from "styled-components";
import theme from "./src/theme";
import {Register} from "./src/screens/Register";
import {Loading} from "./src/components/Loading";


export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  })

  return (
   <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
     {fontsLoaded ? <Register/> : <Loading />}
   </ThemeProvider>
  );
}


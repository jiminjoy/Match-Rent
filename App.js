import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState, Component} from 'react';
import { StyleSheet, Text, Platform, StatusBar, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
//import {SwitchNavigator} from 'react-navigation';

// // import the different screens
// import Loading from './screens/Loading';
// import SignUp from './screens/Signup';
// import Login from './screens/Login';
//import HomeScreen from './screens/HomeScreen';

// type Props = {};
// export default class App extends Component<Props>{
//   // constructor(props){
//   //   super(props);
//   //   this.state = {
//   //    rents: Rent
//   //   };
//   // }
//   render() {
//     const App = SwitchNavigator (
//       {
//         Loading,
//         SignUp,
//         Login,
//         HomeScreen
//       },
//       {
//         initialRouteName: 'Loading'
//       }
//     )
//     return (
//       <View style = {StyleSheet.container}>
//         <Text style = {StyleSheet.Login}> Login to my App </Text>
//       </View>
//     )
//   }
//   // return <Ap
// };
// export default App(props) {

// // }


export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

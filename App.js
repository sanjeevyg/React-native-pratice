// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello world!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { Component } from 'react';
import AppNavigator from './app/app.navigator';
import { Provider } from 'mobx-react';
import stores from './app/stores';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider stores={stores}>
        <AppNavigator/>
      </Provider>
    );
  }
}


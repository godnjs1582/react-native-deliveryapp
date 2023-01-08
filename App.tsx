import * as React from 'react';
import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Text, TouchableHighlight, View, Pressable, StyleSheet } from 'react-native';
import { useCallback } from 'react';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};
type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function HomeScreen({ navigation }: HomeScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Details');
  }, [navigation]);

  return (
    <>
      <View style={{ flex: 1, backgroundColor: "blue", alignItems: 'flex-end', justifyContent: 'center' }}>
        <TouchableHighlight onPress={onClick}>
          <Text>Home Screen</Text>
        </TouchableHighlight>
      </View>
      <View style={{ flex: 1, backgroundColor: "pink", alignItems: 'center', justifyContent: 'center' }}>
        <TouchableHighlight onPress={onClick}>
          <Text>Home Screen2</Text>
        </TouchableHighlight>
      </View>
    </>

  );
}

function DetailsScreen({ navigation }: DetailsScreenProps) {
  const onClick = useCallback(() => {
    navigation.navigate('Home');
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center' }}>
      <Pressable onPress={onClick} >
        <Text>Details Screen</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈화면', headerShown: false }}
        />
        <Stack.Screen name="Details">
          {props => <DetailsScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
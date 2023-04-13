import React, {useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const CurrentRouteName = () => {
  const routeNameRef = useRef();
  let navigationRef = useRef();
  console.log("navigationRef",navigationRef);
  return (
    <NavigationContainer
      ref={navigationRef}      
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
        console.log("routeNameRef.current",routeNameRef.current);
      }}
      onStateChange={async() => {
        const currentRouteName = navigationRef.current.getCurrentRoute().name;
        console.log("currentRouteName",currentRouteName);
      }}
    >
      <StackNavigator />
    </NavigationContainer>
  );
}

export default CurrentRouteName;

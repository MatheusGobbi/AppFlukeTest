import 'react-native-gesture-handler';
import React, {useState, useMemo} from 'react';
import FlashMessage from 'react-native-flash-message';

import {NavigationContainer} from '@react-navigation/native';

import PrincipalNavigator from './src/routes/principalNavigator';
import TutorialNavigator from './src/routes/tutorialNavigator';
import LoginNavigator from './src/routes/loginNavigator';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Non-serializable values were found']);

export default function App() {
  const [login, setLogin] = useState(false);
  const [tutorial, setTutorial] = useState(false);

  const navigatorAtual = useMemo(() => {
    if (!login) {
      return <LoginNavigator setLogin={setLogin} />;
    } else if (!tutorial) {
      return <TutorialNavigator setTutorial={setTutorial} />;
    } else {
      return <PrincipalNavigator />;
    }
  }, [login, tutorial]);

  return (
    <React.Fragment>
      <NavigationContainer>{navigatorAtual}</NavigationContainer>
      <FlashMessage position="top" />
    </React.Fragment>
  );
}

/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { RecoilRoot } from 'recoil'
import App from './App';
import { name as appName } from './app.json';

const Application = () => {
    return (
        <React.Suspense fallback={<View><Text>Loading</Text></View>}>
            <RecoilRoot>
                <App />
            </RecoilRoot>
        </React.Suspense>
    )
}

AppRegistry.registerComponent(appName, () => Application);

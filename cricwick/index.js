/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import {persistor, store} from "./src/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

const AppRedux = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppRedux);

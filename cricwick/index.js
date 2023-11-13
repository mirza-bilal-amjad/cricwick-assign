/* eslint-disable */
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {persistor, store} from "./src/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import 'react-native-gesture-handler';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./src/dev";

const AppRedux = () => (<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
            <App/>
        </DevSupport>
    </PersistGate>
</Provider>)

AppRegistry.registerComponent(appName, () => AppRedux);

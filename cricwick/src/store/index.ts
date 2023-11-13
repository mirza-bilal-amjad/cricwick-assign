import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {
    persistReducer,
    persistStore,
} from 'redux-persist';


import theme from './theme';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {carouselReducer} from "./FBCarouselReducer";
import {toggleReducer} from "./toggleReducer";
import {cricwickHomePageReducer} from "./crickwickHome";
const reducers = combineReducers({
    theme,
    carouselReducer,
    toggleReducer,
    cricwickReducer: cricwickHomePageReducer,
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['carouselReducer', 'toggleReducer', 'cricwickReducer'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false
        })
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export {store, persistor};

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

// Importation des reducers
import authSlice from "../slices/authSlice";
import LayoutsReducer from './features/layout';
import TodosReducer from './features/todos';
import CardsReducer from './features/cards';
import MessengerReducer from './features/messenger';

// Configuration de redux-persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth", "layout", "todos", "cards", "messenger"], // Reducers que l'on veut persister
};

// Combiner tous les reducers
const rootReducer = combineReducers({
  auth: authSlice,
  layout: LayoutsReducer,
  todos: TodosReducer,
  cards: CardsReducer,
  messenger: MessengerReducer,
});

// Appliquer redux-persist sur le rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configurer le store avec redux-persist
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Création du persistor pour recharger les données stockées
export let persistor = persistStore(store);

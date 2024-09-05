import { configureStore } from "@reduxjs/toolkit";
import ConfigureStoreReducers from "../configureReducercompents/Configurereducer";
const store=configureStore({
    reducer:ConfigureStoreReducers
})
export default store;
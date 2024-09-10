 import LoginReducer from '../Reducers/Login_Reducers';
 import Socket_Reducer from '../Reducers/socket_reducer';

 
 const ConfigureStoreReducers={
    login:LoginReducer,
    socket:Socket_Reducer
}

export default ConfigureStoreReducers;
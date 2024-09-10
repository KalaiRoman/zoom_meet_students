import { useEffect,useState } from 'react';
import './App.scss';
import Routing from './routing/Routing';
import { io } from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { addSocket } from './redux/Reducers/socket_reducer';



function App() {


  const dispatch=useDispatch();

  const socketConnection = io('http://localhost:8004',{
    transports: ['websocket'], 
    withCredentials: true,  
  }); 

  console.log(socketConnection,'socketConnection')

  const [socket, setSocket] = useState(null);

  useEffect(() => {
   

    setSocket(socketConnection);

    socketConnection.on('connect', () => {
      console.log('Connected with Socket ID:', socketConnection.id); 
    });

   
    socketConnection.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    dispatch(addSocket(socketConnection))

    return () => {
      socketConnection.disconnect();
      console.log('Socket disconnected on component unmount');
    };

  }, []); 
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

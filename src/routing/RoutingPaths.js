import { Home, JoinMeeting, Login, Profile, Sessions } from "../pages/Pages";

const RoutingPaths=[
    {
        id:1,
        name:"",
        component:<Login/>,
        exact:false,
        path:"/",
        class:true
    },
    {
        id:3,
        name:"Dashboard",
        component:<Home/>,
        exact:true,
        path:"/dashboard",
        class:true
    },
    {
        id:4,
        name:"Join Meeting",
        component:<JoinMeeting/>,
        exact:true,
        path:"/join",
        class:false
    },
    {
        id:4,
        name:"Sessions",
        component:<Sessions/>,
        exact:true,
        path:"/sessions",
        class:true
    },
    {
        id:2,
        name:"",
        component:<Profile/>,
        exact:false,
        path:"/profile",
        class:true  
    },
    
];
export default RoutingPaths;
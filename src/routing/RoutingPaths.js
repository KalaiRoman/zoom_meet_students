import { Home, Login, Profile, Sessions } from "../pages/Pages";

const RoutingPaths=[
    {
        id:1,
        name:"Login",
        component:<Login/>,
        exact:false,
        path:"/login",
    },
    {
        id:2,
        name:"Profile",
        component:<Profile/>,
        exact:false,
        path:"/profile",
    },
    {
        id:3,
        name:"Dashboard",
        component:<Home/>,
        exact:true,
        path:"/",
    },
    {
        id:4,
        name:"Sessions",
        component:<Sessions/>,
        exact:true,
        path:"/sessions",
    },
    
];
export default RoutingPaths;
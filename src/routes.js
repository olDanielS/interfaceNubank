import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Money from "./pages/Money";
import Store from "./pages/Store";
import Home from "./pages/Home";

import CustonTabBar from "./Components/CustonTabBar";

export default function Routes(){
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',
        

                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: '#FFF'
                }
            }}
            tabBar={(props) => <CustonTabBar {...props}/>}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon: "compare-arrows"
                }}
            />
            <Tab.Screen name="Money" component={Money}
                options={{
                    tabBarIcon: "attach-money"
                }}
            />
            <Tab.Screen name="Store" component={Store}
                options={{
                    tabBarIcon: "storefront"
                }}
            />
        </Tab.Navigator>
    )
}
import {Tabs} from 'expo-router';
import { Text, Image, StyleSheet, View } from 'react-native';
import { icons } from '@/constants/icons';
import '../global.css'
const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
      return (
        <View className="flex-row items-center justify-center">
          <Image
            source={icon}
            style={{ tintColor: '#3B3A60', width: 20, height: 20 }} // deep midnight
          />
          <Text className="text-[#3B3A60] text-base font-semibold ml-2">{title}</Text>
        </View>
      );
    }
  
    return (
      <View className="justify-center items-center mt-3 rounded-full">
        <Image
          source={icon}
          style={{ tintColor: '#A8B5DB', width: 20, height: 20 }} // muted bluish-lavender
        />
      </View>
    );
  };
  
 const _layout =  () => { 
    return( 
     <Tabs 
     screenOptions={{
        tabBarShowLabel : false,
        tabBarItemStyle : {
            width : '100%',
            height : '100%',
            justifyContent : 'center',
            alignItems : 'center'
        },
        tabBarStyle: {
            backgroundColor: '#EAE6FA', // pastel lavender
            borderRadius: 30,
            marginHorizontal: 20,
            marginBottom: 40,
            height: 70,
            position: 'absolute',
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 10,
            elevation: 10,
            borderWidth: 1,
            borderColor: '#C8C6E5', // soft purple-gray border
          },
          
    }}>
        <Tabs.Screen
        name = "index"
        options={{
            title : 'Home',
            headerShown : false,
           tabBarIcon : ({focused}) => (
             <TabIcon
             focused = {focused}
             icon = {icons.home}
             title = "Home"/>    
           )
        }}/>

        <Tabs.Screen
        name = "moods"
        options={{
            title : "Moods",
            headerShown : false,
            tabBarIcon : ({focused}) => (
               <TabIcon
               focused =  {focused}
               icon = {icons.moods}
               title = "Moods"
               />
            )
        }}/>

        <Tabs.Screen
        name = "info"
        options={{
            title : "Info",
            headerShown : false,
            tabBarIcon : ({focused}) => (
                <TabIcon 
                focused = {focused}
                icon = {icons.info}
                title = "Info" />
            )
        }}/>

       
    </Tabs>
    );
};


export default _layout;

const styles = StyleSheet.create({})


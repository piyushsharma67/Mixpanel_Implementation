import React from 'react'
import {Text,View,Dimensions,TouchableOpacity} from 'react-native'
const {width,height}=Dimensions.get("window")
import { Mixpanel } from 'mixpanel-react-native';

function HomeScreen({navigation}) {

  console.log(navigation)
  const mixpanel = new Mixpanel("Your Mixpanel Auth token");
  mixpanel.init();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent:'space-evenly' ,flexDirection:'row',width:width,}}>
        <TouchableOpacity style={{borderWidth:0.5}} onPress={()=>
          {
            mixpanel.track('Plan Selected', {'Plan': 'Normal'})
            navigation.navigate("Home2")
            }}>
          <Text style={{color:'black'}}>Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{borderWidth:0.5}} onPress={()=>{
          mixpanel.track('Plan Selected', {'Plan': 'Premium'})
          navigation.navigate("Home3")
          }}>
          <Text style={{color:'black'}}>Premium</Text>
        </TouchableOpacity>
      </View>
    );
}

export default HomeScreen
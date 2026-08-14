import { Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={{ flex:1, backgroundColor: 'blue'}}>

    <View style={{ flex:11, backgroundColor:'red',alignItems: 'center',justifyContent: 'center'}}>

    <Text style={{fontSize: 32,fontWeight: 'bold', marginTop: 10,}}>UM aplicativo Sinistro</Text>
    </View>

    <View style={{ flex:10, backgroundColor: 'gray'}}/>

     <View style={{ flex:64, backgroundColor: 'green'}}>
     <Image source={{uri:''}}
     style={{
       width:500,
       height:560
     }}/>
     </View>

     <View style={{ flex:8, backgroundColor: 'yellow'}} />

    </View>
    
  );
}

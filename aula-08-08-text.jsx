import { Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={{ flex:1, backgroundColor: '#838C61'}}>

    <View style={{ flex:11, backgroundColor:'#838C61',alignItems: 'center',justifyContent: 'center'}}>

    <Text style={{fontSize: 23,fontWeight: 'bold', marginTop: 10,color:"#D9C8B4",textAlign:'center'}}>Fazenda de contole de cogumelos</Text>
    </View>
 <Text style={{fontSize: 20,fontWeight: 'bold', marginTop: 10,color:"#D9C8B4",textAlign:'center'}}>Criação certificada de cogumelos</Text>

    <View style={{ flex:10, backgroundColor: '#838C61'}}/>

     <View style={{ flex:64, backgroundColor: '#838C61',alignItems:'center'}}>
     <Image source={require('./logo.png')}
     style={{
       width:340,
       height:350
     }}/>
     </View>

     <View style={{ flex:8, backgroundColor: '#838C61'}} />
     <Text style={{fontSize: 15,fontWeight: 'bold', marginTop: 10,color:"#D9C8B4"}}>V1.67-Pedro Henrique Santos</Text>

    </View>
    
  );
}

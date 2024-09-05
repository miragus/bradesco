import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} source={{ uri: 'https://companieslogo.com/img/orig/BBD_BIG.D-cfcf4865.png?t=1720244490' }} />

      <Text style={styles.h1}>Que bom ter você aqui!</Text>


      <View style={styles.paragrafos}>
       <TextInput style={styles.p}>Agência sem digito</TextInput>
        <Text style={styles.p}>Conta com dígito</Text>
      </View>





      <LinearGradient
        colors={['#C51F69', 'transparent']}
        style={styles.background}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E92354',
  },
  logo: {
    width: 126,
    height: 28,
    zIndex: 1,
    right: 110,
    bottom: 210
  },
  h1: {
    right: 72,
    bottom: 180,
    fontWeight: 'bold',
    zIndex: 1,
    color: '#FFFFFF',
    fontSize: 20,
  },
  paragrafos: {
    zIndex: 1,
    width: 300,
    justifyContent: 'space-between',
    flexDirection: 'row',
    bottom:50,
    
  },

  p: {
    color: '#FFFFFF',
    zIndex: 1,
    fontSize: 14,
    fontWeight: 'bold',
   borderBottomWidth:1,
    borderColor: '#FFFFFF'
    // borderWidth:1

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 800,
    transform: [{ scaleY: -1 }]
  },


});

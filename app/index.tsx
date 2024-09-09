import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';


export default function App() {

  const click = () => {

  }

  return (
    <SafeAreaView style={styles.container}>

      <Image style={styles.logo} source={{ uri: 'https://companieslogo.com/img/orig/BBD_BIG.D-cfcf4865.png?t=1720244490' }} />

      <Text style={styles.h1}>Que bom ter você aqui!</Text>


      <View style={styles.paragrafos}>
        <TextInput style={styles.p}>Agência sem dígito</TextInput>
        <TextInput style={styles.p}>Conta com dígito</TextInput>
      </View>


      <View style={styles.miniContainer}>
        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#FFFFFF' : 'transparent',

          },
          styles.btn,
        ]}>
          <Text style={styles.btnText}>1° Titular</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#FFFFFF' : 'transparent',

          },
          styles.btn,
        ]}>
          <Text style={styles.btnText}>2° Titular</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [
          {
            backgroundColor: pressed ? '#FFFFFF' : 'transparent',

          },
          styles.btn,
        ]}>
          <Text style={styles.btnText}>3° Titular</Text>
        </Pressable>
      </View>

      <View>
        <Text style={{
          color: '#FFFFFF',
          zIndex: 1,
          fontSize: 14,
          fontWeight: 'bold',
          borderColor: '#FFFFFF',
          right: 80,
          bottom: 50
        }}>Lembrar agência e conta</Text>
      </View>

      
      <Link href='about' asChild>
        <Pressable style={styles.loginButton}>
          <Text style={{ color: '#C51F69', fontWeight: 'bold' }}>Entrar</Text>
        </Pressable>
      </Link>


      <Pressable style={{ zIndex: 1 }}>
        <Text style={{ color: '#FFFFFF', fontWeight: 'bold', borderBottomWidth: 1, borderBottomColor: '#FFFFFF' }}>não tem conta? abra agora</Text>
      </Pressable>


      <LinearGradient
        colors={['#C51F69', 'transparent']}
        style={styles.background}
      />
    </SafeAreaView>
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
    bottom: 120,

  },

  p: {
    color: '#FFFFFF',
    zIndex: 1,
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: '#FFFFFF'
    // borderWidth:1

  },
  miniContainer: {
    zIndex: 1,
    width: 330,
    flexDirection: 'row',
    justifyContent: 'space-between',
    bottom: 80

  },
  btn: {
    width: 95,
    height: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    borderWidth: 1,
    borderColor: '#FFFFFF'
  },
  btnText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  },
  loginButton: {
    zIndex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20
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

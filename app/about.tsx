import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {



    return (
        <SafeAreaView style={styles.container}>


            <View>
                <View style={styles.header}>
                    <Text style={styles.brads}>bradesco</Text>
                </View>


                <View style={styles.inicio}>

                    <Image style={styles.userIcon} source={{ uri: 'https://pazevida.org.br/wp-content/uploads/2022/01/User_icon_white.png' }} />

                    <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Olá, Gustavo o foda</Text>

                    <Image style={styles.logoutIcon} source={{ uri: 'https://www.iconsdb.com/icons/preview/white/account-logout-xxl.png' }} />

                </View>

                <View style={{ top: 35 }}>
                    <Text style={styles.meuSaldoTxt}>Meu saldo disponível</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{
                            zIndex: 1,
                            color: '#FFFFFF',
                            fontWeight: 'bold',
                            letterSpacing: 0.5,
                            lineHeight: 25
                        }}>R$ 1.000.000.000,00</Text>
                        <Image style={styles.eyeIcon} source={{ uri: 'https://www.iconsdb.com/icons/preview/white/eye-3-xxl.png' }} />
                    </View>

                    <Text style={styles.extratoTxt}>Ver extrato ▶</Text>
                </View>
                <LinearGradient
                    colors={['#C51F69', 'transparent']}
                    style={styles.background}
                />
            </View>


            <View style={styles.container2}>

            </View>





        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F31D5A',
    },
    header: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',

    },

    brads: {
        zIndex: 1,
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    inicio: {
        marginTop: 25,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        width: 320,
        flexDirection: 'row'
    },

    userIcon: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    logoutIcon: {
        width: 20,
        height: 20,
        left: 150
    },
    conta: {
        top: 35,
    },
    meuSaldoTxt: {
        zIndex: 1,

        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        lineHeight: 25,
        fontSize: 13
    },
    extratoTxt: {
        zIndex: 1,
        color: '#FFFFFF',
        fontWeight: 'bold',
        letterSpacing: 0.5,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        width: 95,
        left: 225,
        bottom: 35,
        fontSize: 13
    },
    eyeIcon: {
        width: 20,
        height: 20,
        top: 3,
        left: 9
    },
    background: {
        position: 'absolute',
        left: -50,
        top: '80%',
        width: 800,
        height: 100,
        transform: [{ scaleY: -1 }]
    },
    container2: {
        marginTop: 50,
        backgroundColor: '#EFF1F5',
        width: '100%',
        height: '100%'
    },



});
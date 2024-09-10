import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { cloneElement } from 'react';



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

                <View style={styles.search}>
                    <TextInput style={styles.talkTo}
                        placeholder='        Fale com o'
                    />

                    <Text style={styles.inputText}>Gusta</Text>

                    <Image style={styles.lupaIcon} source={require('../assets/lupa.png')} />


                    <View style={styles.iconMic}>

                        <LinearGradient
                            colors={['#C51F69', 'transparent']}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 8,
                                transform: [{ scaleY: -1 }]
                            }}
                        />

                        <Image style={{
                            bottom: 31,
                            left: 16,
                            width: 21,
                            height: 21
                        }} source={require('../assets/microphone.png')} />

                    </View>
                </View>

                <View style={styles.MbOf}>

                    <View style={styles.myBank}>

                        <Image style={{
                            width: 22,
                            height: 22,
                            zIndex: 1
                        }}
                            source={require('../assets/bank.png')}
                        />

                        <LinearGradient
                            colors={['#C51F69', 'transparent']}
                            style={styles.gradientMbOf}
                        />

                    </View>

                    <Text style={styles.MbOfTxt}>Meus Bancos</Text>

                    <View style={styles.openFinance}>

                        <Image style={{
                            width: 20,
                            height: 21,
                            zIndex: 1
                        }}
                            source={{ uri: 'https://dashboard.openfinancebrasil.org.br/icon.png' }}
                        />

                        <LinearGradient
                            colors={['#C51F69', 'transparent']}
                            style={styles.gradientMbOf}
                        />

                    </View>

                    <Text style={styles.MbOfTxt}>Open Finance</Text>
                </View>


                <View style={{
                    borderWidth: 1,
                    width: '100%',
                    height: 'auto',
                    gap: 15,
                    justifyContent:'center',
                    flexDirection:'column'
                }}>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: 50,
                    width: 50
                }}>

                </View>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: 50,
                    width: 50
                }}>

                </View>

                <View style={{
                    backgroundColor: '#FFFFFF',
                    height: 50,
                    width: 50
                }}>

                </View>

            </View>




        </View>





        </SafeAreaView >
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
        height: '100%',
        alignItems: 'center'
    },
    talkTo: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        borderRadius: 8,
        width: '100%',
        height: '100%'
    },
    search: {
        width: '85%',
        height: 40,
        flexDirection: 'row',
        bottom: 15,
    },
    inputText: {
        zIndex: 1,
        right: 230,
        top: 9,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#D31C65'
    },
    lupaIcon: {
        zIndex: 1,
        right: 120,
        top: 9,
        width: 22,
        height: 22
    },
    iconMic: {
        width: 46,
        height: '100%',
        right: 110,
        borderRadius: 8,
        backgroundColor: '#F31D5A'
    },
    MbOf: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between'
    },
    myBank: {
        zIndex: 3,
        width: 45,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F31D5A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    openFinance: {
        zIndex: 3,
        width: 45,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#F31D5A',
        alignItems: 'center',
        justifyContent: 'center'

    },
    gradientMbOf: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 8,
        transform: [{ scaleY: -1 }]
    },
    MbOfTxt: {
        right: 16
    }



});
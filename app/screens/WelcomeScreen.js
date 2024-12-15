import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

import Button from '../components/Button';

function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
            blurRadius={10}
            source={require("../assets/background.jpg")}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Login" color="primary" onPress={() => navigation.navigate("Login")} />
                <Button title="Register" color="secondary" onPress={() => navigation.navigate("Register")} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 8
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
})

export default WelcomeScreen;
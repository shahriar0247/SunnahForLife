import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './pages/home/Home';
import Head from './components/head/Head';
import Search from './components/search/Search';

export default function Sunnah_for_life() {
    return (
        <View style={styles.background}>
            <Head></Head>
            <Search></Search>
            <Home></Home>

        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#E9E6DF",
        height:"100vh"
    }
})
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Big_button({ text }) {
    return (
        <View style={styles.big_button_view}>
            <Text style={styles.big_button_text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    big_button_view: {
        backgroundColor: "#F9F7F3",
        width: "80%",
        height: 80,
        margin: "auto",
        borderRadius: 15,
    },
    big_button_text: {
        color: "#81A7AA",
        margin: "auto",
        fontSize: 20
    }
})
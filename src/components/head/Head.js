import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Head() {
    return (
        <View>
            <View style={styles.head_top_bar}></View>
            <View style={styles.head_top_bar2}>
                <Text style={styles.head_top_bar2_text}>Sunnah For Life</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head_top_bar: {
        backgroundColor: "#90B8B8",
        width: "100%",
        height: 20
    },
    head_top_bar2: {
        backgroundColor: "#77A8A9",
        width: "100%",
        height: 100,
    },
    head_top_bar2_text: {
        color: "white",
        fontSize: 30,
        fontWeight: "500",
        margin: "auto",
        marginLeft: 40
    }
})
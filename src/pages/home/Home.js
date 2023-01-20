import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Big_button from '../../components/button/Big_button'

export default function Home() {
    useEffect(() => {
        get_collections(set_collections)
    }, []);
    const [collections, set_collections] = useState([])
    return (
        <View style={styles.home_view}>
            {collections}
        </View>
    )
}

function get_collections(set_collections) {
    fetch("http://localhost:5000/v1/collections")
        .then((response) => response.json())
        .then((data) => {

            const elements = data['data'].map((collection) => {
                return <Big_button text={collection['name']}></Big_button>

            }
            );
            set_collections(elements)
        });


}

const styles = StyleSheet.create({
    home_view: {
        marginTop: 30
    }
})
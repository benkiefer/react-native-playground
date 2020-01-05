import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'

export default class App extends Component {
    state = {
        backgroundColor: 'skyblue'
    }

    render() {
        const color = this.state.backgroundColor;

        const styles = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            box: {
                width: 200,
                height: 200,
                backgroundColor: color,
                borderWidth: 2,
                borderColor: 'steelblue',
                borderRadius: 20,
            },
        });

        return (
            <View style={styles.container}>
                <TouchableHighlight testID="colorButton" onPress={() => {
                    this.setState({
                        backgroundColor: 'purple'
                    });
                }}>
                    <View testID="colorBox" style={styles.box} />
                </TouchableHighlight>
            </View>
        )
    }
}

import React, { Component } from 'react'
import { View, FlatList, Text, ActivityIndicator } from 'react-native'
import axios from 'axios';

export default class App extends Component {
    state = {
        isLoading: true,
        dataSource: []
    };

    componentDidMount() {
        return axios.get("https://swdestinydb.com/api/public/sets").then((response) => {
            return response.data
        }).then((sets) => {
            this.setState({
                isLoading: false,
                dataSource: sets
            });
        }).catch((e) => {
            console.error(e);
        })
    }

    render() {
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 60}}>
                    <ActivityIndicator/>
                </View>
            )
        }

        return(
            <View style={{flex: 1, paddingTop:60}}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => (
                        <View style={{flex: 1, paddingTop:10, paddingBottom: 10}}>
                            <Text testID={item.code} style={{fontWeight: 'bold', fontSize: 18}}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.code}
                />
            </View>
        );
    }
}

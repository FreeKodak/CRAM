import React from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";
import { SearchBar } from 'react-native-elements';
import BottomBar from "../components/BottomBar";

export default class MapScreen extends React.Component {

    state = {
        userLocation: null,
        show: true,
        search: '',
    }

    updateSearch = search => {
        this.setState({ search });
    };

    getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0102,
                    longitudeDelta: 0.0091
                },
                show: false,
            })
        }, err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to CRAM!</Text>
                <View style={styles.hider}>
                    {
                        this.state.show ? <FetchLocation onGetLocation={this.getUserLocationHandler} /> : <View style={styles.sbar}>
                            <SearchBar
                                placeholder="Type Here..."
                                platform="ios"
                                onChangeText={this.updateSearch}
                                value={this.state.search}
                            />
                        </View>
                    }
                </View>
                <UsersMap userLocation={this.state.userLocation} />
                <BottomBar />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 28,
    },
    hider: {

    },
    sbar: {
        backgroundColor: '#fff',
        alignItems: 'center',
        margin: 4,
    }
});

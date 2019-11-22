import React from "react";
import { Image, Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from 'react-native-elements';
import FetchLocation from "../components/FetchLocation";
import UsersMap from "../components/UsersMap";


export default class MapScreen extends React.Component {

    state = {
        userLocation: null
    }

    getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
            this.setState({
                userLocation: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0522,
                    longitudeDelta: 0.0421
                }
            })
        }, err => console.log(err));
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to CRAM!</Text>
                <FetchLocation onGetLocation={this.getUserLocationHandler} />
                <UsersMap userLocation={this.state.userLocation} />
                <Button>Helo</Button>
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
    }
});



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff'
//     },
//     map: {
//         top: 0,
//         left: 0,
//         right: 0,
//         bottom: 0,
//         position: 'absolute'
//     }
// });


// -- body of component -----------------------------------------------------------------
    // state = {
        //     email: "",
        //     password: ""
        // };

        // handleEmail = text => {
        //     this.setState({ email: text });
        // };

        // handlePassword = text => {
        //     this.setState({ password: text });
        // };



        // login = (email, pass) => {
        //     alert("email: " + email + " password: " + pass);
        //     const { navigate } = this.props.navigation;

        //     navigate("Map");
        // };

        // render() {
        //     return (
        //         <View style={styles.container}>
        //             <TextInput
        //                 style={styles.input}
        //                 placeholder="   Email"
        //                 placeholderTextColor="#9a73ef"
        //                 onChangeText={this.handleEmail}
        //             />

        //             <TextInput
        //                 style={styles.input}
        //                 placeholder="   Password"
        //                 placeholderTextColor="#9a73ef"
        //                 onChangeText={this.handlePassword}
        //             />

        //             <TouchableOpacity
        //                 style={styles.submitButton}
        //                 onPress={() => this.login(this.state.email, this.state.password)}
        //             >
        //                 <Text>Submit</Text>
        //             </TouchableOpacity>
        //         </View>
        //     );
        // }
// ------------------------------------------------------------------------------------------

// body of styling ------------------------------------------------------------------------
    // container: {
    //     backgroundColor: "#FCBA03",
    //     flex: 1,
    //     alignItems: "center",
    //     justifyContent: "center"
    // },

    // input: {
    //     height: 40,
    //     width: 150,
    //     backgroundColor: "white",
    //     borderColor: "black",
    //     borderWidth: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     margin: 15
    // },

    // submitButton: {
    //     textShadowColor: "#fff",
    //     textShadowRadius: 25,
    //     backgroundColor: "grey",
    //     padding: 10,
    //     margin: 15,
    //     height: 40
    // }
// ---------------------------------------------------------------------------------------------------
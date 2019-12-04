// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat';
// import * as firebase from "firebase";
// // import Fire from "../Fire";
// class ChatScreen extends React.Component {

//     static navigationOptions = ({ navigation }) => ({
//         title: (navigation.state.params || {}).name || 'Chat!',
//     });

//     state = {
//         messages: [],
//     };

//     render() {
//         return (
//             <GiftedChat
//                 messages={this.state.messages}
//                 onSend={firebase.shared.send}
//                 user={this.user}
//             />
//         );
//     }
//     componentDidMount() {
//         firebase.shared.on(message =>
//             this.setState(previousState => ({
//                 messages: GiftedChat.append(previousState.messages, message),
//             }))
//         );
//     }
//     // 2.
//     componentWillUnmount() {
//         firebase.shared.off();
//     }
//     get user() {
//         // Return our name and our UID for GiftedChat to parse
//         return {
//             name: this.props.navigation.state.params.name,
//             _id: firebase.shared.uid,
//         };
//     }
//     get ref() {
//         return firebase.database().ref('messages');
//     }
//     on = callback =>
//         this.ref
//             .limitToLast(20)
//             .on('child_added', snapshot => callback(this.parse(snapshot)));

//     parse = snapshot => {
//     }
//     // 4.
//     off() {
//         this.ref.off();
//     }
//     parse = snapshot => {
//         // 1.
//         const { timestamp: numberStamp, text, user } = snapshot.val();
//         const { key: _id } = snapshot;
//         // 2.
//         const timestamp = new Date(numberStamp);
//         // 3.
//         const message = {
//             _id,
//             timestamp,
//             text,
//             user,
//         };
//         return message;
//     };
//     // 1.
//     get uid() {
//         return (firebase.auth().currentUser || {}).uid;
//     }
//     // 2.
//     get timestamp() {
//         return firebase.database.ServerValue.TIMESTAMP;
//     }

//     // 3.
//     send = messages => {
//         for (let i = 0; i < messages.length; i++) {
//             const { text, user } = messages[i];
//             // 4.
//             const message = {
//                 text,
//                 user,
//                 timestamp: this.timestamp,
//             };
//             this.append(message);
//         }
//     };
//     // 5.
//     append = message => this.ref.push(message);
// }
// export default ChatScreen;

// import React from 'react';
// import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0
// import * as firebase from "firebase";

// export default class Chat extends React.Component {
//     static navigationOptions = ({ navigation }) => ({
//         title: (navigation.state.params || {}).name || 'Chat!'
//     });

//     state = {
//         messages: []
//     };

//     get user() {
//         if (firebase.auth().currentUser !== null) {
//             return {
//                 name: firebase.auth().currentUser.uid
//             };
//         }
//     }

//     render() {
//         return (
//             <GiftedChat
//                 messages={this.state.messages}
//                 onSend={firebase.send}
//                 user={this.user}
//             />
//         );
//     }

//     componentDidMount() {
//         firebase.refOn(message =>
//             this.setState(previousState => ({
//                 messages: GiftedChat.append(previousState.messages, message)
//             }))
//         );
//     }
//     componentWillUnmount() {
//         firebase.refOff();
//     }
// }

import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";

class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Aiden Wong',
    };
    finishedChatScreen = () => {
        const { navigate } = this.props.navigation;
        navigate("finishedChat");
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.containers} behavior="padding">
                <View style={styles.containers}>
                    <TextInput style={styles.input} placeholder="Type here..." />

                    <TouchableOpacity
                        style={styles.sendButton}
                        onPress={() => this.finishedChatScreen()}
                    >
                        <Image source={require('./sendButton.png')} style={styles.img} />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default ChatScreen;

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: '#FCBA03',

    },
    input: {
        position: 'absolute',
        bottom: 80,
        left: 0,
        height: 40,
        width: 270,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        margin: 15
    },
    sendButton: {
        position: 'absolute',
        bottom: 100,
        right: 45


    },
    img: {
        width: 30,
        height: 30
    }

});
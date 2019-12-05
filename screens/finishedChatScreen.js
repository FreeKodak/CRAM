import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
} from "react-native";

class ChatScreen extends Component {
    // static navigationOptions = {
    //     title: 'Aiden Wong',
    // };
    finishedChatScreen = () => {
        const { navigate } = this.props.navigation;
        navigate("finishedChat");
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.containers} behavior="padding">
                <View style={styles.containers}>
                    <StatusBar>
                        <Text>
                            Aiden Wong
                        </Text>
                    </StatusBar>
                    <Text style={styles.text1}>
                        Hey! Just wondering where we can meet tomorrow?
                    </Text>
                    <Text style={styles.text2}>
                        How does TFDL second floor sound?
                    </Text>
                    <Text style={styles.text3}>
                        Sounds good! See you then.
                    </Text>
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
    text1: {
        position: 'absolute',
        bottom: 250,
        left: 10,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1
    },
    text2: {
        position: 'absolute',
        bottom: 200,
        right: 10,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1
    },
    text3: {
        position: 'absolute',
        bottom: 150,
        left: 10,
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'grey',
        borderRadius: 5,
        borderWidth: 1
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


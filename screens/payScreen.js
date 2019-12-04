import React, { Component } from "react";
import {
    Alert,
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


class payScreen extends Component {
    showAlert() {
        Alert.alert(
            'Payment Received!'
        );
    }
    render() {
        return (
            <KeyboardAwareScrollView >

                <View>
                    <Text style={styles.title}>
                        Card Information
                   </Text>
                    <Text style={styles.subTitle}>
                        Name on Card*
                   </Text>
                    <TextInput style={styles.input} />
                    <Image source={require('./cardImages.png')} style={styles.img} />
                    <Text style={styles.subTitle}>
                        Expires*                               Security Code*
                    </Text>
                    <View style={styles.row}>
                        <TextInput style={styles.dateInput} placeholder="MM" />
                        <TextInput style={styles.dateInput} placeholder="YY" />
                        <TextInput style={styles.dateInput} />
                    </View>

                    <Text style={styles.title2}>
                        Billing Information
                   </Text>
                    <Text style={styles.subTitle2}>
                        Street Address*
                   </Text>
                    <TextInput style={styles.input2} />
                    <Text style={styles.subTitle2}>
                        City*                              Postal*         Prov.*
                    </Text>
                    <View style={styles.row}>
                        <TextInput style={styles.cityInput} />
                        <TextInput style={styles.zipInput} />
                        <TextInput style={styles.zipInput} />
                    </View>
                    <TouchableOpacity
                        style={styles.paymentButton}
                        onPress={this.showAlert}
                    >
                        <Text>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>

        );
    }

}

export default payScreen;

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        alignItems: 'flex-start'

    },
    row: {
        flex: 1,
        flexDirection: "row"
    },
    title: {
        fontSize: 40,
        padding: 10
    },
    title2: {
        fontSize: 40,
        padding: 10,
        bottom: 10

    },
    subTitle: {
        fontSize: 20,
        padding: 10
    },
    subTitle2: {
        fontSize: 20,
        padding: 10,
        bottom: 10
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 12
    },
    input2: {
        height: 40,
        width: 300,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 12,
        bottom: 10
    },
    dateInput: {
        height: 40,
        width: 80,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 12
    },
    cityInput: {
        height: 40,
        width: 150,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 12,
        top: -10

    },
    zipInput: {
        height: 40,
        width: 80,
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        margin: 12,
        top: -10
    },
    img: {
        width: 150,
        resizeMode: 'contain',
        left: 10
    },
    paymentButton: {
        width: 100,
        alignSelf: 'center',
        backgroundColor: "grey",
        marginRight: 40,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 25,
        paddingRight: 25,
        borderRadius: 10,
        borderWidth: 1
    }
});
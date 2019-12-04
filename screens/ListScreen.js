import React from 'react';
import { FlatList, StyleSheet, View, Text, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ListScreen extends React.Component {

    goChat = () => {
        const { navigate } = this.props.navigation;
        navigate("Chat");
    }
    render() {
        return (

            <View style={styles.container}>

                <TouchableOpacity
                    onPress={() => this.goChat()}
                >
                    <Text>
                        Message
                    </Text>
                </TouchableOpacity>
                <FlatList
                    data={[
                        {
                            key: 'Devin',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'Dan',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'James',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'Jacob',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'Joel',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'Jillian',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                        {
                            key: 'Julie',
                            avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
                        },
                    ]}
                    renderItem={({ item }) =>
                        <>
                            <Text style={styles.item}>
                                {item.key}
                            </Text>
                            <Image classkey="Avatar"
                                source={{ uri: item.avatar }}
                                style={{ width: 400, height: 400 }}
                            />
                        </>}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});
// working
                        // { key: 'Devin' },
                        // { key: 'Dan' },
                        // { key: 'Dominic' },
                        // { key: 'Jackson' },
                        // { key: 'James' },
                        // { key: 'Joel' },
                        // { key: 'John' },
                        // { key: 'Jillian' },
                        // { key: 'Jimmy' },
                        // { key: 'Julie' },
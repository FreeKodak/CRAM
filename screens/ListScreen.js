import React, { Component } from 'react';
import { FlatList, StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Card, ListItem, Button, Icon, Divider } from 'react-native-elements'
import BottomBar from '../components/BottomBar';

export default class ListScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
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
                        <View style={styles.tutor}>
                            <Image classkey="Avatar"
                                source={{ uri: item.avatar }}
                                style={{ width: 128, height: 128, borderRadius: 128 / 2 }}
                            />
                            <View style={styles.tutText}>
                                <Text style={styles.item}>
                                    {item.key}
                                </Text>
                                <Text style={styles.class}>
                                    CPSC 405
                                </Text>
                                <Text style={styles.rating}>
                                    3.3
                                </Text>
                                <Divider style={{ backgroundColor: 'grey', height: 1, width: '80%' }} />
                            </View>
                        </View>}
                />
                <BottomBar nav={this.props.navigation} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,

    },
    item: {
        padding: 10,
        fontSize: 24,
        height: 44,
    },
    tutor: {
        flex: 1,
        flexDirection: 'row',
        padding: 4,
    },
    tutText: {
        flexDirection: 'column',
        padding: 2,
    },
    class: {
        paddingLeft: 10,
        paddingVertical: 6,
        fontSize: 20,
        height: 44,
    },
    rating: {
        paddingLeft: 10,
        paddingVertical: 6,
        fontSize: 15,
        height: 44,
    },
});

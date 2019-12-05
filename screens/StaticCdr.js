import React from "react";
import { FlatList, StyleSheet, View, Text, Image, Picker, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

export default class StaticCdr extends React.Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2019-12-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2019-11-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2029-05-30'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => this.showOverlay(day)}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'MMMM yyyy'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => (<Arrow />)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={true}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    markedDates={{
                        '2019-12-06': { selected: true, selectedColor: '#FCBA03' },
                        '2019-12-14': { selected: true, selectedColor: '#FCBA03' },
                        '2019-12-18': { selected: true, selectedColor: 'green' },
                        '2019-12-23': { selected: true, selectedColor: 'green' },
                        '2020-01-11': { selected: true, selectedColor: '#FCBA03' }
                    }}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, color: '#FCBA03', padding: 4, fontWeight: 'bold' }}>Booked:</Text>
                        <Text style={{ padding: 4 }}>(Dec. 6) Session with Gabe N.</Text>
                        <Text style={{ padding: 4 }}>(Dec. 14)  Session with Tony S.</Text>
                        <Text style={{ padding: 4 }}>(Jan. 11)  Session with Harry L.</Text>
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 20, color: 'green', padding: 4, fontWeight: 'bold' }}>Open:</Text>
                        <Text style={{ padding: 4 }}>(Dec. 18) 14:30 - 16:30</Text>
                        <Text style={{ padding: 4 }}>(Dec. 23) 11:30 - 13:00</Text>
                    </View>
                </View>

            </View>
        );
    }
}
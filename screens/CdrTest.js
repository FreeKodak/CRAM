import React from "react";
import { FlatList, StyleSheet, View, Text, Image, PushNotificationIOS } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const months = {
    0: 'Placeholder',
    1: 'January',
    2: 'Feburary',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

function monthToInt(date) {
    let month_d1 = date.charAt(5);
    let month_d2 = date.charAt(6);
    let month = month_d1 + month_d2;
    month = months[parseInt(month)]
    let day_d1 = date.charAt(8);
    let day_d2 = date.charAt(9);
    let day = day_d1 + day_d2;
    return (month + " " + day);
}

export default class CdrTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            lastChosenDay: {
                "dateString": "2019-12-18",
                "day": 18,
                "month": 12,
                "timestamp": 1576627200000,
                "year": 2019,
            },
        }
    }

    showOverlay = (day) => {
        this.state.isVisible ? this.setState({ isVisible: false }) : this.setState({ isVisible: true });
        this.setState({ lastChosenDay: day });
    }

    render() {
        return (
            <View>
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
                    hideDayNames={true}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={substractMonth => substractMonth()}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                />
                {
                    this.state.isVisible ? <Overlay
                        isVisible={this.state.isVisible}
                        onBackdropPress={() => this.setState({ isVisible: false })}
                        style={styles.olay}>
                        <Text style={styles.otext}>{monthToInt(this.state.lastChosenDay.dateString)}</Text>
                    </Overlay> : <View></View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    olay: {
        flex: 1,
        alignItems: 'center'
    },
    otext: {
        textAlign: "center",
    }

})
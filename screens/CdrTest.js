import React from "react";
import { FlatList, StyleSheet, View, Text, Image, Picker, Button } from 'react-native';
import { Overlay } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

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
            time1: 0,
            time2: 0,
            bookings: [{}],
            refresh: false,
        }
    }

    addBooking = () => {
        let apts = this.state.bookings
        apts.push({ key: monthToInt(this.state.lastChosenDay.dateString), appt: '@ ' + this.state.time1 + ' - ' + this.state.time2 })
        this.setState({ bookings: apts })
        this.setState({ refresh: !this.state.refresh })
        alert("Added booking!")
        console.log(this.state.bookings)
    }

    showOverlay = (day) => {
        this.state.isVisible ? this.setState({ isVisible: false }) : this.setState({ isVisible: true });
        this.setState({ lastChosenDay: day });
    }

    onChangeText = (text) => {
        this.setState({ textValue: text })
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
                        <View style={styles.obgrnd}>
                            <View style={styles.innerobgnd}>
                                <Text style={styles.innertxt}>From</Text>
                                <Picker
                                    selectedValue={this.state.time1}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ time1: itemValue })
                                    }>
                                    <Picker.Item label="00:00" value={0} />
                                    <Picker.Item label="01:00" value={1} />
                                    <Picker.Item label="02:00" value={2} />
                                    <Picker.Item label="03:00" value={3} />
                                    <Picker.Item label="04:00" value={4} />
                                    <Picker.Item label="05:00" value={5} />
                                    <Picker.Item label="06:00" value={6} />
                                    <Picker.Item label="07:00" value={7} />
                                    <Picker.Item label="08:00" value={8} />
                                    <Picker.Item label="09:00" value={9} />
                                    <Picker.Item label="10:00" value={10} />
                                    <Picker.Item label="11:00" value={11} />
                                    <Picker.Item label="12:00" value={12} />
                                    <Picker.Item label="13:00" value={13} />
                                    <Picker.Item label="14:00" value={14} />
                                    <Picker.Item label="15:00" value={15} />
                                    <Picker.Item label="16:00" value={16} />
                                    <Picker.Item label="17:00" value={17} />
                                    <Picker.Item label="18:00" value={18} />
                                    <Picker.Item label="19:00" value={19} />
                                    <Picker.Item label="20:00" value={20} />
                                    <Picker.Item label="21:00" value={21} />
                                    <Picker.Item label="22:00" value={22} />
                                    <Picker.Item label="23:00" value={23} />
                                </Picker>
                            </View>
                            <View style={styles.innerobgnd}>
                                <Text style={styles.innertxt}>To</Text>
                                <Picker
                                    selectedValue={this.state.time2}
                                    style={{ height: 50, width: 100 }}
                                    onValueChange={(itemValue, itemIndex) =>
                                        this.setState({ time2: itemValue })
                                    }>
                                    <Picker.Item label="00:00" value={0} />
                                    <Picker.Item label="01:00" value={1} />
                                    <Picker.Item label="02:00" value={2} />
                                    <Picker.Item label="03:00" value={3} />
                                    <Picker.Item label="04:00" value={4} />
                                    <Picker.Item label="05:00" value={5} />
                                    <Picker.Item label="06:00" value={6} />
                                    <Picker.Item label="07:00" value={7} />
                                    <Picker.Item label="08:00" value={8} />
                                    <Picker.Item label="09:00" value={9} />
                                    <Picker.Item label="10:00" value={10} />
                                    <Picker.Item label="11:00" value={11} />
                                    <Picker.Item label="12:00" value={12} />
                                    <Picker.Item label="13:00" value={13} />
                                    <Picker.Item label="14:00" value={14} />
                                    <Picker.Item label="15:00" value={15} />
                                    <Picker.Item label="16:00" value={16} />
                                    <Picker.Item label="17:00" value={17} />
                                    <Picker.Item label="18:00" value={18} />
                                    <Picker.Item label="19:00" value={19} />
                                    <Picker.Item label="20:00" value={20} />
                                    <Picker.Item label="21:00" value={21} />
                                    <Picker.Item label="22:00" value={22} />
                                    <Picker.Item label="23:00" value={23} />
                                </Picker>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.ogbbut}
                            onPress={() => this.addBooking()}>
                            <Text style={styles.ogbbut_text}>Confirm Booking</Text>
                        </TouchableOpacity>
                    </Overlay> : <View></View>
                }
                <FlatList
                    data={this.state.bookings}
                    extraData={this.state.refresh}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={styles.bookngs}>{item.key} {item.appt}</Text>
                        </View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    olay: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    otext: {
        textAlign: "center",
        fontSize: 28,
        paddingBottom: 16,
    },
    obgrnd: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 2,
    },
    // oinput: {
    //     height: 40,
    //     borderLeftColor: 'gray',
    //     borderWidth: 1,
    //     borderLeftWidth: 18,
    //     paddingLeft: 4,
    //     paddingRight: 10
    // },
    innerobgnd: {
        flexDirection: 'column'
    },
    innertxt: {
        textAlign: 'center',
        fontSize: 16,
    },
    ogbbut: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign: 'center',
        // flex: 1
    },
    ogbbut_text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white'
    },
    bookngs: {
        textAlign: "center",
        fontSize: 18,
        paddingBottom: 4
    }


})
import React from "react";
import { ButtonGroup } from "react-native-elements";

export default class BottomBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
        const { navigate } = this.props.nav;
        if (selectedIndex == 0) {
            navigate('Tutor');
        }
        else if (selectedIndex == 2) {
            navigate('Profile');
        }
    }

    render() {
        const buttons = ['Earn', 'Learn', 'Profile']
        const { selectedIndex } = this.state

        return (
            <ButtonGroup
                onPress={this.updateIndex}
                selectedIndex={selectedIndex}
                buttons={buttons}
                containerStyle={{ height: 30, }}
            />
        )
    }
}
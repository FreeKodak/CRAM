import React from "react";
import { ButtonGroup } from "react-native-elements";

export default class BottomBar extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedIndex: ""
    };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
    console.log(this.state);
  }

  render() {
    const buttons = ["Earn", "Learn", "Profile"];
    const { selectedIndex } = this.state;
    return (
      <ButtonGroup
        onPress={this.updateIndex}
        selectedIndex={selectedIndex}
        buttons={buttons}
        containerStyle={{ height: 40 }}
      />
    );
  }
}

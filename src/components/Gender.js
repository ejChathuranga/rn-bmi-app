import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHeight: 50,
    };
  }

  genderIconSize = action => {
    var {x, y, width, height} = action;
    this.setState({iconHeight: height});
  };

  render() {
    return (
      <View style={styles.container1}>
        <View style={styles.childContainer1}>
          <View
            style={{flex: 1}}
            onLayout={event => {
              this.genderIconSize(event.nativeEvent.layout);
            }}>
            <Icon
              name={this.props.icon}
              size={this.state.iconHeight}
              color="rgba(255, 255, 255, 0.2)"
            />
          </View>
        </View>
        <View style={styles.childContainer2}>
          <Text style={styles.maleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginEnd: 5,
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
    borderRadius: 15,
    alignItems: 'center',
  },
  childContainer1: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 30,
  },
  childContainer2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maleText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 15,
  },
});

import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHeight: 50,
      selected: false,
      bgColor: 'rgba(22, 19, 71, 0.2)',
      color: 'rgba(255, 255, 255, 0.4)'
    };
  }

  genderIconSize = action => {
    var { x, y, width, height } = action;
    this.setState({ iconHeight: height });
  };

  onLayoutSelected = (state) => {
    let bgColor;
    let color;
    state ? bgColor = 'rgba(22, 19, 71, 0.1)' : bgColor = 'rgba(22, 19, 71, 0.2)'
    state ? color = 'rgba(255, 255, 255, 1)' : color = 'rgba(255, 255, 255, 0.4)'

    this.setState({
      selected: state,
      bgColor: bgColor,
      color: color
    })
  }

  render() {
    return (
      <View style={[styles.container1, {backgroundColor: this.state.bgColor} ]}>
        <TouchableOpacity onPress={() => this.onLayoutSelected(!this.state.selected)}>
          <View style={styles.childContainer1}>
            <View
              style={{ flex: 1 }}
              onLayout={event => {
                this.genderIconSize(event.nativeEvent.layout);
              }}>
              <Icon
                name={this.props.icon}
                size={this.state.iconHeight}
                color={this.state.color}
              />
            </View>
          </View>
          <View style={styles.childContainer2}>
            <Text style={[styles.maleText, {color: this.state.color}]}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    marginEnd: 5,
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
    fontSize: 15,
  },
});

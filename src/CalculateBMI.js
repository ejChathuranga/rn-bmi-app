import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CalculateBMI extends Component {
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
      <View style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <View style={styles.container1}>
            <View style={styles.childContainer1}>
              <View
                style={{flex: 1}}
                onLayout={event => {
                  this.genderIconSize(event.nativeEvent.layout);
                }}>
                <Icon
                  name="male"
                  size={this.state.iconHeight}
                  color="rgba(255, 255, 255, 0.2)"
                />
              </View>
            </View>
            <View style={styles.childContainer2}>
              <Text style={styles.maleText}>Male</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.childContainer1}>
              <View
                style={{flex: 1}}
                onLayout={event => {
                  this.genderIconSize(event.nativeEvent.layout);
                }}>
                <Icon
                  name="female"
                  size={this.state.iconHeight}
                  color="rgba(255, 255, 255, 0.2)"
                />
              </View>
            </View>
            <View style={styles.childContainer2}>
              <Text style={styles.maleText}>Female</Text>
            </View>
          </View>
        </View>
        <View style={styles.subContainer2}></View>
        <View style={styles.subContainer3}></View>
        <View style={styles.subContainer4}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  maleText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: 15,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#050230',
  },
  subContainer1: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
  },
  subContainer2: {
    flex: 1,
    margin: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
  },
  subContainer3: {
    flex: 1,
    margin: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
  },
  subContainer4: {
    flex: 1,
    margin: 8,
  },
  container1: {
    flex: 1,
    marginEnd: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    marginStart: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
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
});

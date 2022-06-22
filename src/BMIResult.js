import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export default class BMIResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmiStatusText: 'Mild Thinness',
      bmiStatusValue: 18.0,
      bmiStatusWeightRange: '18.5-25 kg/m2',
      bmiStatusOverall: 'underweight',
    };
  }

  onCalcButtonPressed = () => {
    this.props.navigation.pop();
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container1}>
          <Text style={{fontSize: 45, color: '#fff', fontWeight: 'bold'}}>
            Your Result
          </Text>
        </View>
        <View style={styles.container2}>
          <Text
            style={{
              color: 'green',
              fontWeight: 'bold',
              fontSize: 25,
              marginBottom: 20,
            }}>
            {this.state.bmiStatusText}
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 45,
              marginBottom: 20,
            }}>
            {this.state.bmiStatusValue}
          </Text>
          <Text
            style={{
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 5,
            }}>
            Normal BMI range
          </Text>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,
            }}>
            {this.state.bmiStatusWeightRange}
          </Text>
          <Text
            style={{
              color: 'red',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 5,
            }}>
            Your Age
          </Text>
          <Text
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,
            }}>
            21
          </Text>
          <Text
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 'bold',
              fontSize: 20,
              marginBottom: 20,
            }}>
            {this.state.bmiStatusOverall}
          </Text>
        </View>
        <View style={styles.container3}></View>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.calcButton}
            onPress={() => this.onCalcButtonPressed()}>
            <Text style={styles.calcText}>RECALCULATE YOUR BMI</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#050230',
    padding: 10,
  },
  container1: {flex: 1, justifyContent: 'center'},
  container2: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
    borderRadius: 15,
  },
  container3: {flex: 2},
  container4: {flex: 1, justifyContent: 'center'},
  calcButton: {backgroundColor: '#c41a2a', borderRadius: 20},
  calcText: {
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    fontWeight: 'bold',
  },
});

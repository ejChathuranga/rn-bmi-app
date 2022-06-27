import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Gender from './components/Gender';
import NumbersInteractor from './components/NumbersInteractor';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class CalculateBMI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHeight: 50,
    };
  }

  genderIconSize = action => {
    var { x, y, width, height } = action;
    this.setState({ iconHeight: height });
  };

  onCalcButtonPressed = () => {
    this.props.navigation.navigate('BMIResult');
  };

  render() {
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.subContainer1}>
          <Gender style={{ flex: 1 }} icon={'male'} title={'Male'} />
          <Gender style={{ flex: 1 }} icon={'female'} title={'Female'} />
        </View>
        <View style={styles.subContainer2}>
          <View style={styles.container3}>
            <Text style={styles.heightText}>HEIGHT</Text>
          </View>
          <View style={styles.container4}>
            <Text style={styles.heightValueText}>166cm</Text>
          </View>
          <View style={styles.container5}></View>
        </View>
        <View style={styles.subContainer3}>
          <NumbersInteractor style={{ flex: 1 }} icon={'male'} title={'WEIGHT'} />
          <NumbersInteractor style={{ flex: 1 }} icon={'female'} title={'AGE'} />
        </View>
        <View style={styles.subContainer4}>
          <TouchableOpacity
            style={styles.calcButton}
            onPress={() => this.onCalcButtonPressed()}>
            <Text style={styles.calcText}>CALCULATE YOUR BMI</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  calcText: {
    textAlign: 'center',
    color: '#fff',
    margin: 20,
    fontWeight: 'bold',
  },
  calcButton: { backgroundColor: '#c41a2a', borderRadius: 20 },
  container3: { flex: 1, justifyContent: 'center' },
  container4: { flex: 2, justifyContent: 'center', },
  container5: { flex: 1 },
  heightValueText: {
    fontWeight: 'bold',
    fontSize: hp(8),
    textAlign: 'center',
    color: '#FFF',
  },
  heightText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 15,
    textAlign: 'center',
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
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
    borderRadius: 15,
  },
  subContainer3: {
    flex: 1,
    flexDirection: 'row',
    margin: 8,
  },
  subContainer4: {
    flex: 1,
    margin: 8,
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    marginEnd: 5,
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
    borderRadius: 15,
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    marginStart: 5,
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
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

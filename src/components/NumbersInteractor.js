import { Text, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setWeight, setAge } from '../redux/action';


class NumbersInteractor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconHeight: 50,
      dynamicValue: this.props.title === 'AGE' ? this.props.age.age : this.props.weight.weight,
    };
  }

  genderIconSize = action => {
    var { x, y, width, height } = action;
    this.setState({ iconHeight: height });
  };

  valueUpdater = isIncrement => {

    let curValue
    if (this.props.title === "AGE") {
      curValue = this.props.age.age
      console.log(curValue);
      this.props.setAge(isIncrement ? (curValue + 1) : (curValue - 1))
    } else {
      curValue = this.props.weight.weight
      console.log("before " + curValue);

      this.props.setWeight(isIncrement ? (curValue + 1) : (curValue - 1))

      console.log("after " + curValue);
    }

    // this.setState({
    //   dynamicValue: this.props.title === 'AGE' ? this.props.age.age : this.props.weight.weight
    // })


  };

  render() {
    // console.log(this.props.age.age);
    return (
      <View style={styles.container1}>
        <View style={styles.childContainer2}>
          <Text style={styles.maleText}>{this.props.title}</Text>
        </View>
        <View style={styles.childContainer1}>
          <Text style={styles.dynamicText}>{this.state.dynamicValue}</Text>
        </View>
        <View style={styles.childContainer3}>
          <Icon
            name="remove-circle-sharp"
            size={this.state.iconHeight}
            color="rgba(255, 255, 255, 0.2)"
            onPress={() => this.valueUpdater(false)}
          />
          <Icon
            name="add-circle"
            size={this.state.iconHeight}
            color="rgba(255, 255, 255, 0.2)"
            onPress={() => this.valueUpdater(true)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dynamicText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255,1)',
    fontSize: hp(7),
  },
  container1: {
    flex: 1,
    marginEnd: 5,
    backgroundColor: 'rgba(22, 19, 71, 0.4)',
    borderRadius: 15,
    alignItems: 'center',
  },
  childContainer1: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer3: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  childContainer2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maleText: {
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: 15,
  },
});



const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setWeight, setAge
  }, dispatch)
);


const mapStateToProps = (state) => {
  const { weight, age } = state
  return { weight, age }
};

export default connect(mapStateToProps, mapDispatchToProps)(NumbersInteractor);


import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGender } from '../redux/action';

class Gender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iconHeight: 50,
      selected: false,
      bgColor: 'rgba(32, 28, 120, 0.6)',
      color: 'rgba(255, 255, 255, 0.4)'
    };
  }

  genderIconSize = action => {
    var { x, y, width, height } = action;
    this.setState({ iconHeight: height });
  };

  onLayoutSelected = (state) => {
    this.props.setGender(this.props.title)

    if(this.props.gender.gender === this.props.title){
      // console.log(this.props.title);
    }

    let bgColor;
    let color;
    state ? bgColor = 'rgba(32, 28, 120, 1)' : bgColor = 'rgba(32, 28, 120, 0.6)'
    state ? color = 'rgba(255, 255, 255, 1)' : color = 'rgba(255, 255, 255, 0.4)'

    this.setState({
      selected: state,
      bgColor: bgColor,
      color: color
    })
  }

  render() {
    // console.log(this.props.gender);
    // console.log("-----------");
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



const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setGender,
  }, dispatch)
);


const mapStateToProps = (state) => {
  const { gender } = state
  return { gender }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gender);

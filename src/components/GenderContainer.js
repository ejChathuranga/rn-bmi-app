import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setGender } from '../redux/action';
import Gender from './Gender';


class GenderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.subContainer1}>
                <Gender style={{ flex: 1 }} icon={'male'} title={'Male'} />
                <Gender style={{ flex: 1 }} icon={'female'} title={'Female'} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    subContainer1: {
        flex: 1,
        flexDirection: 'row',
        margin: 8,
      },
})

export default GenderContainer;
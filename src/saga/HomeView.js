import { Button, FlatList, StyleSheet, TextInput, View, Text } from "react-native";
import React, { Component } from 'react';
import { addTestValue, jobsRequestSend, jobDataProcessing } from "./Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)


class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placeName: ''
        }
    }

    componentDidMount() {
        this.props.jobDataProcessing(true)
        this.props.jobsRequestSend()
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.addTestValue(this.state.placeName);
    }

    placeNameChangeHandler = (value) => {
        this.setState({
            placeName: value
        });
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Seach Places"
                    style={styles.placeInput}
                    value={this.state.placeName}
                    onChangeText={this.placeNameChangeHandler}
                ></TextInput>
                <Button title='Add'
                    style={styles.placeButton}
                    onPress={() => this.placeSubmitHandler()}
                />
                <Text>{this.props.processing}</Text>
                <View style={{ height: 20 }} />

                <FlatList
                    data={this.props.jobs.jobs}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ padding: 10, margin: 5, borderWidth: 1, borderColor: '#fff', height: 40 }}>
                                <ShimmerPlaceHolder visible={!this.props.loader.loader}>
                                    <Text style={{ color: 'red' }} >{item.title}</Text>
                                </ShimmerPlaceHolder>
                            </View>
                        )
                    }}
                    ListEmptyComponent={() => {
                        return (
                            <View><Text>No Data</Text></View>
                        )
                    }}
                    // renderItem={({item}) => { return <Text >Hiiiiii</Text> }}
                    keyExtractor={item => item.id}
                    style={{}}
                />

                <View style={{ height: 20 }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    placeButton: {
        width: '30%'
    },
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        addTestValue, jobsRequestSend, jobDataProcessing
    }, dispatch)
);


const mapStateToProps = (state) => {
    const { test, jobs, loader } = state
    return { test, jobs, loader }
};


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)

// export default HomeView
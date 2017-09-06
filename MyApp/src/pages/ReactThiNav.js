//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

export default class ReactThiNav extends Component {
    render() {
        const  {navigate,goBack,state} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Button
                    title={state.params.passTitle}
                    onPress={()=>{goBack()}}
                />
            </View>
        );
    }
    static  navigationOptions = {
        title: '标题3'
    }
}


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});



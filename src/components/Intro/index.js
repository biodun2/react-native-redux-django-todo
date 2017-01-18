import React, { Component } from 'react';
import AppIntro from 'react-native-app-intro';
import { 
    Alert,
    View
} from 'react-native';
import store from 'react-native-simple-store';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';

import Home from '../Home';
import Slide from './slides';
import {
    PINK,
    GREY,
    BROWN,
    PURPLE
} from '../../constants';

const { reset } = navigationActions;

const imgScreenOne = require('../../images/download.png');
const imgScreenTwo = require('../../images/2.png');
const imgScreenThree = require('../../images/3.png');
const imgScreenFour = require('../../images/4.png');

class Intro extends Component {

    handleDoneBtn = (route, navigator) => {
        Alert.alert('Thank you for your time');
        store.save('introSeen', true).then(() => {
            const nextScreen = 'home'
            this.props.dispatch(reset([{
                key: nextScreen,
                index: 0
            }], 'global'));
         })
    }

    handleSkipBtn = (route, navigator) => {
        store.save('introSeen', true).then(() => {
            const nextScreen = 'home';
            this.props.dispatch(reset([{
                key: nextScreen,
                index: 0
            }], 'global'));
         });
    }
    

    render() {
        return (
            <View>
                <AppIntro 
                    onDoneBtnClick={this.handleDoneBtn}
                    onSkipBtnClick={this.handleSkipBtn}
                    style={{alignItems: 'center'}}
                    
                >
                    <Slide 
                        style={{backgroundColor: PINK}}
                        title={'Welcome'}
                        msg={'Let me tell you more about TODO App'}
                        img={imgScreenOne}
                    />
                    <Slide 
                        style={{backgroundColor:GREY}}
                        title={'Register'}
                        msg={'To access the App, you need to \n register with us'}
                        img={imgScreenTwo}
                    />
                    <Slide 
                        style={{backgroundColor:BROWN}}
                        title={'How To'}
                        msg={'Input what you want to add your todo list and \n hit the button'}
                        img={imgScreenThree}
                    />
                    <Slide
                        style={{backgroundColor : PURPLE}}
                        title={'Tips'}
                        msg={'You can click on a todo to mark completed \n You can also filter your todo'}
                        img={imgScreenFour}
                    />
                </AppIntro>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}


export default connect(() => { return {} }, mapDispatchToProps)(Intro);
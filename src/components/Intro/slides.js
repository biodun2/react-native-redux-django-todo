import React, { Component } from 'react';
import Styles from './styles';
import {
    View,
    Text,
    Image
} from 'react-native';

export default class Slide extends Component {

    render() {
        return (
              <View style={[this.props.backgroundColor, {alignItems: 'center'}]}>
                    <View level={10} style={Styles.image}>
                        <Image source={this.props.img}/>
                    </View>
                    <View style={Styles.textContainer}>
                        <View level={10}>
                            <Text style={Styles.h1}>{this.props.title}</Text>
                        </View>
                        <View level={5}>
                            <Text style={Styles.h3}>{this.props.msg}</Text>
                        </View>
                    </View>
             </View>
        )
    }

}

// Slide.propTypes = {
//     backgroundColor: React.PropTypes.style,
//     img: React.PropTypes.number,
//     title: React.PropTypes.text,
//     msg: React.PropTypes.text
// }
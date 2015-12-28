'use strict';

import React from 'react-native';
let {
	Component,
	Text,
  	TouchableWithoutFeedback,
  	StyleSheet,
} = React;

const BUTTON_NORMAL = 'BUTTON_NORMAL';
const BUTTON_HELIGHT = 'BUTTON_HELIGHT';

export default class Button extends Component {

	constructor(props) {
		super(props);


		this.state = {
			buttonState: BUTTON_NORMAL,
		}

		this._pressIn = this._pressIn.bind(this);
		this._pressOut = this._pressOut.bind(this);
		this._onPress = this._onPress.bind(this);
		this._selectStyle = this._selectStyle.bind(this);	
		this._helightStyle = this._helightStyle.bind(this);	
	}

	render() {
	    return (
			<TouchableWithoutFeedback 
				onPressIn={this._pressIn}
				onPressOut={this._pressOut}
				onPress={this._onPress} >
				<Text style={[this._selectStyle(), this._helightStyle()]} >
					{this.props.title}
				</Text>
			</TouchableWithoutFeedback>
	    );
  	}

	_pressIn() {
		this.props.pressIn && this.props.pressIn();

		this.setState({
			buttonState: BUTTON_HELIGHT,
		});
	}

	_pressOut() {
		this.props.pressOut && this.props.pressOut();

		this.setState({
			buttonState: BUTTON_NORMAL,
		});
	}

	_onPress() {
		this.props.onPress && this.props.onPress();
	}

	_selectStyle() {
		if(this.props.selected) {
			return this.props.selectTitleStyle ? this.props.selectTitleStyle : styles.normalTitle;
		}

		return styles.normalTitle;
	}

	_helightStyle() {
		if(this.state.buttonState === BUTTON_NORMAL) {
			if(this.props.selected) {
				return this._selectStyle();
			}

			return this.props.normalTitleStyle ? this.props.normalTitleStyle : styles.normalTitle;
		} else if(this.state.buttonState === BUTTON_HELIGHT) {
			return this.props.helightTitleStyle ? this.props.helightTitleStyle : styles.helightTitle;
		}
	}
}

Button.propTypes = { 
	title: React.PropTypes.string.isRequired,
	selected: React.PropTypes.bool,
	normalTitleStyle: React.PropTypes.object,
    helightTitleStyle: React.PropTypes.object,
    selectTitleStyle: React.PropTypes.object,
    onPress: React.PropTypes.func,
};

let styles = StyleSheet.create({
	normalTitle: {
		color: 'black',
	},
  	helightTitle: {
		color: 'gray',
	},
});
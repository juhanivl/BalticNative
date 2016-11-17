'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
var {
  StyleSheet,
  Text,
  View,
} = ReactNative;
import ToolbarAndroid  from 'ToolbarAndroid';
import styles from '../../resources/styles.js';
//import NavigationComponent from '../navigation-component/NavigationComponent';
let toolbarActions = [
{title: 'GPS', icon: require('image!ic_gps_fixed_white_24dp'), show: 'always'},
{title: 'Filter'},
{title: 'Search', icon: require('image!ic_search_white_24dp'), show: 'always'},
];

export default class MainNavbar extends Component {

  constructor(props){
    super(props);

    this.state = {
      actionText: 'Example app with toolbar component',
      toolbarSwitch: false,
      colorProps: {
        titleColor: '#3b5998',
        subtitleColor: '#6a7180',
      },
    };

    this._onActionSelected = this._onActionSelected.bind(this);
  }

  _onActionSelected = (position) => {
    this.setState({
      actionText: 'Selected ' + toolbarActions[position].title,
    });

    this.props.componentChangedCallback(toolbarActions[position].title);

  };


  render(){

    return(
        <View>
          <ToolbarAndroid
            actions={toolbarActions}
            navIcon={require('../../resources/ic_menu_white_24dp.png')}
            onActionSelected={this._onActionSelected}
            onIconClicked={() => this.setState({actionText: 'Icon clicked'})}
            style={styles.toolbar}
            //subtitle={this.state.actionText}
            title="Bonus Baltic App" />

          <Text>{this.state.actionText}</Text>
        </View>
    );
  }
}
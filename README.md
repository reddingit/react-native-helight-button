# react-native-helight-button
A React Native component works like UIButton

## Installation

```bash
$ npm install react-native-helight-button
```

## Example

```javascript
import React from 'react-native';
let {
    Component,
    AppRegistry,
    StyleSheet,
    View,
} = React;

import Button from './button';

class AwesomeProject extends Component {
    render() {
        return (
            <View style={styles.container}>
	            <Button 
	                title={'Touch me'} 
	                normalTitleStyle={{color: 'yellow'}}
	                helightTitleStyle={{color: 'red'}}
	                selectTitleStyle={{color: 'black'}} 
	                selected={true}
	                onPress={()=>{console.log('on press')}} />
          	</View>
        );
    }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

```

# License
(c) 2015 Redding Yu. MIT License.

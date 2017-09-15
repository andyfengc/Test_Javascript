// import library
import React, {Component} from 'react';
import { Text, View } from 'react-native';
import Styles from '../utils/styles';

// create component
class Header extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style={Styles.headerView} >
        <Text style={Styles.headerText}>{this.props.title}</Text>
      </View>
    )
  }
}

// const styles = {
//   viewStyle: {
//     backgroundColor: '#F8F8F8'
//   },
//   textStyle: {
//     fontSize: 30
//   }
// }

// export component
export default Header;

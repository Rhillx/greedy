import React, {Component} from 'react';
import {TextInput} from 'react-native';





export default class SearchBar extends Component{
    state = {
        text: ""
    }

    render(){
        const value = this.state.text
        return(
            <TextInput
             style={styles.searchInput}
             onChangeText={(text) => this.setState({text})}
             placeholder={"search recipe"}
             placeholderTextColor={'#f7f788'}
             returnKeyType={"search"}
             value={value}
             />
        )
    }
}

const styles ={
    searchInput:{
        borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 4,
        margin: 10,
        height: 50,
        backgroundColor: 'gray',
        textDecorationLine: 'none',
        textAlign: 'center',
        fontSize: 22,
        color: 'yellow',
        
    }
}
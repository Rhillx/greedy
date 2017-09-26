import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, children}) => {

    return(
        <TouchableOpacity onPress={onPress} style={styles.btnContianer}>
            <Text style={styles.btnText}> {children} </Text>
        </TouchableOpacity>
    )
}

const styles = {
    btnContianer:{
       borderWidth: 2,
        borderColor: 'blue',
        borderRadius: 4,
        margin: 10,
        height: 50,
        backgroundColor: 'yellow',
        justifyContent: 'center'

       
    },
    btnText:{
         
        textAlign: 'center',
        fontSize: 22,
        color: 'gray'
    }
}


export default Button;
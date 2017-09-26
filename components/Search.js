import React, {Component} from "react";
import {View} from 'react-native';

import SearchBar from './SearchBar';
import Button from './Button';


const Search = () =>{

console.log(props)

const handleSearch =()=>{
  console.log("being pressed")
}

    return(
        <View>
            <SearchBar />
            <Button onPress={() => handleSearch()}>
                Get Ingreedy
            </Button>
        </View>
    )
}

export default Search;
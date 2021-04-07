import React from  'react';
import { Text, View,Image } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const Header = () => {
return (
<View style = {styles.container}> 
    <Image style={styles.logo} source = {require('../../assets/images/logo.png')} />
    <Image style={styles.menu} source = {require('../../assets/images/menu.png')} />
</View>          
);
};

export default Header;
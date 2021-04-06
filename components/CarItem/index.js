import React from  'react';
import { Text, View,ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = () => {
return (
<View style={styles.carContainer}>
        <ImageBackground 
        source ={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
        /> 
        
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69,420</Text>

          <StyledButton
          type ="primary"
          content ={"Custom Order"}
          onPress = {() => {
            console.warn('Custom Order button was pressed');
          }}
          />

<StyledButton
          type ="secondary"
          content ={"Existing Intventory"}
          onPress = {() => {
            console.warn('Existing Intventory button was pressed');
          }}
          />
        </View>
 </View>
);
};

export default CarItem;
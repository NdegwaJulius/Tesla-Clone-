import React from  'react';
import { Text, View,ImageBackground } from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';

const CarItem = (props) => {

  const {name,tagline,image,taglineCTA} = props.car;
return (
<View style={styles.carContainer}>
        <ImageBackground 
        source ={image}
        style={styles.image}
        /> 
        
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>
            {tagline}
            {''}
          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
          </Text>
          
          <View style={styles.buttonsContainer} >
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
 </View>
);
};

export default CarItem;
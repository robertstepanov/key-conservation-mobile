import React from 'react';
import { View, Text } from 'react-native';

import PlusSignCircle from '../../assets/jsicons/PlusSignCircle';
import KeyIconGray from '../../assets/jsicons/KeyCon/KeyIconGray';
import styles from '../../constants/Profile/CampBlankSpace';
const CampBlankSpace = props => {
  return (
    <View style={styles.container}>
      <View style={styles.plusIcon}>
        <PlusSignCircle />
        <Text style={styles.text}>No campaigns to see here!</Text>
      </View>
    </View>
  );
};
export default CampBlankSpace;

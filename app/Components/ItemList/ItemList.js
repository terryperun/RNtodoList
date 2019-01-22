import React from 'react';
import { View, Text, CheckBox } from 'react-native';
import s from './styles';

const ItemList = ({ task, status }) => (
  <View style={s.container}>
    <View>
      <CheckBox />
    </View>
    <View>
      <Text>{task}</Text>
    </View>
  </View>
);

export default ItemList;

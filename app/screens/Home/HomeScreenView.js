import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
} from 'react-native';
import s from './styles';

import { data } from '../../Mocks/items.js';
import ItemList from '../../Components/ItemList/ItemList';

const HomeScreenView = ({
  addToCollection,
  collectionName,
  showState,
  setTask,
  task,
}) => (
  <View style={s.container}>
    <FlatList
      data={data}
      ListHeaderComponent={() => (
        <TextInput
          placeholder="Add item"
          style={s.textInput}
          onChangeText={setTask}
          value={task}
        />
      )}
      renderItem={({ item }) => (
        <ItemList task={item.task} status={item.status} />
      )}
    />
    <View>
      <Button title="show" onPress={showState} />
      <Button title="Add" onPress={addToCollection} />
      <Text />
    </View>
  </View>
);

HomeScreenView.navigationOptions = {
  title: 'My shopping lists',
};

export default HomeScreenView;

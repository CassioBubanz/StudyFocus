import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from './Colors';
import tempData from './tempData';
import TodoList from './components/TodoList';
import AddListModal from './components/AddListModal';

export default class App extends React.Component {
  state = {
    addTodoVisible: false
  }

  toggleAddTodoModal = () => {
    this.setState({ addTodoVisible: !this.state.addTodoVisible });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          visible={this.state.addTodoVisible}
          onRequestClose={() => this.toggleAddTodoModal()}
        >
          <AddListModal closeModal={() => this.toggleAddTodoModal()}/>
        </Modal>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.divider}/>
          <Text style={styles.title}>
            Study <Text style={{fontWeight: "300", color: colors.blue}}>Focus</Text>
          </Text>
          <View style={styles.divider}/>
        </View>

        <View style={{marginVertical: 48, alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={styles.addList} onPress={() => this.toggleAddTodoModal()}>
            <AntDesign name="plus" size={16} color={colors.blue} />
          </TouchableOpacity>

          <Text style={styles.add}>Adicionar Matéria</Text>
        </View>

        <View style={{height: 275, paddingLeft: 32}}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    divider: {
      backgroundColor: colors.lightblue,
      height: 1,
      flex: 1,
      alignSelf: 'center'
    },
    title: {
      fontSize: 38,
      fontWeight: '800',
      color: colors.black,
      paddingHorizontal: 64,
    },
    addList: {
      borderWidth: 2,
      borderColor: colors.lightblue,
      borderRadius: 12,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
    },
    add: {
      color: colors.blue,
      fontWeight: '600',
      fontSize: 14,
      marginTop: 8,
    }
});

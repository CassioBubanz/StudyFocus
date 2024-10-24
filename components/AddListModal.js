import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import colors from '../Colors'
import tempData from '../tempData'

export default class AddListModal extends Component {
    backgroundColors = ['#00B34C', '#4CC9F0', '#8E44AD', '#D159D8', '#FF0000', '#FB8500', '#FFD41F' ]

    state = {
        name: '',
        color: this.backgroundColors[0]
    }

    createTodo = () => {
        const { name, color } = this.state
        tempData.push({
            name,
            color,
            tarefas: []
        })

        this.setState({ name: '' })
        this.props.closeModal()
    }

    renderColors() {
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity
                    key={color}
                    style={[styles.colorSelect, { backgroundColor: color }]}
                    onPress={() => this.setState({ color })}
                />
            )
        })
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity style={{ position: 'absolute', top: 10, right: 32 }} onPress={this.props.closeModal}>
            <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>
        
        <View style={{alignSelf: 'stretch', marginHorizontal: 32}}>
            <Text style={styles.title}>Nova Lista</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome da Lista"
                onChangeText={text => this.setState({name: text})}
            />
            <View style={{ flexDirection: 'row', marginTop: 12, justifyContent: 'space-between'}}>
                {this.renderColors()}
            </View>

            <TouchableOpacity
                style={[styles.create, {backgroundColor: this.state.color}]}
                onPress={this.createTodo}
            >
                <Text style={{color: colors.white, fontWeight: '600'}}>Adicionar</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.black,
    alignSelf: 'center',
    marginBottom: 16
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 10,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18
  },
  create: {
    marginTop: 24,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 6,
  }
})
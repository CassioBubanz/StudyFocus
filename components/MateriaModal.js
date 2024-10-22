import { StyleSheet, View, TouchableOpacity, Text, FlatList, KeyboardAvoidingView, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AntDesign } from "@expo/vector-icons";
import colors from "../Colors";

export default class MateriaModal extends React.Component {
  state = {
    name: this.props.list.name,
    color: this.props.list.color,
    materias: this.props.list.materias,
  };

  renderMateria = materia => {
      return (
          <View>
            <Text>{materia.title}</Text>
          </View>
      )
  }
  render() {
    const tarefaCount = this.state.materias ? this.state.materias.length : 0
    const completedCount = this.state.materias ? this.state.materias.filter( materia => materia.completed ).length : 0

    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ position: "absolute", top: 64, right: 32, zIndex: 10 }}
          onPress={this.props.closeModal}
        >
          <AntDesign name="close" size={24} color={colors.black} />
        </TouchableOpacity>

        <View style={[styles.section, styles.header, { borderBottomColor: this.state.color }]}>
            <View>
                <Text style={styles.title}>{this.state.name}</Text>
                <Text style={styles.tarefaCount}>
                    {completedCount} of {tarefaCount} tarefas
                </Text>
            </View>
        </View>

        <View style={[styles.section, { flex: 3 }]}>
            <FlatList 
                data={this.state.materias}
                renderItem={({ item }) => this.renderMateria(item)}
                keyExtractor={item => item.title}
                contentContainerStyle={{ paddingHorizontal: 32, paddingVertical: 64 }}
                showsVerticalScrollIndicator={false}
            />
        </View>

        <KeyboardAvoidingView style={[styles.section, styles.footer]} behavior="padding">
          <TextInput style={[styles.input, { borderColor: this.state.color }]} />
          <TouchableOpacity style={[styles.addMateria, { backgroundColor: this.state.color }	]}>
            <AntDesign name="plus" size={16} color={colors.white} />
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    alignSelf: "stretch",
  },
  header: {
    justifyContent: "flex-end",
    marginLeft: 64,
    borderBottomWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "800",
    color: colors.black,
  },
  tarefaCount: {
    marginTop: 4,
    marginBottom: 16,
    color: colors.gray,
    fontWeight: "600",
  },
  footer: {
    paddingHorizontal: 32,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 6,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  addMateria: {
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});

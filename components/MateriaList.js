import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import colors from "../Colors";
import MateriaModal from "./MateriaModal";

export default class MateriaList extends React.Component {
    state = {
        showListVisible: false,
    }
    
    toggleListModal() {
        this.setState({ showListVisible: !this.state.showListVisible })}
    render() {
        const list = this.props.list
        
        const completedCount = list.tarefas ? list.tarefas.filter(materia => materia.completed).length : 0
        const remainingCount = list.tarefas ? list.tarefas.length - completedCount : 0
        
        return (
            <View>
                <Modal
                    animationType="slide"
                    visible={this.state.showListVisible}
                    onRequestClose={() => this.toggleListModal()}
                >
                    <MateriaModal list={list} closeModal={() => this.toggleListModal()}/>
                </Modal>
                <TouchableOpacity
                    style={[styles.listContainer, { backgroundColor: list.color } ]}
                    onPress={() => this.toggleListModal()}
                >
                    <Text style={styles.listTitle} numberOfLines={1}>
                        {list.name}
                    </Text>
        
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.count}>{completedCount}</Text>
                            <Text style={styles.subtitle}>Restante</Text>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Text style={styles.count}>{remainingCount}</Text>
                            <Text style={styles.subtitle}>Completo</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginHorizontal: 12,
        alignItems: 'center',
        width: 200,
    },
    listTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: colors.white,
        marginBottom: 18,
    },
    count: {
        fontSize: 48,
        fontWeight: '200',
        color: colors.white,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: '700',
        color: colors.white,
    },
});

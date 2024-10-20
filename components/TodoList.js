import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../Colors";

export default TodoList = ({ list }) => {
    const completedCount = list.tarefas.filter(todo => todo.completed).length
    const remainingCount = list.tarefas.length - completedCount

    return (
        <View style={[styles.listContainer, { backgroundColor: list.color } ]}>
            <Text style={styles.listTitle} numberOfLines={1}>
                {list.name}
            </Text>

            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.count}>{completedCount}</Text>
                    <Text style={styles.subtitle}>Restante</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.count}>{remainingCount}</Text>
                    <Text style={styles.subtitle}>Restante</Text>
                </View>
            </View>
        </View>
    );
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

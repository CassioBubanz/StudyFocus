import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Colors';
import AntDesign from '@expo/vector-icons/AntDesign';

export function Register() {
  return (
    

    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <FontAwesome name="arrow-left" size={20} color="white" />
      </TouchableOpacity>
      
      <Text style={styles.title}>study-focus</Text>
      <Text style={styles.subtitle}>Organização estudantil</Text>

      <Text style={styles.label}>Crie a sua conta</Text>

      <View style={{ display: 'flex', flexDirection: 'column' }}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={20} color="white" />
          </View>
          <TextInput
            placeholder="Nome de usuário"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="envelope" size={20} color="white" />
          </View>
          <TextInput
            placeholder="Email"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="lock" size={20} color="white" />
          </View>
          <TextInput
            placeholder="Senha"
            placeholderTextColor="#A9A9A9"
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <FontAwesome name="lock" size={20} color="white" />
          </View>
          <TextInput
            placeholder="Confirme sua senha"
            placeholderTextColor="#A9A9A9"
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Criar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>— Ou cadastre-se com —</Text>

      <View style={styles.socialContainer}>
        <View style={styles.socialIcon}>
          <AntDesign name="google" size={24} color="black" />
        </View>
        <View style={styles.socialIcon}>
          <AntDesign name="facebook-square" size={24} color="black" />
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: Colors.blue,
    borderRadius: 8,
    padding: 15,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.blue,
    marginBottom: 5,
    marginTop:100,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#d3d3d3',
  },
  label: {
    marginTop: 40,
    fontSize: 16,
    marginBottom: 15,
    color: Colors.black,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 0,
    backgroundColor: '#f5f5f5',
    height: 50,
    width: '100%',
  },
  iconContainer: {
    backgroundColor: Colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 10,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    backgroundColor: Colors.blue,
    paddingVertical: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    marginBottom: 20,
    color: 'gray',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 50,
    marginBottom: 20,
  },
  socialIcon: {
    borderWidth: 1,
    borderColor: Colors.blue,
    borderRadius: 8,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

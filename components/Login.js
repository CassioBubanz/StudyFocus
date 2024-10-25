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

export function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>study-focus</Text>
      <Text style={styles.subtitle}>Organização estudantil</Text>

      <Text style={styles.label}>Faça o Login na sua conta!</Text>
    <View style={{display:"flex" , flexDirection:"column"}}>
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
    </View>
        <View style={{  alignSelf:"flex-end", marginBottom:15}}>
            <TouchableOpacity >
                <Text style={{color:Colors.blue, fontSize:12, }}>Esqueceu sua senha?</Text>
            </TouchableOpacity>

        </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>— Ou entre com —</Text>

      <View style={styles.socialContainer}>
        <View style={styles.socialIcon}><AntDesign name="google" size={24} color="black" /></View>
        <View style={styles.socialIcon}><AntDesign name="facebook-square" size={24} color="black" /></View>
      </View>

      <TouchableOpacity>
        <Text style={styles.registerText}>
          Não possui uma conta? <Text style={{color:Colors.blue}}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>
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
    marginTop:80
  },
  title: {
    
    fontSize: 42,
    fontWeight: 'bold',
    color: Colors.blue,
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight:'500',
    color:"#d3d3d3"
    
    
  },
  label: {
    marginTop:70,
    fontSize: 16,
    marginBottom:15,
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
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius: 8, 
    marginRight: 10,
    width: 50, 
    height: 50, 
    alignItems:'center',
    justifyContent:"center"
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
    gap:50,
    marginBottom: 20,
  },
  
  socialIcon: {
    borderWidth: 1, // Adiciona a borda
    borderColor: Colors.blue, // Cor da borda
    borderRadius: 8, // Arredonda as bordas dos ícones
    padding: 15, // Espaçamento interno
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: 'gray',
  },
  registerLink: {
    color: Colors.blue,
    fontWeight: 'bold',
  },
});

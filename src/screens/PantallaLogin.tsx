import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const PantallaLogin = ({ navigation }: any) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [contrasenaVisible, setContrasenaVisible] = useState(false);

  const iniciarSesion = () => {
    Alert.alert('Inicio de Sesión', `Correo: ${correo}\nContraseña: ${contrasena}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://marketplace.canva.com/EAFHI65r5mM/1/0/900w/canva-fondo-de-pantalla-tel%C3%A9fono-abstracto-pastel-xBWuYQ9y_78.jpg' }} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bienvenido de Nuevo</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          placeholderTextColor="#fff"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry={!contrasenaVisible}
            placeholderTextColor="#fff"
          />
          <TouchableOpacity onPress={() => setContrasenaVisible(!contrasenaVisible)} style={styles.passwordIcon}>
            <Icon name={contrasenaVisible ? 'eye-with-line' : 'eye'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Iniciar Sesión" onPress={iniciarSesion} color="#ff69b4" />
          <Button title="Registrarse" onPress={() => navigation.navigate('Registro')} color="#ff69b4" />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ff1493',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ff69b4',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 18,
    paddingHorizontal: 16,
    backgroundColor: '#ffb6c1',
    color: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    borderColor: '#ff69b4',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    backgroundColor: '#ffb6c1',
    color: '#fff',
  },
  passwordIcon: {
    position: 'absolute',
    right: 16,
    top: 12,
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default PantallaLogin;

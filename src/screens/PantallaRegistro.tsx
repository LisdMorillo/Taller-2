import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const PantallaRegistro = ({ navigation }: any) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] = useState(false);

  const manejarRegistro = () => {
    if (contrasena !== confirmarContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    console.log(`Nombre Completo: ${nombreCompleto}`);
    console.log(`Correo Electrónico: ${correo}`);
    console.log(`Número de Teléfono: ${telefono}`);
    console.log(`Contraseña: ${contrasena}`);
    
    Alert.alert('Registro Exitoso', `Nombre Completo: ${nombreCompleto}\nCorreo: ${correo}\nTeléfono: ${telefono}`);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://marketplace.canva.com/EAFHI65r5mM/1/0/900w/canva-fondo-de-pantalla-tel%C3%A9fono-abstracto-pastel-xBWuYQ9y_78.jpg' }} 
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Registro de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre Completo"
          value={nombreCompleto}
          onChangeText={setNombreCompleto}
          placeholderTextColor="#f8f8f8"
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
          placeholderTextColor="#f8f8f8"
        />
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
          placeholderTextColor="#f8f8f8"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Contraseña"
            value={contrasena}
            onChangeText={setContrasena}
            secureTextEntry={!mostrarContrasena}
            placeholderTextColor="#f8f8f8"
          />
          <TouchableOpacity onPress={() => setMostrarContrasena(!mostrarContrasena)} style={styles.passwordIcon}>
            <Icon name={mostrarContrasena ? 'eye-with-line' : 'eye'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirmar Contraseña"
            value={confirmarContrasena}
            onChangeText={setConfirmarContrasena}
            secureTextEntry={!mostrarConfirmarContrasena}
            placeholderTextColor="#f8f8f8"
          />
          <TouchableOpacity onPress={() => setMostrarConfirmarContrasena(!mostrarConfirmarContrasena)} style={styles.passwordIcon}>
            <Icon name={mostrarConfirmarContrasena ? 'eye-with-line' : 'eye'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Registrar" onPress={manejarRegistro} color="#ff69b4" />
          <Button title="Volver al Inicio" onPress={() => navigation.navigate('Inicio')} color="#ff69b4" />
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

export default PantallaRegistro;

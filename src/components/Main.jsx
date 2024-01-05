import React from "react";
import Peliculas from "./peliculas.jsx";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetallesPelis from "./detallesPeli.jsx";

// Crea un Stack Navigator para gestionar la navegación
const Stack = createStackNavigator();

// Componente principal que contiene la navegación de la aplicación
const Main = () => {
  return (
    <NavigationContainer>
      {/* Definición de las pantallas y configuración de la navegación */}
      <Stack.Navigator initialRouteName="ListaPeliculas" 
       screenOptions={{
        headerStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.9)', 
        },
        headerTintColor: '#FFFFFF', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        {/* Pantalla para la lista de películas */}
        <Stack.Screen
          name="ListaPeliculas"
          component={Peliculas}
          options={{ title: 'Lista de Películas' }}
        />
        {/* Pantalla para los detalles de una película */}
        <Stack.Screen
          name="DetallesPelicula"
          component={DetallesPelis}
          options={{ title: 'Detalles de la Película' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

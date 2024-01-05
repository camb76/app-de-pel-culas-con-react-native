// Importa los módulos necesarios de React y React Native
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

// Componente principal para la lista de películas
const MovieListComponent = () => {
  // Estado para almacenar la lista completa de películas
  const [movies, setMovies] = useState([]);
  
  // Estado para la consulta de búsqueda
  const [searchQuery, setSearchQuery] = useState('');
  
  // Estado para almacenar las películas filtradas
  const [filteredMovies, setFilteredMovies] = useState([]);
  
  // Instancia de la navegación para redireccionar a la pantalla de detalles
  const navigation = useNavigation();

  // Función que se ejecuta al cargar el componente para obtener las películas
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // Realiza una solicitud a la API de themoviedb para obtener películas populares
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=c4dca3e1b37d1bdaf18b73ea3eac958a"
        );
        // Actualiza tanto la lista completa como las películas filtradas
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error("Error al obtener datos de la API", error);
      }
    };

    // Llama a la función para obtener películas al cargar el componente
    fetchMovies();
  }, []);

  // Función para renderizar cada elemento de película en la lista
  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleMoviePress(item)}>
        <View style={styles.movieCard}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
            }}
            style={styles.movieImage}
          />
          <Text style={styles.movieTitle} numberOfLines={3}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Función para manejar el evento de cambio en la consulta de búsqueda
  const handleSearch = (query) => {
    // Actualiza la consulta de búsqueda en el estado
    setSearchQuery(query);
    
    // Filtra las películas basándose en la consulta de búsqueda
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    
    // Actualiza las películas filtradas
    setFilteredMovies(filtered);
  };

  // Función para manejar el evento de presionar una película
  const handleMoviePress = (movie) => {
    // Redirige a la pantalla de detalles y pasa la información de la película
    navigation.navigate("DetallesPelicula", { movie });
  };

  // Renderiza el componente principal
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Peli<Text style={styles.lastThreeLetters}>max</Text>
      </Text>
      
      {/* Componente TextInput para la búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar películas..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.subtitle}>peliculas populares</Text>
      {/* Renderiza la lista de películas o muestra un mensaje si no hay resultados */}
      {filteredMovies.length > 0 ? (
        <FlatList
          data={filteredMovies}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <Text>No se encontraron películas.</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
  },
  searchInput: {
    backgroundColor: "#ffffff",
    height: 40,
    margin: 10,
    paddingLeft: 10,
  },
  lastThreeLetters: {
    color: "red", 
  },

  subtitle: {
    color: "#ffffff",
    fontSize: 20,
    marginVertical: 20,
    marginLeft: 20,
  },

  title: {
    color: "#ffffff",
    fontSize: 40,
    textAlign: "center",
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  movieListContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  movieCard: {
    width: 180,
    
   
    borderRadius: 3,
    overflow: "hidden",
  },

  movieImage: {
    width: 150,
    height: 200,
    margin: "8%",
    borderRadius: 3,
  },

  movieTitle: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 20,
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "400",
  },
});

export default MovieListComponent;

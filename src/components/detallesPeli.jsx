import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';






const DetallesPelis = ({ route }) => {
    const { movie } = route.params;
  
    return (
        <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.appTitle}>Peli<Text style={styles.lastThreeLetters}>max</Text></Text>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }}
            style={styles.posterImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.subtitle}>{movie.overview}</Text>
            <Text style={styles.releaseDate}>{`Fecha de lanzamiento: ${movie.release_date}`}</Text>
            <Text style={styles.rating}>{`Calificación: ${movie.vote_average}/10`}</Text>
          </View>
        </View>
      </ScrollView>
    );
  };
  
  const deviceWidth = Dimensions.get('window').width;
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: "#000000"
    },
  


    lastThreeLetters: {
        color: 'red', // Puedes cambiar "red" al color que desees
      },

    appTitle: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 100,
      color:"#ffff"

    },
  
    contentContainer: {
      flexDirection: 'row',
      alignItems: 'flex-start',  // Alinea los elementos en la parte superior
      paddingHorizontal: 10,
    },
  
    posterImage: {
      width: deviceWidth * 0.5,
      height: deviceWidth * 0.8,
      resizeMode: 'cover',
      marginRight: 10,
    },
  
    detailsContainer: {
      flex: 1,
      justifyContent: 'flex-start',  // Alinea los elementos en la parte superior
    },
  
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'orange',
    },
  
    subtitle: {
      fontSize: 13,
      marginBottom: 10,
      color:"#ffff"
    },
  
    releaseDate: {
      fontSize: 13,
      color: 'gray',
      marginBottom: 10,
    },
  
    rating: {
      fontSize: 13,
      color: 'orange',
    },
  });
  




export default DetallesPelis
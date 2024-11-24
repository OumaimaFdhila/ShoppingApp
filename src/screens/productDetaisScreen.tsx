import React from "react";
import { StyleSheet, Text, View, Image, FlatList, useWindowDimensions, ScrollView, Pressable } from 'react-native';
import products from "../data/products";
import { useNavigation } from '@react-navigation/native'; 
const ProductDetailsScreen = () => {
  const product = products[0];
  const { width  } = useWindowDimensions();
  const navigation = useNavigation();

  const addToCart = () => {
    console.warn('add to cart');
    };
  return (
    <View>
      <ScrollView>
        <FlatList
        data={product.images}
        renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ajouter au panier</Text>
      </Pressable>
    </View>
  );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width: '50%',
      aspectRatio: 1,
    },
    title: {
      fontSize: 24, 
      fontWeight: "bold",
      marginVertical: 10,
    },
    price: {
      fontWeight: "500",
      fontSize: 18,
      letterSpacing: 1.2,
      marginVertical: 5,
    },
    description: {
      marginVertical: 10,
      fontSize: 14, 
      lineHeight: 20,
      fontWeight: "300",
      color: "#555",
      paddingBottom: 80,
    },
    button: {
      position: "absolute",
      backgroundColor: "black",
      bottom: 30,
      width: "90%",
      alignSelf: "center",
      padding: 15, // Ajusté pour un meilleur rendu
      borderRadius: 30, // Plus doux
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
  });

export default ProductDetailsScreen;
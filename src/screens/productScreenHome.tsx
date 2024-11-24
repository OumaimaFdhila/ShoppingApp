import React from "react";
import { StyleSheet, View, Image,FlatList, Pressable} from 'react-native';
import products from "../data/products";

;
const ProductScreenHome = ({ navigation }:any) => {


  return (
    <View>
        <FlatList
        data={products}
        renderItem={({ item }) => (
          <Pressable style={styles.itemContainer}  onPress={() => navigation.navigate("Product Details")}>
            <Image source={{ uri: item.image}} style={styles.image}  />
          </Pressable>
        )}
        numColumns={2}
        key={2}
        keyExtractor={(item) => item.id}
        />
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
      width: '100%',
      aspectRatio: 1,
    },
    itemContainer: {
      width: '50%',
    }
  });

export default ProductScreenHome;
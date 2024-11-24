import { FlatList, View, StyleSheet, Text, Pressable } from 'react-native';
import cart from '../data/card';
import CartListItem from "../../components/shoppingAppComponents/CartListItem";

const ShoppingCartTotals = () => (
  <View style={styles.totalsContainer}>
    <View style={styles.row}>
      <Text style={styles.text}>Subtotal</Text>
      <Text style={styles.text}>410.00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.text}>Delivery</Text>
      <Text style={styles.text}>10.00 US$</Text>
    </View>
    <View style={styles.row}>
      <Text style={styles.textBold}>Total</Text>
      <Text style={styles.textBold}>420.00 US$</Text>
    </View>
  </View>
);

const ShoppingCart = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingTop: 20,
    },
    totalsContainer: {
      margin: 20,
      paddingTop: 10,
      borderColor: 'gainsboro',
      borderTopWidth: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 2,
    },
    text: {
      fontSize: 16,
      color: 'gray',
    },
    textBold: {
      fontSize: 16,
      color: 'gray',
      fontWeight: '500',
    },
    button: {
      position: 'absolute',
      backgroundColor: 'black',
      bottom: 30,
      width: '90%',
      alignSelf: 'center',
      padding: 20,
      borderRadius: 100,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
    },

  });
  export default ShoppingCart
  
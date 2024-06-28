import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CurrencyCard = ({code, rate}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.code}>{code}</Text>
      <Text style={styles.rate}>{rate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  code: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 16,
  },
});

export default CurrencyCard;

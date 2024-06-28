import React, {useContext, useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {CurrencyContext} from '../contexts/CurrencyContext';

const ConversionScreen = () => {
  const {rates} = useContext(CurrencyContext);
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState(null);

  const handleConvert = code => {
    const result = parseFloat(amount) * rates[code];
    setConverted(result);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in INR"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Button title="Convert" onPress={() => handleConvert('USD')} />
      {converted && <Text>Converted Amount: {converted}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ConversionScreen;

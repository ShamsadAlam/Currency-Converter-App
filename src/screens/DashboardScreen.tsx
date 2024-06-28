import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CurrencyContext} from '../contexts/CurrencyContext';
import CurrencyCard from '../components/CurrencyCard';

const DashboardScreen = () => {
  const {rates, loading, error} = useContext(CurrencyContext);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading rates.</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(rates).slice(0, 10)}
        keyExtractor={item => item}
        renderItem={({item}) => <CurrencyCard code={item} rate={rates[item]} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default DashboardScreen;

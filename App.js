import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { keccak256 } from 'thor-devkit'
import { DAppKit } from "@vechain/dapp-kit"

export default function App() {

  const dappKit = new DAppKit({
    //Required
    nodeUrl: 'https://sync-testnet.vechain.org/',
    // Required if not connecting to the mainnet
    genesis: 'test',
  });

  return (
    <View style={styles.container}>
      <Text>Verifying functionality:</Text>
      <Text>{keccak256('hello world').toString('hex')}</Text>
      <StatusBar style="auto" />
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
});

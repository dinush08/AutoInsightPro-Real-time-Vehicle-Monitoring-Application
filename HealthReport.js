import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HealthReport() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Vehicle Health Report</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: 'white',
    fontFamily: "Times New Roman"
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function TabOneScreen() {
  const [number, setNumber] = useState('');

  const handlePress = (num) => {
    if (num === 'C') {
      handleClear();
    } else {
      setNumber(number + num);
    }
  };

  const handleClear = (longPress) => {
    if (longPress) {
      setNumber('');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const renderButton = (num) => {
    let buttonBackgroundColor = "#fff";
    if (num === '+') {
      buttonBackgroundColor = "#D3D3D3";
    } else if (num === 'L') {
      buttonBackgroundColor = "#90EE90";
    } else if (num === 'C') {
      buttonBackgroundColor = "#D3D3D3";
    }

    return (
      <TouchableOpacity
        key={num}
        onPress={() => handlePress(num)}
        onLongPress={() => handleClear(true)}
        style={[styles.buttonContainer, { backgroundColor: buttonBackgroundColor }]}
      >
        <Text style={styles.buttonText}>{num}</Text>
      </TouchableOpacity>
    );
  };

  const renderRow = (nums) => {
    return (
      <View style={styles.row}>
        {nums.map((num) => renderButton(num))}
      </View>
    );
  };

  const renderNumpad = () => {
    const numpad = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      ['*', 0, '#'],
      ['+', 'L', 'C'],
    ];

    return (
      <View style={styles.numpad}>
        {numpad.map((row) => renderRow(row))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
      {renderNumpad()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD580',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numpad: {
    marginTop: '0.5%',
    marginBottom:'0.5%',
    backgroundColor: '#E0E5EC',
    borderRadius: 20,
    padding: 20,
    paddingBottom: 30,
    width: 300,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 2,
  },
  buttonText: {
    fontSize: 30,
  },
  numberText: {
    fontSize: 60,
    marginBottom: 30,
  },
});

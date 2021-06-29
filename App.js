import React, {useState} from 'react';

import {
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Snackbar from 'react-native-snackbar';

  const currencyPerRupee = {
    DOLLAR: 0.014,
    EURO: 0.012,
    POUND: 0.93,
    RUBEL: 0.93,
    BITCOIN: 0.000002,
    YEN: 1.54,
  };

  const App = () => {
  const [inputValue, SetInput] = useState(0);
  const [resetInput, SetResetInput] = useState(0);

  const buttonPressed = currency => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'Error - enter a value ',
        backgroundColor: '#EA7773',
        textColor: '#000000',
      });
    }
    let result = parseFloat(inputValue) * currencyPerRupee[currency];
    SetResetInput(result.toFixed(2));
    
  };

  return (
    <ScrollView backgroundColor="#132c33"
    keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        <View>
          <Image
            source={{uri: 'https://i.ibb.co/MB4f93Y/rlogo.png'}}
            style={styles.image}
          />
          <Text style={styles.resultText}>Currency App</Text>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>{resetInput}</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            keyboardType="numeric"
            placeholder="Enter the value"
            placeholderTextColor="#51c4d3"
            value={inputValue}
            onChangeText={(inputValue) => SetInput(inputValue)}
          />
        </View>
        <View style={styles.convertButtonbox}>
          {Object.keys(currencyPerRupee).map((currency) => (
            <TouchableOpacity
              onPress={() => buttonPressed(currency)}
              style={styles.convertButton}
              key={currency}>
              <Text style={styles.inputText}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132c33',
  },
  resultText: {
    fontSize: 30,
    color: '#51c4d3',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginStart: 10,
    justifyContent: 'center',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#126e82',
  },
  inputText: {
    fontSize: 20,
    color: '#51c4d3',
  },
  inputContainer: {
    height: 70,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#126e82',
  },
  convertButtonbox: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 10,
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,

    width: '33%',
    height: 100,
    borderColor: '#51c4d3',
    borderWidth: 2,
    borderRadius: 4,
  },
});

export default App;

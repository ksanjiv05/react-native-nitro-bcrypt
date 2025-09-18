import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { ReactNativeNitroBcrypt } from 'react-native-react-native-nitro-bcrypt';

function App(): React.JSX.Element {
  const [password, setPassword] = React.useState('');
  const [password2, setPassword2] = React.useState('');
  const [salt, setSalt] = React.useState('12');
  const [hash, setHash] = React.useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Nitro Bcrypt demo</Text>
      <View style={{ width: 200 }}>
        <Text style={styles.subtitle}>Generate Hash</Text>
        <Text>Enter text</Text>
        <TextInput
          style={styles.textInput}
          placeholder="text"
          value={password}
          onChangeText={setPassword}
        />
        <Text>Enter salt (default 12)</Text>
        <TextInput
          style={styles.textInput}
          placeholder="salt"
          value={salt}
          onChangeText={setSalt}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            setHash(ReactNativeNitroBcrypt.generateHash(password, Number(salt)))
          }
        >
          <Text>Generate Hash</Text>
        </TouchableOpacity>

        {hash && <Text>{hash}</Text>}

        <Text style={[styles.subtitle, { marginTop: 20 }]}>Verify Hash</Text>
        <Text>Original Text</Text>
        <TextInput
          placeholder="text"
          style={styles.textInput}
          value={password2}
          onChangeText={setPassword2}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            ReactNativeNitroBcrypt.validatePassword(password2, hash)
              ? Alert.alert('valid')
              : Alert.alert('invalid')
          }
        >
          <Text>Verify Hash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#10d39cff',
    fontWeight: '600',
    position: 'absolute',
    top: 100,
  },
  subtitle: {
    fontSize: 20,
    color: '#000000ff',
    fontWeight: '600',
  },
  textInput: {
    width: 200,
    fontSize: 20,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  button: {
    width: 200,
    fontSize: 20,
    // borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#10d39cff',
  },
});

export default App;

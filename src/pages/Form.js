import React from 'react';
import { Text, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import FIREBASE from "../config/FIREBASE";
import Container from '../components/Container';
import Footer from '../components/footer/Footer';

export default function Form({navigation}) {
  const [inputWord, setInputWord] = React.useState( '' );
    return (
      <Container>
        <Container style={{justifyContent: 'center', alignItems: 'center'}}>
          <TextInput
            style={ styles.textInput }
            value={ inputWord }
            onChangeText={ value => setInputWord( value ) }
          />
          <TouchableOpacity
            style={ styles.touchableOpacity }
            onPress={ () => {
              if( inputWord === '' ) { return; }
              const ctFIREBASE = FIREBASE.database().ref('Notepad')
              const Notepad = {
                id: new Date().getTime().toString(),
                word: inputWord,
              };
              ctFIREBASE
              .push(Notepad)
              .then((data) => {})
              .catch((error) => {
                console.log("Error : ", error)
              })
              setInputWord( '' );
            } }
          >
            <Text style={styles.text} >Sub</Text>
          </TouchableOpacity>
        </Container>
      </Container>
    )
}

const styles = StyleSheet.create({
  textInput: {
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  touchableOpacity: {
    padding: 10,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  }
});
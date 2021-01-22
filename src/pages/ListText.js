import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import FIREBASE from "../config/FIREBASE";

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      notepad: {},
      notepadKey: []
    }
  }
  componentDidMount() {
    FIREBASE.database()
      .ref("Notepad")
      .once('value', (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let notepadItem = {...data};
        this.setState({
          notepad: notepadItem,
          notepadKey: Object.keys(notepadItem)
        })
      })
  }
  render() {
    const { notepad, notepadKey } = this.state
    return (
      <ScrollView style={{ flex: 1 }}>
        { notepadKey.length > 0 ? (
          notepadKey.map((key) => (
            <Text key={key}>{ notepad[key].word }</Text>
          ))
        ) : (
          <Text>데이터를 불러오는 중 입니다</Text>
        )}
      </ScrollView>
    )
  }
}


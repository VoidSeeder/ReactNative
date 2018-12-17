import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

class Exibir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      estado: true
    };
  }

  mudar = () => {
    this.setState({ estado: !this.state.estado });
  }

  render() {
    let nome = this.state.estado ? 'João' : 'Maria';
    return (
      <Text>Hello {nome}!</Text>
    );
  }
}

export default class App extends React.Component {

  nome = 'João';

  cor = 'blue';

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Header</Text>
        </View>
        <View style={styles.content}>
          <Text>{this.nome}</Text>
          <Button
            style={styles.botao}
            onPress={Exibir.mudar}
            title="Pressione-me por favor"
          />
          <Exibir />
        </View>
        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: '#ff3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#ff3e3e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    color: this.cor,
  }
});

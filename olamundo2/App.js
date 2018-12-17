import React from 'react';
import { Text, View, Button } from 'react-native';

import { Scene, Router } from 'react-native-router-flux';

import { Styles } from './styles/Styles.js';
import { Header } from './components/Header.js';
import { Footer } from './components/Footer.js';
import { Conteudo } from './components/Conteudo.js';
import { Busca } from './components/Busca.js';

/*
class Exibir extends Component {
 constructor(props) {
   super(props);
   this.state = {
     estado: true
   };
 }

 static mudar = () => {
   this.setState({ estado: false });
 }

 render() {
   let nome = this.state.estado ? 'João' : 'Maria';
   return (
     <Text>Hello {nome}!</Text>
   );
 }
}
*/

//type Props = {};

export default class App extends React.Component/*<Props>*/ {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'João'
    };
  }

  mudar = () => {
    if (this.state.nome == 'João') {
      this.setState({ nome: 'Maria' });
    } else {
      this.setState({ nome: 'João' });
    }
  }

  /* ISO NAO FUNCIONA
  nome = 'João';

  mudar = () => {
    if (nome == 'João') {
      nome = 'Maria';
    } else {
      nome = 'João';
    }
  }
  */

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.flex1}>
          <Header />
        </View>
        {/*
        <View style={Styles.content}>
          <Text style={Styles.nome}>
            {this.state.nome}
          </Text>
          <Button
            style={Styles.botao}
            onPress={this.mudar}
            title="Pressione-me por favor"
          />
        </View>
        <Conteudo cidade='uberlandia' uf='mg' />
        */}
        <View style={Styles.flex5}>
          <Router styles={Styles.content}>
            <Scene key="root">
              <Scene key="busca"
                component={Busca}
                animation='fade'
                hideNavBar={true}
                initial={true}
              />
              <Scene key="conteudo"
                component={Conteudo}
                animation='fade'
                hideNavBar={true}
                initial={false}
              />
            </Scene>
          </Router>
        </View>
        <View style={Styles.flex1}>
          <Footer />
        </View>
      </View>
    );
  }
}

import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Styles } from '../styles/Styles.js';

export class Busca extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cidade: 'Cidade',
            uf: 'Estado',
            softCidade: 'grey',
            softUf: 'grey'
        }
    }

    buscar(obj) {
        Actions.conteudo(obj);
    }

    handleCidade(text) {
        this.setState({
            cidade: text
        })
    }

    handleUf(text) {
        this.setState({
            uf: text
        })
    }

    render() {
        return (
            <View style={Styles.busca}>
                <View
                    style={{
                        alignSelf: 'center'
                    }}
                >
                    <Text style={Styles.titulo}>Busca</Text>
                </View>
                <View
                    style={{
                        flex: 0.2,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: 100,
                                borderColor: 'gray',
                                borderWidth: 1,
                                color: this.state.softCidade
                            }}
                            onChangeText={(text) => this.handleCidade(text)}
                            value={this.state.cidade}
                            onFocus={() => {
                                if (this.state.cidade == 'Cidade') {
                                    this.setState({
                                        cidade: '',
                                        softCidade: 'black'
                                    })
                                }
                            }}
                        />
                    </View>
                    <View>
                        <TextInput
                            style={{
                                height: 40,
                                width: 50,
                                borderColor: 'gray',
                                borderWidth: 1,
                                color: this.state.softUf
                            }}
                            onChangeText={(text) => this.handleUf(text)}
                            value={this.state.uf}
                            onFocus={() => {
                                if (this.state.uf == 'Estado') {
                                    this.setState({
                                        uf: '',
                                        softUf: 'black'
                                    })
                                }
                            }}
                        />
                    </View>
                    <Button
                        style={Styles.botao}
                        onPress={() => this.buscar(this.state)}
                        title="Buscar"
                    />
                </View>
            </View >
        );
    }
}
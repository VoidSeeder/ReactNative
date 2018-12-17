import React from 'react';
import { Text, View, Button, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Styles } from '../styles/Styles.js';
import { Tempo } from './Tempo.js'

export class Conteudo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cidade: '',
            uf: '',
            pais: '',
            tempMax: '',
            tempMin: '',
            condicao: '',
            montar: false
        }

        Tempo.previsao(props.cidade, props.uf)
            .then((resposta) => {
                this.setState({
                    cidade: resposta.channel.location.city,
                    pais: resposta.channel.location.country,
                    uf: resposta.channel.location.region,
                    tempMax: resposta.channel.item.forecast[1].high,
                    tempMin: resposta.channel.item.forecast[1].low,
                    condicao: resposta.channel.item.forecast[1].text,
                    montar: true,
                })
            });

    }

    voltar() {
        Actions.busca();
    }

    render() {
        if (this.state.montar) {
            return (
                <View style={Styles.conteudo}>
                    <Text>Previsão do tempo para: {this.state.cidade},{this.state.uf} - {this.state.pais}</Text>
                    <Text>{'Máxima: '}{this.state.tempMax}{' °F'}</Text>
                    <Text>{'Mínima: '}{this.state.tempMin}{' °F'}</Text>
                    <Text>{'Condição: '}{this.state.condicao}</Text>
                    <Button
                        style={Styles.botao}
                        onPress={this.voltar}
                        title="Voltar"
                    />
                </View>
            );
        } else {
            return (
                <View style={Styles.conteudo}>
                    <Image
                        style={{ width: 200, height: 200 }}
                        source={require('../styles/loading.gif')}
                    />
                </View>
            )
        }
    }
}
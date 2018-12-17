import React from 'react';

/*
https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather
.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20
where%20text%3D%22uberlandia%2C%20mg%22)&format=json&env=store%3A%2F%2Fdatatables
.org%2Falltableswithkeys
*/

const urlInicio = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22';

const urlMeio = '%2C%20';

const urlFim = '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

export class Tempo {

    /*
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }
    response.json().query.results.channel.item.forecast[1]
    */

    static obterTempo(cidade, uf) {
        return fetch(urlInicio + cidade + urlMeio + uf + urlFim)
        .then((response) => response.json())
        .then((responseJson) => {
            //return responseJson.query.results.channel.item.forecast[1];
            return responseJson.query.results;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    static previsao(cidade, uf) {
        return Promise.resolve(this.obterTempo(cidade, uf));
    }
}
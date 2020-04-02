import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed: this.props.data
        };

        this.carregaIcone = this.carregaIcone.bind(this);
        this.mostraLikes = this.mostraLikes.bind(this);
        this.like = this.like.bind(this);
    }
    
    carregaIcone(likeada) {
        // return likeada ? require('../img/likeada.png') : 
        //     require('../img/like.png')
        if(likeada === true) {
            return require('../img/likeada.png');
        } else {
            return  require('../img/like.png')
        }
    }

    like() {
        let feed = this.state.feed;

        if(feed.likeada === true) {
            this.setState({
                feed: {
                    ...feed,
                    likeada: false,
                    likers: feed.likers - 1,
                }
            });
        } else {
            this.setState({
                feed: {
                    ...feed,
                    likeada: true,
                    likers: feed.likers + 1,
                }
            })
        }
    }

    mostraLikes(likers) {
        let feed = this.state.feed;

        if(feed.likers <= 0) {
            return;
        } else {
            return(
                <Text style={styles.likes} >
                    {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
                </Text>
            );
        }
    }


    render() {
        return(
            <View style={styles.container}>

                <View style={styles.areaFeed}>
                    <Image 
                    source={{ uri: this.state.feed.imgperfil }}
                    style={styles.fotoPerfil}
                    />

                    <Text style={styles.nomeUsuario}>
                        {this.state.feed.nome}
                    </Text>
                </View>

                <Image 
                resizeMode="cover"
                source={{ uri: this.state.feed.imgPublicacao }}
                style={styles.fotoPubli}
                />

                <View style={styles.areaBtn}>
                    <TouchableOpacity onPress={this.like} >
                        <Image 
                        source={this.carregaIcone(this.state.feed.likeada)}
                        style={styles.icone}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnSend} >
                        <Image 
                        source={require('../img/send.png')}
                        style={styles.icone}
                        />
                    </TouchableOpacity>
                </View>

                {this.mostraLikes(this.state.feed.likers)}

                <View style={styles.viewRodape} >
                    <Text style={styles.nomeRodape} >
                        {this.state.feed.nome}
                    </Text>

                    <Text style={styles.descRodape} >
                        {this.state.feed.descricao}
                    </Text>
                </View>
            
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    container: {
        
    },
    nomeUsuario: {
        fontSize: 23,
        marginLeft: 10,
        textAlign: 'left',
        color: '#000',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPubli: {
        flex: 1,
        height: 400,
        alignItems: 'center',
    },
    areaFeed: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5
    },
    icone: {
        width: 33,
        height: 33
    },
    btnSend: {
        paddingLeft: 5
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000'
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingLeft: 5
    },
    likes: {
        fontSize: 13,
        paddingLeft: 5,
        fontWeight: 'bold'
    }
});
import React, { PureComponent } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

class Pokemon extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        title: `${navigation.getParam('name')} Info`
    })

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.pokemonImage} />
                <Text style={styles.nameOfPokemon}>{navigation.getParam('name')}</Text>
            </View>
        );
    }
}

export default Pokemon;

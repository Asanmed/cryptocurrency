import React from 'react';

const cc = require('cryptocompare');

export const AppContext = React.createContext();

const MAX_FAVORITES = 10;

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            favorites: ['BTC', 'ETH', 'XMR', 'DOGE'],
            ...this.savedSettings(),
            setPage: this.setPage,
            addCoin: this.addCoin,
            removeCoin: this.removeCoin,
            isInFavorites: this.isInFavorites,
            confirmFavorites: this.confirmFavorites,
            setFilteredCoins: this.setFilteredCoins,
        };
    }

    componentDidMount = () => {
        this.fetchCoins();
    };

    fetchCoins = async () => {
        try {
            let coinList = await cc.coinList();
            coinList = coinList.Data;
            console.log(coinList);
            this.setState({ coinList });
        } catch (error) {
            console.log(error);
        }
    };

    addCoin = (key) => {
        let favorites = [...this.state.favorites];
        if (favorites.length < MAX_FAVORITES) {
            favorites.push(key);
            this.setState({ favorites });
        }
    };

    isInFavorites = (key) => {
        let favorites = [...this.state.favorites];
        return favorites.includes(key);
    };
    removeCoin = (key) => {
        let favorites = [...this.state.favorites];

        favorites = [...favorites.filter((e) => e !== key)];

        this.setState({ favorites });
    };

    confirmFavorites = () => {
        this.setState({
            firstVisit: false,
            page: 'dashboard',
        });
        localStorage.setItem(
            'cryptoDash',
            JSON.stringify({
                favorites: this.state.favorites,
            })
        );
    };
    savedSettings() {
        let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
        if (!cryptoDashData) {
            return { page: 'settings', firstVisit: true };
        }
        let { favorites } = cryptoDashData;
        return { favorites };
    }

    setFilteredCoins = (filteredCoins) => {
        this.setState({ filteredCoins });
    };

    setPage = (page) => this.setState({ page });

    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
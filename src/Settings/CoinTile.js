import React from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import { CoinHeaderGrid } from './CoinHeaderGrid';

const clickCoinHandler = (topSection, key, addCoin, removeCoin) => {
    return topSection ? () => removeCoin(key) : () => addCoin(key);
};

const CoinTile = ({ coinKey, topSection }) => {
    return (
        <AppContext.Consumer>
            {({ coinList, addCoin, removeCoin, isInFavorites }) => {
                let coin = coinList[coinKey];

                let TileClass = SelectableTile;
                if (topSection) {
                    TileClass = DeletableTile;
                } else if (isInFavorites(coinKey)) {
                    TileClass = DisabledTile;
                }

                return (
                    <TileClass
                        onClick={clickCoinHandler(
                            topSection,
                            coinKey,
                            addCoin,
                            removeCoin
                        )}
                    >
                        <CoinHeaderGrid
                            name={coin.CoinName}
                            symbol={coin.Symbol}
                            topSection={topSection}
                        />
                        <CoinImage coin={coin} />
                    </TileClass>
                );
            }}
        </AppContext.Consumer>
    );
};

export default CoinTile;

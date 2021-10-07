import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';
const StyledCoingGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;

function getLowerSectionCoins(coinList, filteredCoins) {
    console.log('getLowerSectionCoins', filteredCoins);
    return (
        (filteredCoins && Object.keys(filteredCoins)) ||
        Object.keys(coinList).slice(0, 100)
    );
}

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
    return topSection
        ? favorites
        : getLowerSectionCoins(coinList, filteredCoins);
};

const CoinGrid = ({ topSection }) => {
    return (
        <AppContext.Consumer>
            {({ coinList, favorites, filteredCoins }) => (
                <StyledCoingGrid>
                    {getCoinsToDisplay(
                        coinList,
                        topSection,
                        favorites,
                        filteredCoins
                    ).map((e) => (
                        <CoinTile coinKey={e} topSection={topSection} />
                    ))}
                </StyledCoingGrid>
            )}
        </AppContext.Consumer>
    );
};

export default CoinGrid;

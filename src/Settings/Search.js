import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import _ from 'lodash';
import fuzzy from 'fuzzy';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
    ${backgroundColor2};
    ${fontSize2};
    color: white;
    border: 1px solid;
    height: 25px;
    place-self: center left;
`;

//debounce is used here for not sending too many events
const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
    //get all the coins symbols
    let coinSymbols = Object.keys(coinList);
    //get all the coins names and map symbol to name
    let coinNames = coinSymbols.map((symbol) => coinList[symbol].CoinName);
    let allStringsToSearch = coinSymbols.concat(coinNames);

    let fuzzyResults = fuzzy
        .filter(inputValue, allStringsToSearch, {})
        .map((el) => el.string);

    let filteredCoins = _.pickBy(coinList, (result, symbolKey) => {
        let coinName = result.CoinName;
        return (
            _.includes(fuzzyResults, symbolKey) ||
            _.includes(fuzzyResults, coinName)
        );
    });
    console.log(filteredCoins);
    setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (event, setFilteredCoins, coinList) => {
    let inputValue = event.target.value;
    if (!inputValue) {
        setFilteredCoins(null);
    }
    handleFilter(inputValue, coinList, setFilteredCoins);
};

const Search = () => {
    return (
        <AppContext.Consumer>
            {({ setFilteredCoins, coinList }) => (
                <SearchGrid>
                    <h2>Search all coins</h2>
                    <SearchInput
                        onKeyUp={(event) =>
                            filterCoins(event, setFilteredCoins, coinList)
                        }
                    />
                </SearchGrid>
            )}
        </AppContext.Consumer>
    );
};

export default Search;

import styled from 'styled-components';
import { DeletableTile } from '../Shared/Tile';

export const StyledCoinGridHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
    justify-self: right;
`;

const DeleteIcon = styled.div`
    justify-self: right;
    display: none;
    ${DeletableTile}:hover & {
        display: block;
        color: red;
    }
`;

export const CoinHeaderGrid = ({ name, symbol, topSection }) => {
    return (
        <StyledCoinGridHeader>
            <div>{name}</div>
            {topSection ? (
                <DeleteIcon>X</DeleteIcon>
            ) : (
                <CoinSymbol>{symbol}</CoinSymbol>
            )}
        </StyledCoinGridHeader>
    );
};

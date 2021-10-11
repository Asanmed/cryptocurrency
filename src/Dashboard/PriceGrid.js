import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import PriceTile from './PriceTile';

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 15px;
    margin-top: 40px;
    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

const PriceGrid = () => {
    return (
        <AppContext.Consumer>
            {({ prices }) => (
                <Grid>
                    {prices.map((price, index) => (
                        <PriceTile
                            key={`pricetile${index}`}
                            price={price}
                            index={index}
                        />
                    ))}
                </Grid>
            )}
        </AppContext.Consumer>
    );
};

export default PriceGrid;

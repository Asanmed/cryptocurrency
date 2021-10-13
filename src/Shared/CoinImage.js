import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.img`
    height: 50px;
    ${(props) =>
        props.spotlight &&
        css`
            display: block;
            height: 200px;
            margin: 0 auto;
        `}
`;

const CoinImage = ({ coin, spotlight }) => {
    return (
        <Wrapper
            spotlight={spotlight}
            alt={coin.CoinSymbol}
            src={`http://cryptocompare.com/${coin.ImageUrl}`}
        ></Wrapper>
    );
};

export default CoinImage;

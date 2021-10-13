import React from 'react';
import { AppContext } from '../App/AppProvider';

import styled from 'styled-components';
import { fontSize1, greenBoxShadow, color3 } from '../Shared/Styles';

const StyledConfirmSettingsButton = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    cursor: pointer;
    &:hover {
        ${greenBoxShadow}
    }
`;

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`;

const ConfirmButton = () => {
    return (
        <AppContext.Consumer>
            {({ confirmFavorites }) => {
                return (
                    <CenterDiv>
                        <StyledConfirmSettingsButton
                            onClick={() => confirmFavorites()}
                        >
                            Confirm Favorites
                        </StyledConfirmSettingsButton>
                    </CenterDiv>
                );
            }}
        </AppContext.Consumer>
    );
};

export default ConfirmButton;

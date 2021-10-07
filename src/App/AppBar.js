import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`;

const Logo = styled.div`
    font-size: 1.5em;
`;

const ControlButtonEl = styled.div`
    cursor: pointer;
    font-size: 1.1em;
    text-transform: capitalize;
    padding-right: 5px;
    ${(props) =>
        props.active &&
        css`
            font-weight: 900;
            text-shadow: 5px 5px 30px white;
        `};
`;

const ControlButton = ({ name }) => {
    return (
        <AppContext.Consumer>
            {({ page, setPage }) => (
                <ControlButtonEl
                    active={page === name}
                    onClick={() => setPage(name)}
                >
                    {name}
                </ControlButtonEl>
            )}
        </AppContext.Consumer>
    );
};

const AppBar = () => {
    return (
        <Wrapper>
            <Logo>CryptoDash</Logo>
            <div />
            <ControlButton name="dashboard" />
            <ControlButton name="settings" />
        </Wrapper>
    );
};

export default AppBar;

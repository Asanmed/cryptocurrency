import styled from 'styled-components';
import Page from '../Shared/Page';
import CoinSpotlight from './CoinSpotlight';
import PriceChart from './PriceChart';
import PriceGrid from './PriceGrid';

const ChartGrid = styled.div`
    display: grid;
    margin-top: 20px;
    grid-gap: 15px;
    grid-template-columns: 1fr 3fr;

    @media (max-width: 700px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

const Settings = () => {
    return (
        <Page name="dashboard">
            <PriceGrid />
            <ChartGrid>
                <CoinSpotlight />
                <PriceChart />
            </ChartGrid>
        </Page>
    );
};

export default Settings;

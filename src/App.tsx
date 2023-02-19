import React from 'react';
import { AppProvider } from './domain/reducers/context';
import GlobalStyle from './styles/GlobalStyle';
import Title from './components/Title';
import FilterInput from './components/FilterInput';
import styled from 'styled-components';
import AppLoader from './domain/application/AppLoader';
import Datatable from './domain/application/Datatable';

export const DATA_TEST_ID = 'app';

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  header {
    margin: 2rem;
  }
`;

function App() {
  return (
    <AppProvider>
      <Container className="App" data-testid={DATA_TEST_ID}>
        <GlobalStyle />
        <header>
          <Title title={`Atari 2600 games datatabl`} />
          <FilterInput />
        </header>

        <main>
          <Datatable />
        </main>
        <AppLoader />
      </Container>
    </AppProvider>
  );
}

export default App;

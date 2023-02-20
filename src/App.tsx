import React from 'react';
import { AppProvider } from './domain/reducers/context';
import GlobalStyle from './styles/GlobalStyle';
import Title from './components/Title';
import styled from 'styled-components';
import AppLoader from './domain/application/AppLoader';
import Datatable from './domain/application/Datatable';
import CreateGameButton from './domain/application/CreateGameButton';
import QueryGameByTextInput from './domain/application/QueryGameByText';
import { PageProvider } from './domain/service/pagination.context';

export const DATA_TEST_ID = 'app';

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;

  header {
    margin: 2rem;
  }

  main {
    position: relative;
    margin-bottom: 2rem;
  }
`;

function App() {
  return (
    <PageProvider>
      <AppProvider>
        <Container className="App" data-testid={DATA_TEST_ID}>
          <GlobalStyle />
          <header>
            <Title title={`Atari 2600 games datatable`} />
            <QueryGameByTextInput />
          </header>

          <main>
            <Datatable />
            <CreateGameButton />
          </main>
          <AppLoader />
        </Container>
      </AppProvider>
    </PageProvider>
  );
}

export default App;

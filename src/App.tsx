import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Title from './components/Title';
import FilterInput from './components/FilterInput';
import Table from './components/Table';

export const DATA_TEST_ID = 'app';

function App() {
  return (
    <div className="App" data-testid={DATA_TEST_ID}>
      <GlobalStyle />
      <Title title={`Atari 2600 games datatabl`} />
      <main>
        <FilterInput />
        <Table games={[]} />
      </main>
    </div>
  );
}

export default App;

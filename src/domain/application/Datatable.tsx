import React, { useContext, useEffect } from 'react';
import Table from '../../components/Table';
import { AppContext } from '../reducers/context';
import EditableItem from './EditableItem';
import { PageProvider, PageContext, SortType } from '../service/pagination.context';
import styled from 'styled-components';
import Button from '../../components/Button';

const PaginationLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Press Start 2P', monospace, cursive;
  font-size: 1rem;
`;
const Pagination = () => {
  const { page, pageLinks, setPageLinks } = useContext(PageContext);
  const { loadGames } = useContext(AppContext);

  useEffect(() => {
    loadGames();
  }, [page]);

  return (
    <PaginationLinks>
      <Button
        label={`<<`}
        onClick={() => {
          pageLinks.first && setPageLinks({ page: pageLinks.first, pageLinks });
        }}
      />
      <Button
        label={`<`}
        onClick={() => {
          pageLinks.prev && setPageLinks({ page: pageLinks.prev, pageLinks });
        }}
      />
      {page}
      <Button
        label={`>`}
        onClick={() => {
          pageLinks.next && setPageLinks({ page: pageLinks.next, pageLinks });
        }}
      />
      <Button
        label={`>>`}
        onClick={() => {
          pageLinks.last && setPageLinks({ page: pageLinks.last, pageLinks });
        }}
      />
    </PaginationLinks>
  );
};

const RetroSelect = styled.select`
  padding: 4px;
  font-size: 0.8rem;
  font-family: 'Press Start 2P', monospace, cursive;
`;
const SortOptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: 'Press Start 2P', monospace, cursive;
  font-size: 0.8rem;
  margin: 1rem auto;
`;

const Sorting = () => {
  const {
    sort: { field, order },
    setSort,
  } = useContext(PageContext);
  const { loadGames } = useContext(AppContext);

  useEffect(() => {
    loadGames();
  }, [field, order]);

  return (
    <SortOptions>
      Sorted by
      <label>
        name{' '}
        <input
          type="radio"
          onChange={() => {
            setSort({ field: 'name', order });
          }}
          defaultChecked={field === 'name'}
          value="name"
          name="field"
        />{' '}
      </label>
      <label>
        rating
        <input
          type="radio"
          onChange={() => {
            setSort({ field: 'rating', order });
          }}
          defaultChecked={field === 'rating'}
          value="rating"
          name="field"
        />
      </label>
      <label>
        first release date
        <input
          type="radio"
          onChange={() => {
            setSort({ field: 'firstReleaseDate', order });
          }}
          defaultChecked={field === 'firstReleaseDate'}
          value="firstReleaseDate"
          name="field"
        />{' '}
      </label>
      in order
      <RetroSelect
        defaultValue={order}
        onChange={(event) => {
          setSort({ field, order: event.target.value } as SortType);
        }}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </RetroSelect>
    </SortOptions>
  );
};

const Datatable = () => {
  const { loadGames, games, errorMessage } = useContext(AppContext);

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <>
      <Table games={games} renderRow={EditableItem} errorMessage={errorMessage} />
      <Sorting />
      <Pagination />
    </>
  );
};

export default Datatable;

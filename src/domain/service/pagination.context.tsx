import React, { createContext, useState } from 'react';

type PageShape = {
  page: number;
  pageLinks: PageLinksType;
};

export type SortType = {
  field: 'name' | 'rating' | 'firstReleaseDate';
  order: 'asc' | 'desc';
};
export type PageLinksType = {
  next?: number;
  prev?: number;
  first?: number;
  last?: number;
};
type ContextType = PageShape & {
  setPageLinks: (pageContext: PageShape) => void;
} & { sort: SortType } & { setSort: (sort: SortType) => void };

const PageContext = createContext<ContextType>({
  page: 1,
  pageLinks: {},
  setPageLinks: () => null,
  sort: { field: 'name', order: 'asc' },
  setSort: () => null,
});

const PageProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [{ page, pageLinks }, setPageLinks] = useState({ page: 1, pageLinks: {} });
  const [sort, setSort] = useState({ field: 'name', order: 'asc' } as SortType);
  return (
    <PageContext.Provider value={{ page, pageLinks, setPageLinks, sort, setSort }}>{children}</PageContext.Provider>
  );
};

export { PageProvider, PageContext };

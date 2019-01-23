import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import PostList from 'components/list/PostList';
import Pagaination from 'components/list/Pagination';

const ListPage = () => {
  return (
    <PageTemplate>
      <ListWrapper>
        <PostList/>
         <Pagaination/>
      </ListWrapper>
    </PageTemplate>
  );
};

export default ListPage;

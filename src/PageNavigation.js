import React from 'react';
import { Pagination, Stack } from '@mui/material';
// import './PageNavigation.css';

function PageNavigation({ totalCards, cardsPerPage, onPageChange, currentPage }) {
  const pageCount = Math.ceil(totalCards / cardsPerPage);

  return ( 
    <div className="pagination-container">
      <Stack spacing={2}>
        <Pagination
          count={pageCount}
          page={currentPage}
          onChange={(event, page) => onPageChange(page)}
          shape="rounded"
          variant="outlined"
          color="primary"
        />
      </Stack>
    </div>
  );
}

export default PageNavigation;

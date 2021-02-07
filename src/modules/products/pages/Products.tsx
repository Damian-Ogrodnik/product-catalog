import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchProductsAsync } from '../store';
import { AppRoute } from 'routing/AppRoute.enum';

export const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchProductsAsync.request({
        parse: 'en',
        limit: 5,
        pageNumber: 2,
        activeFilter: false,
        promoFilter: false,
      }),
    );
  }, []);
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.login}> Login </Link>
    </>
  );
};

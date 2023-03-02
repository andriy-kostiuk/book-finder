import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from './styled';

const SearchForm: FC = () => {
  return (
      <form>
        <label htmlFor="search">Пошук</label>
        <input type={'text'} id="search" />
        <button type={'submit'}>Search</button>
      </form>
  );
};

export default SearchForm;

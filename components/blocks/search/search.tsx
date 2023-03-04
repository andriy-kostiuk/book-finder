import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import searchImage from '../../../public/home.svg';
import { fetchSimilarBooks } from '@/store/search-slice/search-slice';
import {
  Field,
  Form,
  FormWrapper,
  HiddenLabel,
  ImageWrapper,
  Submit,
  Title,
  Wrapper,
} from '@/components/blocks/search/styled';
import { useAppDispatch } from '@/hooks/store-hooks';

interface FormValues {
  template: string;
}

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const {register, handleSubmit} = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(fetchSimilarBooks(data.template));
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Title>BookFinder</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HiddenLabel htmlFor="search">Пошук</HiddenLabel>
          <Field {...register('template')} type={'text'} id="search" placeholder={'Прізвище автора або назва книги'} />
          <Submit type={'submit'}>Search</Submit>
        </Form>
      </FormWrapper>
      <ImageWrapper>
        <Image src={searchImage} alt={''} fill priority={true} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Search;

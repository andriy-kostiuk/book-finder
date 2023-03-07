import React, { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import searchImage from '../../../public/home.svg';
import { changeTemplate, fetchSimilarBooks } from '@/store/search-slice/search-slice';
import {
  Field,
  Form,
  FormWrapper,
  ImageWrapper,
  Submit,
  Title,
  Wrapper,
} from '@/components/blocks/search/styled';
import { useAppDispatch, useAppSelector } from '@/hooks/store-hooks';
import HiddenElement from '@/components/ui/hidden-element/hidden-element';
import { selectSearch } from '@/store/selectors';

interface FormValues {
  template: string;
}

const Search: FC = () => {
  const dispatch = useAppDispatch();
  const {template} = useAppSelector(selectSearch);
  const {register, handleSubmit} = useForm<FormValues>({defaultValues: {template: template}});

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(changeTemplate(data.template));
    dispatch(fetchSimilarBooks());
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Title>BookFinder</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HiddenElement as={'label'} htmlFor="search">Пошук</HiddenElement>
          <Field {...register('template')}
                 type={'text'} id="search"
                 placeholder={'Прізвище автора або назва книги'} />
          <Submit type={'submit'}
                  whileTap={{scale: 1}}
                  whileHover={{scale: 1.1}}
          >Знайти</Submit>
        </Form>
      </FormWrapper>
      <ImageWrapper>
        <Image src={searchImage} alt={''} fill priority={true} />
      </ImageWrapper>
    </Wrapper>
  );
};

export default Search;

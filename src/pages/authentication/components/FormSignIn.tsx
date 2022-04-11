import { FormControl, Text } from '@chakra-ui/react';
import React, { createRef } from 'react';
import { authAPI } from '../../../api/repositoryFactory';
import ButtonCustom from '../../../components/Button/ButtonCustom';

import FormInput from '../../../components/Form/FormInput';

import FormHeading from './FormHeading';

const FormSignIn = () => {
  const emailInput = createRef<HTMLInputElement>();
  const passwordInput = createRef<HTMLInputElement>();
  const loginHandler = async (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(emailInput.current?.value);
    console.log(passwordInput.current?.value);
    if (emailInput.current?.value && passwordInput.current?.value) {
      const res = await authAPI.signin({
        email: emailInput.current?.value,
        password: passwordInput.current?.value
      });
      console.log(await res);
    }
  };
  return (
    <FormControl>
      <FormHeading />
      <FormInput ref={emailInput} textLabel={'Email'} />
      <FormInput
        ref={passwordInput}
        textLabel={'Password'}
        typeInput={'password'}
      />
      <ButtonCustom
        textDisplay="Sign In"
        onClick={loginHandler}
        width={'100%'}
      />
      <Text
        fontSize={{ base: 'xs', md: 'md' }}
        textAlign={'center'}
        mt={'1rem'}
      >
        Chưa có tài khoản?
        <Text
          sx={{
            display: 'inline',
            ml: '.2rem',
            cursor: 'pointer',
            color: 'main.600'
          }}
        >
          Đăng ký
        </Text>
      </Text>
    </FormControl>
  );
};

export default FormSignIn;

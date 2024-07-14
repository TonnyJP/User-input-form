import { useState } from 'react';
import { Input } from './Input';
import { useInput } from '../hooks/useInput';

export default function StateLogin() {
  const {
    value: emailValue,
    handleInputChanges: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    didEdit: didEmailEdit,
  } = useInput('');
  const {
    value: passwordValue,
    handleInputChanges: handlePasswordChange,
    handleOnBlur: handlePasswordBlur,
    //didEdit: didPasswordEdit,
  } = useInput('');
  console.log('in it, ', emailValue);
  const isEmailValid = didEmailEdit && !emailValue.includes('@');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted, ', emailValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className='control-row'>
        <Input
          label='email'
          type='email'
          name='email'
          onBlur={handleEmailBlur}
          value={emailValue}
          onChange={handleEmailChange}
          required
          minLength={3}
          error={isEmailValid && 'please enter a valid email'}
        />

        <Input
          label='Password'
          id='password'
          type='password'
          name='password'
          onBlur={handlePasswordBlur}
          value={passwordValue}
          required
          minLength={7}
          onChange={handlePasswordChange}
        />
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}

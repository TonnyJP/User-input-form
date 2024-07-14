import { useRef } from 'react';

export default function Login() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted, ', formRef.current.email.value);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <h2>Login</h2>

      <div className='control-row'>
        <div className='control no-margin'>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            type='email'
            name='email'
            /*  value={enteredValues.email}
            onChange={(e) => handleInputChanges('email', e.target.value)} */
          />
        </div>

        <div className='control no-margin'>
          <label htmlFor='password'>Password</label>
          <input
            id='password'
            type='password'
            name='password'
            /* value={enteredValues.name}
            onChange={(e) => handleInputChanges('name', e.target.value)} */
          />
        </div>
      </div>

      <p className='form-actions'>
        <button className='button button-flat'>Reset</button>
        <button className='button'>Login</button>
      </p>
    </form>
  );
}

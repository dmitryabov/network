import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/preloader/formsControl/FormsConrol';


const LoginForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} name={'login'} component={Input}
             validate={[required]}
          />
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} component={Input} validate={[required]}/>
        </div>
        <div>
          <Field type={'checkbox'} name={'remember'} component={Input} validate={[required]}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
}


const LoginFormRedux = reduxForm({
  form: 'login'
})(LoginForm)

const  Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
   return (
    <div>
      <div>Login</div>
      <LoginFormRedux onSubmit={onSubmit} />
     </div>
  );
}

export default Login;

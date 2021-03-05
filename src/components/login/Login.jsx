import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-rediser';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/preloader/formsControl/FormsConrol';
import style from '../common/preloader/formsControl/FormsConrol.module.css'


const LoginForm = (props) => {
  
  return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Email'} name={'email'} component={Input}
             validate={[required]}
          />
        </div>
        <div>
          <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]}/>
        </div>
        <div>
          <Field type={'checkbox'} name={'remember'} component={Input} validate={[required]}/> remember me
        </div>
        {props.error && <div className={style.formError}>
            {props.error}
        </div>}
       
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
    props.loginThunkCreator(formData.email, formData.password, formData.remember)
  }
  
  if(props.isAuth){
    return <Redirect to={'/profile'}/>
  }

   return (
    <div>
      <div>Login</div>
      <LoginFormRedux onSubmit={onSubmit} />
     </div>
  );
}


const mapStateToProps = (state) => {
  return { 
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {loginThunkCreator})(Login);

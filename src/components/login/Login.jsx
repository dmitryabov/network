import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-rediser';
import { required } from '../../utils/validators/validators';
import { Input } from '../common/preloader/formsControl/FormsConrol';
import style from '../common/preloader/formsControl/FormsConrol.module.css'
import styles from './Login.module.css'


const LoginForm = ({handleSubmit, error}) => {
  
  return (
          <form className={styles.form} id={styles.form1} onSubmit={handleSubmit}>
            <Field placeholder={'Email'} name={'email'} component={Input}validate={[required]} className={styles.formField}/>
            <Field placeholder={'Password'} name={'password'} type={'password'} component={Input} validate={[required]} className={styles.formField}/>
            <div className={styles.remember}>
              <Field type={'checkbox'} name={'remember'} component={Input} validate={[]} className={styles.formField}/>
              <span>remember</span>
            </div>
            {error && <div className={style.formError}>{error} </div>}
            <div>
             <button className={styles.loginButton}>Login</button>
           </div>
          </form>
  );
}


const LoginFormRedux = reduxForm({
  form: 'login'
})(LoginForm)

const  Login = ({loginThunkCreator, isAuth}) => {
  
  const onSubmit = (formData) => {
    loginThunkCreator(formData.email, formData.password, formData.remember)
  }
  
  if(isAuth){
    return <Redirect to={'/profile'}/>
  }

   return (
    <div className={styles.login}>
      <div className={styles.loginForm}>
      <div className={styles.formTitle}>
          Login
      </div>
      <div>
       <LoginFormRedux onSubmit={onSubmit} />
      </div>
     </div>
     </div>
  );
}


const mapStateToProps = (state) => {
  return { 
    isAuth: state.auth.isAuth
  }
}


export default connect(mapStateToProps, {loginThunkCreator})(Login);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "./Login.scss";
import { useAppDispatch } from '../../redux/store';
import loginUserAction from '../../redux/actions/loginUser.action';
import getProductsAction from '../../redux/actions/getProducts.action';

type UserSubmitForm = {
  email: string;
  password: string;
};

const Login = () => {

  const dispatch = useAppDispatch()
  const history = useHistory();

  const {user} = useSelector((state:any) => state.user)

    const validationSchema = Yup.object().shape({
    
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters')
      });
    
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = async(data: UserSubmitForm) => {
        // console.log("data", data)
        // console.log(JSON.stringify(data, null, 2));
      //  dispatch(loginUserAction(data))
      let result = await dispatch(getProductsAction(data))
      if(user.email && user.password) {
        history.push('/Movies')
      }
      };

      console.log("users", user)

    return (
      <div className='background'>
      <h2>Login</h2>
        <div className="register-form">
        <form onSubmit={handleSubmit(onSubmit)}>
  
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              {...register('email')}
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
          </div>
  
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              {...register('password')}
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            />
            <div className="invalid-feedback">{errors.password?.message}</div>
          </div>
  
          <div className="form-group-buttons">
            <button
              type="button"
              onClick={() => reset()}
              className="btn-reset"
            >
              Reset
            </button>
            <button type="submit" className="btn-login">
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
    )
}

export default Login;
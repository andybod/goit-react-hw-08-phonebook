import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      className={css.form}
      component="form"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        className={css.label}
        label="Email"
        type="email"
        name="email"
      />
      <TextField
        className={css.label}
        label="Password"
        type="password"
        name="password"
      />
      <Button variant="contained" type="submit">
        Log in
      </Button>
    </Box>
  );
};

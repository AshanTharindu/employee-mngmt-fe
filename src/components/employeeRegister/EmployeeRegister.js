import { Card, CardContent, Grid, MenuItem } from '@material-ui/core';
import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ROLES } from '../../constants';
import { registerEmployee } from '../../store/employee-actions';
import { isValidEmail } from '../../utils/validationUtils';

/**
 * Employee regisration form
 * @returns 
 */
const EmloyeeRegister = () => {
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassoword] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPassowordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [error, setError] = useState(false);

  const isValidForm = useCallback(() => {
    return (
      firstname &&
      firstname !== '' &&
      lastname &&
      lastname !== '' &&
      username &&
      username !== '' &&
      password &&
      password !== '' &&
      role &&
      role !== '' &&
      address &&
      address !== '' &&
      email &&
      isValidEmail(email)
    );
  }, [role, username, password, email, firstname, lastname, address]);

  useEffect(() => {
    if (isValidForm()) {
      setError(false);
    } else {
      setError(true);
    }
  }, [
    role,
    username,
    password,
    email,
    firstname,
    lastname,
    address,
    isValidForm,
  ]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const dispatch = useDispatch();

  /**
   * Saves registration data of the use
   */
  const onSubmitHandler = () => {
    dispatch(
      registerEmployee({
        username,
        password,
        email,
        firstname,
        lastname,
        address,
        role,
      })
    ).then(() => clearForm());
  };

  const clearForm = () => {
    setUsername('');
    setPassoword('');
    setFirstname('');
    setLastname('');
    setEmail('');
    setAddress('');
    setRole('');
  };

  const onFnameChange = (value) => {
    if (!value || value === '') {
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }
    setFirstname(value);
  };

  const onLnameChange = (value) => {
    if (!value || value === '') {
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }
    setLastname(value);
  };

  const onUsernameChange = (value) => {
    if (!value || value === '') {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    setUsername(value);
  };

  const onPasswordChange = (value) => {
    if (!value || value === '') {
      setPassowordError(true);
    } else {
      setPassowordError(false);
    }
    setPassoword(value);
  };

  const onEmailChange = (value) => {
    if (!value || !isValidEmail(value)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setEmail(value);
  };

  const onAddressChange = (value) => {
    if (!value || value === '') {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
    setAddress(value);
  };

  return (
    <Container maxWidth='sm'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='username'
                name='username'
                variant='outlined'
                required
                fullWidth
                error={usernameError}
                id='username'
                label='Username'
                value={username}
                autoFocus
                onChange={(event) => onUsernameChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id='password'
                label='Password'
                type='password'
                autoComplete='current-password'
                error={passwordError}
                value={password}
                onChange={(event) => onPasswordChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete='fname'
                name='firstName'
                variant='outlined'
                required
                fullWidth
                id='firstname'
                label='First Name'
                value={firstname}
                autoFocus
                error={firstnameError}
                onChange={(event) => onFnameChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastname'
                value={lastname}
                autoComplete='lname'
                error={lastnameError}
                onChange={(event) => onLnameChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email'
                value={email}
                error={emailError}
                onChange={(event) => onEmailChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='address'
                label='Address'
                name='address'
                value={address}
                rows={4}
                multiline
                autoComplete='address'
                error={addressError}
                onChange={(event) => onAddressChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id='outlined-select-currency'
                select
                label='Role'
                required
                value={role}
                onChange={handleChange}
                helperText='Select Your Role'
                variant='outlined'
              >
                {ROLES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          <Button
            color='primary'
            variant='contained'
            disabled={error}
            sx={{ mt: 3, mb: 2 }}
            onClick={() => {
              onSubmitHandler();
            }}
          >
            Register
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmloyeeRegister;

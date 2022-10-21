import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ROLES } from '../../constants';
import { registerEmployee } from '../../store/employee-actions';

const EmloyeeRegister = () => {
  const [role, setRole] = useState();
  const [username, setUsername] = useState();
  const [password, setPassoword] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [address, setAddress] = useState();

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
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography variant='h6' color='inherit' noWrap>
          Employee Registration
        </Typography>
        <Box
          sx={{
            width: 500,
            maxWidth: '100%',
          }}
        >
          <div>
            <TextField
              fullWidth
              error={false}
              id='username'
              label='Username'
              defaultValue=''
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='password'
              label='Password'
              type='password'
              autoComplete='current-password'
              onChange={(event) => setPassoword(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='email'
              label='Email'
              defaultValue=''
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='firstname'
              label='First Name'
              defaultValue=''
              onChange={(event) => setFirstname(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='lastname'
              label='Last Name'
              defaultValue=''
              onChange={(event) => setLastname(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='address'
              label='Address'
              multiline
              rows={4}
              defaultValue=''
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>
          <div>
            <TextField
              fullWidth
              id='outlined-select-currency'
              select
              label='Select'
              value={role}
              onChange={handleChange}
              helperText='Select Your Role'
            >
              {ROLES.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button
            variant='contained'
            onClick={() => {
              onSubmitHandler();
            }}
          >
            Register
          </Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmloyeeRegister;

import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerEmployee } from '../../store/employee-actions';

const roles = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'manager',
    label: 'Manager',
  },
  {
    value: 'worker',
    label: 'Worker',
  },
];

const EmloyeeRegister = () => {
  const [currency, setCurrency] = React.useState();
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const dispatch = useDispatch();

  /**
   * Saves registration data of the use
   */
  const onSubmitHandler = () => {
    dispatch(registerEmployee({}));
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Typography variant='h6' color='inherit' noWrap>
          Employee Registration
        </Typography>
        <Box
          component='form'
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <div>
            <TextField
              error={false}
              id='outlined-error-helper-text'
              label='User Name'
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              id='outlined-password-input'
              label='Password'
              type='password'
              autoComplete='current-password'
            />
          </div>
          <div>
            <TextField
              id='outlined-error-helper-text'
              label='Email'
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              id='outlined-error-helper-text'
              label='First Name'
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              id='outlined-error-helper-text'
              label='Last Name'
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              id='outlined-multiline-static'
              label='Address'
              multiline
              rows={4}
              defaultValue=''
            />
          </div>
          <div>
            <TextField
              id='outlined-select-currency'
              select
              label='Select'
              value={currency}
              onChange={handleChange}
              helperText='Select Your Role'
            >
              {roles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <Button variant='contained'>Register</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default EmloyeeRegister;

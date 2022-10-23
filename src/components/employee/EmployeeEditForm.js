import { Card, CardContent, MenuItem } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useEffect, useState } from 'react';
import { EMPLOYEE_TYPES, ROLES } from '../../constants';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const EmployeeEditForm = ({
  id,
  registered,
  firstname: _firstname,
  lastname: _lastname,
  address: _address,
  role: _role,
  onUpdateHandler,
}) => {
  const classes = useStyles();

  const [role, setRole] = useState(_role);
  const [firstname, setFirstname] = useState(_firstname);
  const [lastname, setLastname] = useState(_lastname);
  const [address, setAddress] = useState(_address);
  const [error, setError] = useState(false);

  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);
  const [addressError, setAddressError] = useState(false);

  const isValidForm = useCallback(() => {
    return (
      firstname &&
      firstname !== '' &&
      lastname &&
      lastname !== '' &&
      role &&
      role !== '' &&
      address &&
      address !== ''
    );
  }, [role, firstname, lastname, address]);

  useEffect(() => {
    if (isValidForm()) {
      setError(false);
    } else {
      setError(true);
    }

    if (!firstname || firstname === '') {
      setFirstnameError(true);
    } else {
      setFirstnameError(false);
    }

    if (!lastname || lastname === '') {
      setLastnameError(true);
    } else {
      setLastnameError(false);
    }

    if (!address || address === '') {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  }, [firstname, lastname, address, isValidForm]);

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const onSubmitHandler = () => {
    const employeeType = registered
      ? EMPLOYEE_TYPES.REGISTERED
      : EMPLOYEE_TYPES.UN_REGISTERED;
    onUpdateHandler(id, employeeType, { firstname, lastname, address, role });
  };

  return (
    <Container maxWidth='sm'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <form className={classes.form} noValidate={false}>
            <Grid container spacing={2}>
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
                  onChange={(event) => setFirstname(event.target.value)}
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
                  onChange={(event) => setLastname(event.target.value)}
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
                  onChange={(event) => setAddress(event.target.value)}
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
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default EmployeeEditForm;

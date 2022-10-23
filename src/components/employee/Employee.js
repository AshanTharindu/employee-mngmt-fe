import { Container } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

/**
 * Employee information view compoent
 * @param {*} param0 
 * @returns 
 */
const Employee = ({ id, name, address, role }) => {
  return (
    <Container maxWidth='sm'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h5' component='div'>
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color='text.secondary'>
            {role}
          </Typography>
          <Typography style={{ whiteSpace: 'pre-wrap' }} variant='body2'>
            {address}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Employee;

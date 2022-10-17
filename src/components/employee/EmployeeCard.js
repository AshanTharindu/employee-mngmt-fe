import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const EmployeeCard = ({ name, email, address, role }) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant='h5' component='div'>
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {email}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {role}
        </Typography>
        <Typography variant='body2'>
          {address}
        </Typography>
      </CardContent>

    </Card>
  );
};

export default EmployeeCard;

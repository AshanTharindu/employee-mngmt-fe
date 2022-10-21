import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const LinkButton = ({ path, title }) => {
  return (
    <Link to={path} style={{ color: 'white', textDecoration: 'none' }}>
      <Button color='inherit'>{title}</Button>
    </Link>
  );
};

export default LinkButton;

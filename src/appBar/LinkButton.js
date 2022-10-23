import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for link button
 * @param {*} param0 
 * @returns 
 */
const LinkButton = ({ path, title }) => {
  return (
    <Link to={path} style={{ color: 'white', textDecoration: 'none' }}>
      <Button color='inherit'>{title}</Button>
    </Link>
  );
};

export default LinkButton;

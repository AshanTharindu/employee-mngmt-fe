import { Card, CardContent, Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Comment from './Comment';

const Comments = ({ comments }) => {
  return (
    <Container maxWidth='sm'>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            Comments
          </Typography>
          {comments.map(({ comment, date, author }) => (
            <Comment comment={comment} date={date} author={author} />
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Comments;

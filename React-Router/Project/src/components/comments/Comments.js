import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import useHttp from '../../hooks/use-http'
import { getAllComments } from '../../lib/api';

import NewCommentForm from './NewCommentForm';
import CommentItem from './CommentItem';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';

const Comments = () => {
  const { id } = useParams();
  const { sendRequest, data, error, status } = useHttp(getAllComments);
  const [isAddingComment, setIsAddingComment] = useState(false);

  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  const startAddCommentHandler = () => setIsAddingComment(true);

  const addedCommentHandler = useCallback(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  let comments;
  if (status === 'pending')
    comments = <div className='centered'><LoadingSpinner /></div>

  if (status === 'completed')
    comments = data.map(comment => <CommentItem key={comment.id} text={comment.text} />);

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {
        !isAddingComment &&
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      }

      {
        isAddingComment &&
        <NewCommentForm quoteId={id} onAddedComment={addedCommentHandler} />
      }

      {comments}
    </section>
  );
};

export default Comments;

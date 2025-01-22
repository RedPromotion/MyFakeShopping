import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, Box } from '@mui/material';
/***********************************************
@page BoardPage
@description 게시판
***********************************************/
const BoardPage = () => {
  const [comments, setComments] = useState([
    { id: 1, author: '홍길동', content: '첫 번째 댓글 내용' },
    { id: 2, author: '김철수', content: '두 번째 댓글 내용' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, author: '익명', content: newComment }]);
      setNewComment('');
    }
  };

  return (
    <Box margin={2}>
      <Typography variant="h4" gutterBottom>게시판</Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>작성자</TableCell>
              <TableCell>내용</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comments.map((comment) => (
              <TableRow key={comment.id}>
                <TableCell>{comment.author}</TableCell>
                <TableCell>{comment.content}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TextField
        label="댓글 작성"
        fullWidth
        multiline
        rows={4}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        variant="outlined"
        margin="normal"
      />
      <Button onClick={handleAddComment} variant="contained" color="primary">
        댓글 추가
      </Button>
    </Box>
  );
};

export default BoardPage;

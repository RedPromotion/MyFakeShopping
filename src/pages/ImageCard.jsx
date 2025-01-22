import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

/***********************************************
@page ImageCard 
@description 쇼핑몰 아이템 카드
***********************************************/

// 스타일 개선: 카드에 그림자 효과 추가
const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)', // 예시로 custom boxShadow 사용
  },
}));

// 아이템 데이터를 관리하는 배열
const items = [
  {
    id: 1,
    title: '아이템 1',
    description: '아이템 1 설명이 들어갑니다. 이곳에 특징이나 사용법 등을 추가할 수 있습니다.',
    price: '$99.99',
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 2,
    title: '아이템 2',
    description: '아이템 2 설명이 들어갑니다. 이곳에 특징이나 사용법 등을 추가할 수 있습니다.',
    price: '$149.99',
    image: 'https://images.pexels.com/photos/2641504/pexels-photo-2641504.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    title: '아이템 3',
    description: '아이템 3 설명이 들어갑니다. 이곳에 특징이나 사용법 등을 추가할 수 있습니다.',
    price: '$199.99',
    image: 'https://images.pexels.com/photos/1635562/pexels-photo-1635562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 4,
    title: '아이템 4',
    description: '아이템 4 설명이 들어갑니다. 이곳에 특징이나 사용법 등을 추가할 수 있습니다.',
    price: '$79.99',
    image: 'https://images.pexels.com/photos/3268987/pexels-photo-3268987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  // 추가 아이템 데이터를 추가할 수 있습니다.
];

// 개별 아이템 카드 컴포넌트
const ItemCard = ({ title, description, price, image }) => (
  <StyledCard>
    <CardMedia
      component="img"
      height="200"
      image={image}
      alt={title}
    />
    <CardContent>
      {/* 제목 */}
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      {/* 설명 */}
      <Typography variant="body2" color="text.secondary" paragraph>
        {description}
      </Typography>
      {/* 가격 */}
      <Typography variant="h6" color="primary" gutterBottom>
        가격: <strong>{price}</strong>
      </Typography>
      {/* 구매 버튼 */}
      <Button variant="contained" color="primary" fullWidth>
        지금 구매하기
      </Button>
    </CardContent>
  </StyledCard>
);

// 전체 ImageCard 컴포넌트
const ImageCard = () => {
  return (
    <Box margin={2}>
      <Grid container spacing={2} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <ItemCard
              title={item.title}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ImageCard;

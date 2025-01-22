import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
/***********************************************
@page Start.jsx
@description 쇼핑몰 소개 화면
***********************************************/
export default function Start() {
  return (
    <Box margin={2}>
      <Typography variant="h3" align="center" gutterBottom>
        쇼핑몰에 오신 것을 환영합니다!
      </Typography>

      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        최신 상품과 다양한 할인 혜택을 만나보세요. 원하는 상품을 찾아 쇼핑을 시작해 보세요!
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {/* 쇼핑몰 아이템 카드 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="아이템 이미지"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                여름 특가 아이템
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                여름을 맞아 특별 할인된 여름 아이템을 만나보세요! 여름 시즌을 준비하는 최적의 아이템.
              </Typography>
              <Button component={Link} to="/products" variant="contained" color="primary" fullWidth>
                지금 쇼핑하기
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 다른 상품 카드들 추가 가능 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://images.pexels.com/photos/2031101/pexels-photo-2031101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="아이템 이미지"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                패션 아이템
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                최신 패션 트렌드를 만나보세요. 스타일리시한 아이템들이 가득합니다.
              </Typography>
              <Button component={Link} to="/fashion" variant="contained" color="primary" fullWidth>
                지금 쇼핑하기
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 더 많은 상품들을 여기서 추가 가능합니다. */}
      </Grid>
    </Box>
  );
}

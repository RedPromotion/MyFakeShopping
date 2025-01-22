import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent, Button, Grid, Paper, Divider, Chip, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

/***********************************************
@page ProductDetailPage
@description 쿠팡 스타일의 개별 상품 상세 페이지
***********************************************/
const ProductDetailPage = () => {
  // 하나의 상품 데이터 (예시 데이터)
  const item = {
    id: 1,
    title: "프리미엄 스니커즈",
    price: "$99.99",
    image: "https://images.pexels.com/photos/11721287/pexels-photo-1175287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "이 프리미엄 스니커즈는 고급 가죽과 독특한 디자인으로 최고의 착용감을 제공합니다. 일상에서 편안하게 신을 수 있으며, 어떤 스타일에도 잘 어울립니다.",
    options: {
      size: ["Small", "Medium", "Large"],
      color: ["Black", "White", "Blue"],
    },
    reviewCount: 123,
    averageRating: 4.5,
  };

  return (
    <Box margin={2}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            {/* 상품 이미지 */}
            <Card>
              <CardMedia
                component="img"
                height="400"
                image={item.image}
                alt={item.title}
              />
            </Card>

            <CardContent>
              {/* 상품 제목 */}
              <Typography variant="h4" gutterBottom>
                {item.title}
              </Typography>

              {/* 상품 가격 */}
              <Typography variant="h5" color="primary" gutterBottom>
                {item.price}
              </Typography>

              {/* 상품 옵션 (사이즈, 색상) */}
              <FormControl fullWidth margin="normal">
                <InputLabel>사이즈</InputLabel>
                <Select defaultValue="" label="사이즈">
                  {item.options.size.map((size, index) => (
                    <MenuItem key={index} value={size}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel>색상</InputLabel>
                <Select defaultValue="" label="색상">
                  {item.options.color.map((color, index) => (
                    <MenuItem key={index} value={color}>{color}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {/* 상품 설명 */}
              <Typography variant="body1" paragraph>
                {item.description}
              </Typography>

              {/* 평균 평점 및 리뷰 수 */}
              <Box display="flex" alignItems="center" marginBottom={2}>
                <Typography variant="body2" color="text.secondary" marginRight={1}>
                  평점: {item.averageRating} ({item.reviewCount} 리뷰)
                </Typography>
                <Chip label="BEST" color="primary" size="small" />
              </Box>

              <Divider />

              {/* 구매 버튼 */}
              <Button variant="contained" color="primary" fullWidth size="large">
                지금 구매하기
              </Button>

              {/* 장바구니 버튼 */}
              <Button variant="outlined" color="primary" fullWidth size="large" sx={{ marginTop: 1 }}>
                장바구니에 담기
              </Button>
            </CardContent>
          </Paper>

          {/* 추천 상품 */}
          <Box marginTop={4}>
            <Typography variant="h6" gutterBottom>
              추천 상품
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="추천 상품"
                  />
                  <CardContent>
                    <Typography variant="h6">추천 상품 1</Typography>
                    <Typography variant="body2" color="text.secondary">
                      $29.99
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth size="small">
                      보기
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://via.placeholder.com/150"
                    alt="추천 상품"
                  />
                  <CardContent>
                    <Typography variant="h6">추천 상품 2</Typography>
                    <Typography variant="body2" color="text.secondary">
                      $39.99
                    </Typography>
                    <Button variant="contained" color="primary" fullWidth size="small">
                      보기
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailPage;

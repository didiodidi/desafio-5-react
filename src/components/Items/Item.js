import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



export default function ItemCard({data}) {
  return (
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        height="140"
        image={data.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.type}
        </Typography>
      </CardContent>
    </Card>
  );
}

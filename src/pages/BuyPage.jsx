

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Navbar from '../componets/Navbar'

function BuyPage() {

  const cardData = [
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Microprocessors 1',
    description: 'Lizards are a widespread group of squamate reptiles...',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Microprocessors 2',
    description: 'Lizards are a widespread group of squamate reptiles...',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Microprocessors 2',
    description: 'Lizards are a widespread group of squamate reptiles...',
  },
  {
    image: '/static/images/cards/contemplative-reptile.jpg',
    title: 'Microprocessors 2',
    description: 'Lizards are a widespread group of squamate reptiles...',
  },
  ];

  const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  gap: '16px',
};

  
  return (
    <div>
      <Navbar/>
      Marketplace
      <br/>
      <h2>Marketplace</h2>
      <div style={cardContainerStyle}>
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 345, flex: '1 0 calc(33.33% - 16px)' }}>
            <CardMedia sx={{ height: 140 }} image={card.image} title={card.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
              <Button size="small">Verification</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default BuyPage

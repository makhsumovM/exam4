
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import villa1 from "../../assets/villa1.png"
import villa2 from "../../assets/villa2.png"
import villa3 from "../../assets/villa3.png"
import { Link } from 'react-router-dom'


const Villas = ({name,description,budget,time,ID,deleteVilla}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={villa1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color:"#056088"}}>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {time} work time
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display:"flex", alignItems:"center", justifyContent:"space-around"}}>
        <Link to={`/${ID}`}>
              <Button variant='contained' size='large' sx={{ padding: "20px", background: 'linear-gradient(to right, #056088, #09A7CA)', "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
              See process
            </Button>
        </Link>
            <Button onClick={()=>deleteVilla(ID)} variant='contained' size='large' color='error' sx={{ padding: "20px",  "^:hover": { background: "linear-gradient(to right, #056088, #09A7CA)" } }}>
              Delete
            </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Villas
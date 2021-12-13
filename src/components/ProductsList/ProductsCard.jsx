import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { perfumesContext } from "../../context/perfumesContext";

const ProductsCard = ({ item }) => {
    const {deletePerfume}=useContext(perfumesContext)
    const {
        user: { email },
      } = useAuth();
  return (
    <div>
      <Card sx={{ maxWidth: 500, margin: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={item.image1}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.brand}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.model}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {"$  " + item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Details
          </Button>
          {email === "tarieltairov1@gmail.com" ? 
            <Button size="small" color="primary" onClick={()=>deletePerfume(item.id)}>
              Delete
            </Button>
           : null}
          {email === "tarieltairov1@gmail.com" ? 
            <Link to={`/edit/${item.id}`} style={{textDecoration: 'none'}}><Button size="small" color="primary" >
              Update
            </Button></Link>
           : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductsCard;

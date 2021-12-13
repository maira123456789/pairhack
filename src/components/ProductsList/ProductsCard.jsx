import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreIcon from "@mui/icons-material/More";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { perfumesContext } from "../../context/perfumesContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { cartContext } from "../../context/cartContext";

const ProductsCard = ({ item }) => {
  const { deletePerfume } = useContext(perfumesContext);
  const {
    user: { email },
  } = useAuth();

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  const { addProductToCart, checkItemInCart } = useContext(cartContext);

  const [checkInCart, setCheckInCart] = useState(checkItemInCart(item.id));

  useEffect(() => {
    setCheckInCart(checkItemInCart(item.id));
  });

  return (
    <div>
      <Card sx={{ maxWidth: 500, margin: 3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
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
        <CardActions style={{ backgroundColor: "peachpuff" }}>
          <Link to={`/details/${item.id}`} style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              <MoreIcon />
            </Button>
          </Link>
          <Button size="small" color="primary">
            <h1>{count}</h1>
            <FavoriteBorderIcon onClick={increment} />
          </Button>
          <Button>
            <ShoppingCartCheckoutIcon  style={{ color: checkInCart ? "red" : "black", fontSize: "25px" }} onClick={() => {
            addProductToCart(item);
            setCheckInCart(checkItemInCart(item.id));}}/>
          </Button>
          {email === "tarieltairov1@gmail.com" ? (
            <Button
              size="small"
              color="primary"
              onClick={() => deletePerfume(item.id)}
            >
              <DeleteIcon />
            </Button>
          ) : null}
          {email === "tarieltairov1@gmail.com" ? (
            <Link to={`/edit/${item.id}`} style={{ textDecoration: "none" }}>
              <Button size="small" color="primary">
                <EditIcon />
              </Button>
            </Link>
          ) : null}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductsCard;

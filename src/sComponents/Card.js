import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/actions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DoneIcon from "@mui/icons-material/Done";
import Products from "../components/products";

function Card(props) {
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const addItemToCart = () => {
    setClicked(true);
    const data = {
      name: props.name,
      price: props.price,
      img: props.img,
    };
    dispatch(addToCart(data));
  };
  return (
    <div class="wrapper">
      <div class="container">
        <div className='imgTop'>
          <img className="top" src={props.img} />
        </div>
        <div class={clicked ? "clicked bottom" : "bottom"}>
          <div class="left">
            <div class="details">
              <h1>{props.name}</h1>
              <p>{props.price}</p>
            </div>
            <div class="buy">
              <i class="material-icons" onClick={addItemToCart}>
                <AddShoppingCartIcon fontSize="large" />
              </i>
            </div>
          </div>
          <div class="right">
            <div class="done">
              <i class="material-icons">
                <DoneIcon fontSize="large" />
              </i>
            </div>
            <div class="details">
              <h1>{props.name}</h1>
              <p>Added to your cart</p>
            </div>
            <div class="remove">
              <i class="material-icons">clear</i>
            </div>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">
          <i class="material-icons">
            <InfoOutlinedIcon />
          </i>
        </div>
        <div class="contents">
          <table>
            <tr>
              <th>Width</th>
              <th>Height</th>
            </tr>
            <tr>
              <td>3000mm</td>
              <td>4000mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
            <tr>
              <th>Something</th>
              <th>Something</th>
            </tr>
            <tr>
              <td>200mm</td>
              <td>200mm</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Card;

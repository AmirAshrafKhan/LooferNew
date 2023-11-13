import { Grid, Box, Container, useMediaQuery, useTheme } from "@mui/material";
import React, { useState, useEffect } from "react";
import Footer from "../components/resuableComponents/Footer";
import Header from "../components/resuableComponents/Header";
import LoginForm from "../forms/LoginForm";
import WhislistCard from "../components/resuableComponents/WhislistCard";
import FooterMedia from "../components/resuableComponents/FooterMedia";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, getOrderDetails } from "../reducers/action";
import OrderDetailsPopup from "./OrderDetailsPopup";
import Table from 'react-bootstrap/Table';

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";

const OrderDetailsPage = () => {
  const theme = useTheme();
  const getOrderState = useSelector((state) => state.getOrderDetails);
  const { getOrderItem, status, error } = getOrderState;
  const { singleOrderDetailsItem } = useSelector(
    (state) => state.singleOrderDetails
  );

  const [orderIds, setOrderId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const dispatch = useDispatch();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // dispatch(getOrder());
    getOrderDetail(localStorage.getItem('order_id_loofer'))
    window.scrollTo(0, 0);
  }, [dispatch]);
  const getOrderDetail = (id) => {
    setOrderId(id);
    dispatch(getOrderDetails(id));
    // handleOpenPopup(id);
  };

  var getProductName = (m)=>{
  var varM = JSON.parse(m)

  return varM.product_name
  }
  var getProductPrice = (m)=>{
    var varM = JSON.parse(m)
  
    return varM.product_price
    }
    var getProductSize= (m)=>{
      var varM = JSON.parse(m)
    
      return varM.size
      }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "24px" }}> Order Details</span>
        <div>
          {/* <Typography variant="h4" gutterBottom>
            Order List
          </Typography> */}
          {getOrderItem.data &&
            getOrderItem.data.map((order) => (
              <>
              {order.id == orderIds?(
                 <div
                 key={order.id}
                 //   onClick={() => getOrderDetail(order.id)}
                 style={{
                   border: "1px solid lightgrey",
                   padding: "20px",
                   marginBottom: "20px",
                   cursor: "pointer",
                 }}
               >
                 <div
                   style={{ display: "flex", justifyContent: "space-between" }}
                 >
                   <div style={{ display: "flex" }}>
                     <img
                       src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691145278_8709860.jpg?format=webp&w=160&dpr=1.3"
                       alt="Product"
                       style={{
                         width: "200px", // Set the width to your desired value
                         height: "200px", // Set the height to your desired value
                         objectFit: "cover", // Maintain aspect ratio while covering the container
                       }}
                     />
                     <div style={{ marginLeft: "1em" }}>
                       <ListItem>
                         <ListItemText
                           primary={`Order ID: ${order.id}`}
                           secondary={`Transaction ID: ${order.transaction_id}`}
                         />
                       </ListItem>
 
                       <ListItem>
                         <ListItemText
                           primary={`Order Value: ${order.amount}`}
                         />
                       </ListItem>
                       <ListItem>
                         <ListItemText primary={`Name: ${order.name}`} />
                       </ListItem>
                       {/* <ListItem>
                         <ListItemText
                           primary={`Addres Id: ${order.address_id}`}
                         />
                       </ListItem> */}
                       {/* <ListItem>
                         <ListItemText
                           primary={`Product Id: ${order.product_id}`}
                         />
                       </ListItem> */}
                       {/* <ListItem>
                         <ListItemText primary={`User Id: ${order.user_id}`} />
                       </ListItem> */}
                       {/* <ListItem>
                         <ListItemText primary={`Status: $${order.status}`} />
                       </ListItem> */}
 
                       <ListItem>
                         <ListItemText
                           primary={`Created At: ${new Date(order.created_at).toDateString()}`}
                         />
                       </ListItem>
                     </div>
                   </div>
                 </div>
                 <Divider />
 
                 <div>
                 <span style={{ fontSize: "24px" }}> Order Items</span>
               <Table responsive>
       <thead>
         <tr>
           <th>Product Name</th>
           <th>Product Price</th>
           <th>Product Quantity</th>
           <th>Product Size</th>
 
         
         </tr>
       </thead>
       <tbody>
        
          
           {order.order_item.map((m, index) => (
             <>
              <tr>
             <td >{getProductName(m?.attributes)}</td>
             <td >{getProductPrice(m?.attributes)}</td>
             <td >{m?.quantity}</td>
             <td >{getProductSize(m?.attributes)}</td>
             </tr>
             </>
           ))}
       
         
       </tbody>
     </Table>
                 </div>
               </div>
             
              ):""}
             
                </>
            ))}
        </div>
        {/* <OrderDetailsPopup
          open={isPopupOpen}
          onClose={handleClosePopup}
          order={selectedOrder}
          orderIds={orderIds}
        /> */}
      </div>
      {matches ? <FooterMedia /> : <Footer />}
    </>
  );
};

export default OrderDetailsPage;

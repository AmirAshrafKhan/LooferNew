import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrder, getOrderDetails } from "../reducers/action";
import OrderDetailsPopup from "./OrderDetailsPopup";
import { useNavigate } from "react-router-dom";

const OrderPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getOrderState = useSelector((state) => state.getOrderDetails);
  const { getOrderItem, status, error } = getOrderState;
  const { singleOrderDetailsItem } = useSelector(
    (state) => state.singleOrderDetails
  );

  const [orderIds, setOrderId] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    // Add your order objects here
  ];

  const handleOpenPopup = (id) => {
    setSelectedOrder(singleOrderDetailsItem.data); // Set the selected order
    dispatch(getOrderDetails(id)); // Fetch order details by order ID
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedOrder(null);
  };

  useEffect(() => {
    console.log(singleOrderDetailsItem, "singleOrderDetailsItem");
    dispatch(getOrder());

    window.scrollTo(0, 0);
  }, [dispatch]);

  const getOrderDetail = (id) => {
    setOrderId(id);
    dispatch(getOrderDetails(id));
    handleOpenPopup(id);
  };

  console.log("order details are", getOrderItem.data);
  return (
    // <div>
    //   <span>MY ORDERS</span>
    //   <div>
    //     <Typography variant="h4" gutterBottom>
    //       Order List
    //     </Typography>
    //     <bo>
    //       {console.log(getOrderItem, "getOrderItem")}
    //       {getOrderItem.data &&
    //         getOrderItem.data.map((order) => (
    //           <box
    //             key={order.id}
    //             onClick={() => getOrderDetail(order.id)}
    //             style={{
    //               // display: 'flex',
    //               // justifyContent: 'space-between',
    //               border: "1px solid lightgrey",
    //               // paddingLeft: 20,
    //               // paddingRight: 20,
    //               padding: 20,
    //               marginBottom: 20,
    //               // alignItems: 'center',
    //               cursor: "pointer",
    //             }}
    //           >
    //             <box
    //               style={{
    //                 display: "flex",
    //                 justifyContent: "space-between",
    //               }}
    //             >
    //               <box style={{ display: "flex" }}>
    //                 <img src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691145278_8709860.jpg?format=webp&w=160&dpr=1.3" />
    //                 <box ml={3}>
    //                   <ListItem>
    //                     <ListItemText
    //                       primary={`Order ID: ${order.id}`}
    //                       secondary={`Transaction ID: ${order.transaction_id}`}
    //                     />
    //                   </ListItem>
    //                   <ListItem>
    //                     <ListItemText primary={`Amount: $${order.amount}`} />
    //                   </ListItem>

    //                   <ListItem>
    //                     <ListItemText primary={`User: ${order.name}`} />
    //                   </ListItem>
    //                   <ListItem>
    //                     <ListItemText
    //                       primary={`Created At: ${order.created_at}`}
    //                     />
    //                   </ListItem>
    //                 </box>
    //               </box>
    //             </box>

    //             <Divider />
    //           </box>
    //         ))}
    //     </bo>
    //     <OrderDetailsPopup
    //       open={isPopupOpen}
    //       onClose={handleClosePopup}
    //       order={selectedOrder}
    //       orderIds={orderIds}
    //     />
    //   </div>
    // </div>

    <div>
      <span>MY ORDERS</span>
      <div>
        <Typography variant="h4" gutterBottom>
          Order List
        </Typography>
        {getOrderItem.data &&
          getOrderItem.data.map((order) => (
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <img
                    src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1691145278_8709860.jpg?format=webp&w=160&dpr=1.3"
                    // src={order?.order_item?.product?.features_image}
                    alt="Product"
                  />
                  <div style={{ marginLeft: "1em" }}>
                    <ListItem>
                      <ListItemText
                        primary={`Order ID: ${order.id}`}
                        secondary={`Transaction ID: ${order.transaction_id}`}
                      />
                    </ListItem>

                    <ListItem>
                      <ListItemText primary={`Order Value: ₹${order.amount}`} />
                    </ListItem>

                    <ListItem>
                      <ListItemText
                        primary={`Created At: ${new Date(
                          order.created_at
                        ).toLocaleDateString()}`}
                      />
                    </ListItem>
                    <Button
                      style={{
                        border: "1px solid lightgrey",
                        marginRight: 30,
                        borderRadius: 12,
                        fontSize: 12,
                        paddingLeft: 30,
                        paddingRight: 30,
                        color: "black",
                        fontWeight: "bold",
                      }}
                      //   onClick={() => getOrderDetail(order.id)}
                      onClick={() => {
                        localStorage.setItem("order_id_loofer", order.id);
                        setTimeout(() => {
                          navigate("/orderdetailspage");
                        }, 1000);
                      }}
                    >
                      Order Details
                    </Button>
                    <Button
                      style={{
                        border: "1px solid lightgrey",
                        marginRight: 30,
                        borderRadius: 12,
                        fontSize: 12,
                        paddingLeft: 30,
                        paddingRight: 30,
                        color: "black",
                        fontWeight: "bold",
                      }}
                      //   onClick={() => getOrderDetail(order.id)}
                    >
                      Download Invoice
                    </Button>
                  </div>
                </div>
              </div>
              <Divider />
            </div>
          ))}
      </div>
      <OrderDetailsPopup
        open={isPopupOpen}
        onClose={handleClosePopup}
        order={selectedOrder}
        orderIds={orderIds}
      />
    </div>
  );
};

export default OrderPage;

import React, { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails } from '../reducers/action';

const OrderDetailsPopup = ({ open, onClose, order, orderIds }) => {
	const dispatch=useDispatch();
	const { singleOrderDetailsItem} = useSelector((state) => state.singleOrderDetails);

    useEffect(() => {
		console.log(singleOrderDetailsItem,'singleOrderDetailsItem ppppppppo')
        dispatch(getOrderDetails(orderIds)); 

		
		window.scrollTo(0, 0);
	}, [dispatch]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
        {console.log(order,'opop order')}
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <Typography variant="h6">Order ID: {order && order.id}</Typography>
        <Typography variant="body1">Transaction ID: {order && order.transaction_id}</Typography>
        <Typography variant="body1">Amount: ${order && order.amount}</Typography>
        <Typography variant="body1">Status: {order && order.status}</Typography>
        <Typography variant="body1">Payment Status: {order && order.payment_status}</Typography>
        <Typography variant="body1">User: {order && order.name}</Typography>
        <Typography variant="body1">Created At: {order && order.created_at}</Typography>
        {/* Add more order details here */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDetailsPopup;
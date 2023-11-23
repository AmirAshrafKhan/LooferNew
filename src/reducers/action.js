import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./apiToken";
import apiBase from "./apiBase";
import { setErrorMessage, setTokenAndUser } from "./authSlice";
import cookie from "react-cookie-consent";
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;
const token = localStorage.getItem("token");

export const userRegistration = createAsyncThunk(
  "userRegistration",
  async (values) => {
    const response = await api.post("/user/register", {
      values,
      headers: {
        "X-CSRFToken": cookie.load("csrftoken"),
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
      },

      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    });
    return response.data;
  }
);

export const userLogin = createAsyncThunk("cart/userLogin", async (values) => {
  const response = await api.post("/login", {
    values,
    headers: {
      "X-CSRFToken": cookie.load("csrftoken"),
      "Content-Type": "application/x-www-form-urlencoded",
      "cache-control": "no-cache",
    },
    Authorization: `Bearer ${token}`,
    Accept: "application/json",
  });
  return response.data;
});

export const searchProduct = createAsyncThunk(
  "searchProduct",
  async (query) => {
    const response = await api.post("/search", {
      query,
      headers: {
        "X-CSRFToken": cookie.load("csrftoken"),
        "Content-Type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
      },
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      body: JSON.stringify({ name: query }),
    });
    return response.data;
  }
);

export const logOut = createAsyncThunk("cart/logOut", async () => {
  const response = await api.get("/logout");
  return response.data;
});

// export const getMenuCategory = createAsyncThunk(
//   "get/menu_category",
//   async () => {
//     const response = await apiBase.get("/get_menu_category");
//     return response.data;
//   }
// );
export const getMenuCategory = createAsyncThunk(
  "get/menu_category",
  async () => {
    try {
      const response = await fetch(`${apiBase}/get_all_category`);
      if (!response.ok) {
        throw new Error("failed to fetch !");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("failed to fetch !");
    }
  }
);
export const getProductByCategory = createAsyncThunk(
  "get/productByCategory",
  async (categoryID) => {
    const response = await apiBase.get(`/get_category_product/6`);
    return response.data;
  }
);

export const productDetails = createAsyncThunk(
  "get/productdetails",
  async (productID) => {
    const response = await apiBase.get(`/single_product/${productID}`);

    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (productId) => {
    const response = await api.post(
      "/add_to_cart",
      { ...productId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response) {
    }
    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "RemoveCart/removeFromCart",
  async (productId) => {
    const response = await api.post(
      "/delete-cart",
      { ...productId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response) {
    }
    return response.data;
  }
);

export const addToWishList = createAsyncThunk(
  "wishList/addToWishList",
  async (productId) => {
    const response = await api.post(
      "/add-wishlist",
      { ...productId },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response) {
    }
    return response.data;
  }
);

// export const showCart = createAsyncThunk("cart/showCart", async () => {
//   const response = await api.get("/cart", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   });
//   return response.data.cart;
// });

export const showCart = createAsyncThunk(
  `${apiBase}/cart/showCart`,
  async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No authentication token available.");
      }

      const response = await fetch(`${apiBase}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }

      const data = await response.json();

      return data;
      console.log(data);
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
);

// export const showAddress = createAsyncThunk("cart/showAddress", async () => {
//   const response = await api.get("/show_address");
//   return response.data;
// });

export const showAddress = createAsyncThunk(
  `${apiBase}/cart/showAddress`,
  async () => {
    try {
      const response = await fetch(`${apiBase}/show_address`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
);

export const createAddress = createAsyncThunk(
  "cart/createAddress",
  async (address) => {
    const response = await api.post("/create_address", address, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    console.log("response", response);

    if (response.data.errors.length > 0) {
      response.data.errors.forEach((f) => {
        alert(f);
      });
    }

    return response.data;
  }
);

export const updateAddress = createAsyncThunk(
  "cart/updateAddress",
  async (address) => {
    let ID = address.id;
    const response = await api.put(
      `/edit_address/${ID}`,
      { ...address },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  }
);
export const deleteAddress = createAsyncThunk(
  "cart/deleteAddress",
  async (ID) => {
    const response = await api.get(`/delete_address/${ID}`);
    return response.data;
  }
);

export const placeConfirmOrder = createAsyncThunk(
  "cart/placeConfirmOrder",
  async (addId) => {
    const response = await api.post("/confirmOrder", { address_id: addId });

    console.log("response response", response);

    if (response.data.status) {
      alert("Order placed successfully");
      window.location.href = "/order";
    }
    return response.data;
  }
);

export const placeOnlineConfirmOrder = createAsyncThunk(
  "cart/placeConfirmOrder",
  async (addId) => {
    const response = await api.post(
      "https://loofer-payment.onrender.com/payment_initiate",
      {
        paymentPayload: {
          price: addId,
        },
      }
    );

    console.log("response response", response);

    if (response.status) {
      window.open(
        response?.data?.data?.instrumentResponse?.redirectInfo?.url,
        "__blank"
      );
    }
    return response.data;
  }
);

export const getOrder = createAsyncThunk("order/getOrder", async () => {
  const response = await api.post("/getOrder");
  return response.data;
});

export const getOrderDetails = createAsyncThunk(
  "order/getOrderDetails",
  async (id) => {
    const response = await api.post("/getOrderDetail", { order_id: id });
    return response.data;
  }
);

// export const homeProductList = createAsyncThunk(
//   "get/homeProducts",
//   async () => {
//     const response = await apiBase.get("/homepage");
//     return response.data;
//   }
// );

export const homeProductList = createAsyncThunk(
  "get/homeProducts",
  async () => {
    try {
      const response = await fetch(`${apiBase}/homepage`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
);
// export const getCategoryProduct = createAsyncThunk(
//   "get/get_category_product",
//   async (productId) => {
//     const response = await apiBase.get(`/get_category_product/${productId}`);
//     return response.data;
//   }
// );

export const getCategoryProduct = createAsyncThunk(
  `${apiBase}/get_category_product/6`,
  async (productId) => {
    try {
      const response = await fetch(`${apiBase}/get_category_product/6`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch }) => {
    try {
      const response = await apiBase.post("/login", {
        credentials,
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        headers: {
          "X-CSRFToken": cookie.load("csrftoken"),
          "Content-Type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
        },
      });

      if (response.status === 200) {
        const { token, user } = response.data;
        console.log(token, "token after login");
        localStorage.setItem("token", token);
        localStorage.setItem("user_id", user.id);
        localStorage.setItem("user_name", user.name);
        localStorage.setItem("user_email", user.email);

        dispatch(setTokenAndUser({ token, user }));
        // You can dispatch any other actions or perform additional logic here
      }
    } catch (error) {
      if (error.response !== undefined && error.response.data !== undefined) {
        if (
          error.response.data.errors !== undefined &&
          error.response.data.errors.login !== undefined
        ) {
          dispatch(setErrorMessage(error.response.data.errors.login[0]));
        } else {
          dispatch(setErrorMessage(error.response.data.message));
        }
      }
    }
  }
);

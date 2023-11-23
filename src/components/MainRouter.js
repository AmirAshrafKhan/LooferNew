import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import MywistlistPage from "../pages/MywistlistPage";
import PersonalCare from "../pages/PersonalCare";
import CartPage from "../pages/CartPage";
import Product from "../pages/Product";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactUs from "../pages/ContactUs";
import HomeAndLiving from "../pages/HomeAndLiving";
import Payments from "../pages/Payment";
import AboutUs from "../pages/AboutUs";
import FAQ from "../pages/FAQ";
import TermsAndCondition from "../pages/TermsAndCondition";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Careers from "../pages/Careers";
import MyaccountPage from "../pages/OrderPage";
import Layout from "./resuableComponents/Layout";
import OrderPage from "../pages/OrderPage";
import MygiftVocher from "../pages/MygiftVocher";
import MySavedCard from "../pages/MySavedCard";
import TSSPage from "../pages/TSSPage";
import SubmitDesign from "../pages/SubmitDesign";
import KidsLandingPage from "../pages/KidsLandingPage";
import WomenLandingPage from "../pages/WomenLandingPage";
import SouledArmyPage from "../pages/SouledArmyPage";
import Community from "../pages/Community";
import ProfilePage from "../pages/ProfilePage";
import MemberShipPage from "../pages/MemberShipPage";
import Returns from "../pages/Returns";
import Cancellation from "../pages/Cancellation";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import AddAddressPopup from "../pages/AddAddressPopup";
import AddAddress from "../pages/AddAddress";
import PaymentConfirmPage from "../pages/payment-confirm";
import FilterProduct from "../pages/FilterProduct";
import SearchProductsCards from "./resuableComponents/SearchProductsCards";
import SearchProduct from "../pages/SearchProduct";

const MainRouter = () => {
  return (
    <div className="mediamob">
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="/men" exact element={<LandingPage />} />
        <Route path="/kids" exact element={<KidsLandingPage />} />
        <Route path="/women" exact element={<WomenLandingPage />} />
        <Route path="/home-living" exact element={<HomeAndLiving />} />
        <Route path="/personal-care" exact element={<PersonalCare />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/mywishlist" exact element={<MywistlistPage />} />
        <Route
          path="/searchproductsCards"
          exact
          element={<SearchProductsCards />}
        />
        <Route path="/searchproducts" exact element={<SearchProduct />} />

        <Route path="/cart" exact element={<CartPage />} />
        <Route path="/address" exact element={<AddAddress />} />

        <Route path="/product/:id" exact element={<Product />} />
        <Route path="/filterproduct" exact element={<FilterProduct />} />

        <Route path="/productdetail" exact element={<ProductDetailPage />} />
        <Route path="/contactus" exact element={<ContactUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/faq" exact element={<FAQ />} />
        <Route path="/payments" exact element={<Payments />} />
        <Route path="/souledarmy" exact element={<SouledArmyPage />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/careers" exact element={<Careers />} />
        <Route path="/submitdesign" exact element={<SubmitDesign />} />
        <Route path="/membership" exact element={<MemberShipPage />} />
        <Route path="/myprofile" exact element={<ProfilePage />} />
        <Route
          path="/payment_confirmed"
          exact
          element={<PaymentConfirmPage />}
        />

        <Route
          path="/order"
          element={
            <>
              <Layout>
                <OrderPage />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/orderdetailspage"
          exact
          element={
            <>
              <Layout>
                <OrderDetailsPage />
              </Layout>
            </>
          }
        />
        <Route
          path="/mygiftvocher"
          element={
            <>
              <Layout>
                <MygiftVocher />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <>
              <Layout>
                <ProfilePage />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/mysavedcard"
          element={
            <>
              <Layout>
                <MySavedCard />
              </Layout>
            </>
          }
        ></Route>
        <Route
          path="/tss"
          element={
            <>
              <Layout>
                <TSSPage />
              </Layout>
            </>
          }
        ></Route>
        <Route path="/Returns" exact element={<Returns />} />
        <Route path="/Cancellation" exact element={<Cancellation />} />
        <Route path="/termcondition" exact element={<TermsAndCondition />} />
        <Route path="/privacypolicy" exact element={<PrivacyPolicy />} />
        <Route path="*" exact element={<h1>Page Not found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRouter;

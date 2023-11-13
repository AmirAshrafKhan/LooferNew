import { Box, Container, useTheme, useMediaQuery, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
import {Menu, Dropdown, Space } from 'antd';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.jpeg';
import three from '../../assets/images/threeline.svg';
import HomeDrawer from './HomeDrawer';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTab } from '../../reducers/UiReducer';
import TopHeader from './TopHeader';
import axios from 'axios';
import { getMenuCategory, getProductByCategory } from '../../reducers/action';
import TopHeaderSec from './TopHeaderSec';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { getCategory } from '../../reducers/CategoryReducer';


const Header = () => {
	const theme = useTheme();
	const [col, setCol] = useState(false);
	const matches = useMediaQuery(theme.breakpoints.down('md'));
	const dispatch = useDispatch();
	const { tab } = useSelector((state) => state.ui);
	const menuCategory = useSelector((state) => state.menuCategory)
	const [val, setVal] = useState('Men');
	const [draw, setDraw] = useState(false);
	const navigate = useNavigate();


  const handleCategorySelect = (category_id) => {
	navigate('/product',{state: {productID:category_id}})
	

  };

const getProductsById=(category_id)=>{
	dispatch(getProductByCategory(category_id));
	navigate('/product')
}


  const renderDropdown = (childCategories) => {
    return (
      <Menu>
        {childCategories.length>0 ?  childCategories.map((childCategory) => (
          <Menu.Item key={childCategory.id} onClick={() =>getProductsById(childCategory.id) }>
            {childCategory.name}
          </Menu.Item>
        )):<Menu.Item>{"No option"}</Menu.Item>}
      </Menu>
    );
  };

  const menuItems = menuCategory.categoryItem.map((category) => (
    <Dropdown key={category.id} overlay={renderDropdown(category.child)} 
		style={{ color: '#58595b', fontSize: 12 }}>
	  <a onClick={() =>getProductsById(category.id) } style={{padding:"20px", color: '#58595b', fontSize: 12 }}>
			<Space
				style={{
					fontSize: 14,
					fontWeight: 'bold',
				}}>
				{category.name}
				<DownOutlined style={{ fontSize: 12 }} />
			</Space>
		</a>
    </Dropdown>
  ));

  const menu = (
    <Menu>
      {menuItems}
    </Menu>
  );

	// const handleChange = (value) => {
	// 	setVal(value);
	// 	if (value === 'Kids') {
	// 		navigate('/kids');
	// 	} else if (value === 'Men') {
	// 		navigate('/');
	// 	} else {
	// 		navigate('/women');
	// 	}
	// };
	

	const listenScrollEvent = () => {
		if (window.scrollY <= 60) {
			setCol(false);
		} else if (window.scrollY >= 60) {
			// console.log('window', window.scrollY);
			setCol(true);
		}
		// console.log('window', window.scrollY);
	};
	useEffect(() => {
		dispatch(getMenuCategory());


		window.addEventListener('scroll', listenScrollEvent);
		return () => {
			window.removeEventListener('scroll', listenScrollEvent);
		};
	}, [dispatch]);

	return (
		<>
					{/* {!matches && <TopHeader />} */}
					
				{/* <TopHeaderSec/> */}
			<Box
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					boxShadow: '0 2px 3px rgba(0,0,0,.2)',
					backgroundColor: '#fff',
					zIndex: 2000,
					position: col ? 'fixed' : 'relative',
					width: col ? '100%' : '',
					padding: matches ? 10 : '',
					top: col ? 0 : '',
					behavior: 'smooth',
					height:'80px'
				}}>
				<Box
					style={{
						paddingLeft: matches ? 0 : 30,
						paddingRight: 30,
						display: 'flex',
						// justifyContent: 'space-between',
						// boxShadow: '0 2px 3px rgba(0,0,0,.2)',
						// backgroundColor: '#fff',
						// zIndex: 100,
						// position: 'relative',
						alignItems: 'center',
					}}>
					{matches ? (
						<>
							<img
								src={three}
								style={{ height: 35 }}
								onClick={() => setDraw(true)}
							/>
							<img
								src={logo}
								onClick={() => navigate('/')}
								style={{ cursor: 'pointer', height: 30, marginLeft: 10 }}
							/>
						</>
					) : (
						<img
							src={logo}
							onClick={() => navigate('/')}
							style={{ cursor: 'pointer', height: 40 }}
						/>
					)}

					{matches ? (
						''
					) : (
						<>

							
							<Box
								style={{ cursor: 'pointer'}}
								ml={5}
								sx={{
									color: 'rgba(88, 89, 91, 1)',
									
								}}>
									{/* {menu} */}

									{/* <TopHeaderSec/> */}
									<TopHeader/>
							</Box>

						</>
					)}
				</Box>
				
			<Box style={{ display: 'flex' }}>
				<>

		<div style={{borderRadius:"4px",marginRight:"30px"}}>
			{matches ? 
			<div style={{display:"flex",fontSize:"font-size: small" ,border:"none", backgroundColor:"#dfdede", position: "sticky",
			top: "20px"}}>
			   <div className='searchIcon' style={{width:"28px",height:"33px",marginBottom:"4px", backgroundColor:"#f7f4f4"}}><SearchIcon style={{marginTop:"8px",marginLeft:"5px"}}/>
		   
			   </div>
			<input style={{outline:"none",boxShadow:"none !important",border:"0px solid #ccc !important",width:"16rem",fontSize:"font-size: small",opacity:"0.7",fontSize:"14px"}}
		   //  style={{padding: "8px 48px",				
		   // 	width:" 100%",				
		   // 	fontSize:"14px",				
		   // }}

			  type="text"
			  className="desktop-searchBar"
			  placeholder="Search for products,brands & more"
			  
			/>
		  </div>
		   :
			 <div style={{display:"flex",fontSize:"font-size: small" ,border:"none", backgroundColor:"#dfdede", position: "sticky",
			 top: "20px"}}>
				<div className='searchIcon' style={{width:"28px",height:"33px",marginBottom:"4px", backgroundColor:"#f7f4f4"}}><SearchIcon style={{marginTop:"8px",marginLeft:"5px"}}/>
			
				</div>
			 <input style={{outline:"none",boxShadow:"none !important",border:"0px solid #ccc !important",width:"23rem",fontSize:"font-size: small",opacity:"0.7",fontSize:"14px"}}
			//  style={{padding: "8px 48px",				
			// 	width:" 100%",				
			// 	fontSize:"14px",				
			// }}

			   type="text"
			   className="desktop-searchBar"
			   placeholder="Search for products,brands & more"
			   
			 />
		   </div>}
		   </div>

		   

		   <div className='p-2 mt-3' >
					<AccountCircleOutlinedIcon
						style={{ marginRight: 20, cursor: 'pointer', color:"#9f9a9a" }}
						onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/profile" :'/login')}

					/>
				<p style={{marginLeft: "-9px" , cursor:"pointer" , fontSize:"14px", color: "rgb(40, 44, 63)"}} onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/profile" :'/login')}>Profile</p>	
					</div>
			
			<div className='p-2 mt-3' >
			<FavoriteBorderOutlinedIcon
						style={{ marginRight: 20, cursor: 'pointer',  color:"#9f9a9a"  }}
						onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/mywishlist" :'/login')}
							
					/>
				<p style={{marginLeft: "-9px" , cursor:"pointer", fontSize:"14px", color: "rgb(40, 44, 63)"}} onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/mywishlist" :'/login')}>WishList</p>
			</div>
					
			<div className='p-2 mt-3' >
					 <ShoppingBagOutlinedIcon
						style={{ marginRight: 20, cursor: 'pointer',  color:"#9f9a9a"  }}
						onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/cart" :'/login')}
							
					/>
					<p style={{marginLeft: "-1px" , cursor:"pointer", fontSize:"14px" , color: "rgb(40, 44, 63)"}} onClick={() => navigate(
							(localStorage.getItem("token")!=="undefined" && 
							localStorage.getItem("token")!==null  && 
							localStorage.getItem("token")!==undefined) ? 
							"/cart" :'/login')}>Bag</p>
					 </div>	
			
					
                
				
					</>
					
				</Box>
			
			</Box>
			
			{/* {matches ? (
				<Box
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						marginBottom: 1,
						// padding: 20,
					}}>
					<Box
						onClick={() => {
							dispatch(setTab('men'));
							navigate('/');
						}}
						style={{
							borderBottom: tab === 'men' ? '4px solid #187b7b' : '',
							paddingLeft: 40,
							paddingRight: 40,
							paddingTop: 20,
							paddingBottom: 20,
						}}>
						<span style={{ fontWeight: 'bold', color: '#58595b!important' }}>
							MENS
						</span>
					</Box>
					<Box
						onClick={() => {
							dispatch(setTab('women'));
							navigate('/women');
						}}
						style={{
							borderBottom: tab === 'women' ? '4px solid #187b7b' : '',
							paddingLeft: 40,
							paddingRight: 40,
							paddingTop: 20,
							paddingBottom: 20,
						}}>
						<span style={{ fontWeight: 'bold' }}>WOMENS</span>
					</Box>
					<Box
						onClick={() => {
							dispatch(setTab('kids'));
							navigate('/kids');
						}}
						style={{
							borderBottom: tab === 'kids' ? '4px solid #187b7b' : '',
							paddingLeft: 40,
							paddingRight: 40,
							paddingTop: 20,
							paddingBottom: 20,
						}}>
						<span style={{ fontWeight: 'bold' }}>KIDS</span>
					</Box>
				</Box>
			) : (
				''
			)} */}
			<HomeDrawer draw={draw} setDraw={setDraw} />
		</>
	);
};

export default Header;

import React, { useState, useEffect } from 'react';
import { Box, Drawer, Divider, List, Button, Grid } from '@mui/material';
import logo from '../../assets/images/logo.jpeg';
import { Card, CardGroup, Col, ListGroup, Nav, Row } from "react-bootstrap";

import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { getProductByCategory } from "../../reducers/action";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";

import "./Menu.css";
import { yellow } from "@mui/material/node/colors";
const resList = [
	{
	  id: 6,
	  name: "Topwear",
	  slug: "",
	  description: null,
	  parent_id: null,
	  image: null,
	  child: [
		{
		  id: 7,
		  name: "T-Shirts",
		  slug: "T-Shirts",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Casual Shirts",
		  slug: "Casual Shirts",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Formal Shirts",
		  slug: "Formal Shirts",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Sweatshirts",
		  slug: "Sweatshirts",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Sweaters",
		  slug: "Sweaters",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Jackets",
		  slug: "Jackets",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Blazers",
		  slug: "Blazers",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
		{
		  id: 7,
		  name: "Suits",
		  slug: "Suits",
		  description: "lorem ipsum dummy text",
		  parent_id: 6,
		},
	  ],
	},
  
	{
	  id: 12,
	  name: "Footwear",
	  slug: "",
	  description: null,
	  parent_id: null,
	  image: null,
	  child: [
		{
		  id: 13,
		  name: "Casual Shoes",
		  slug: "Casual Shoes",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Sports Shoes",
		  slug: "Sports Shoes",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Formal Shoes",
		  slug: "Formal Shoes",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Formal Shoes",
		  slug: "Formal Shoes",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Sneakers",
		  slug: "Sneakers",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Sandals & Floaters",
		  slug: "Sandals & Floaters",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
		{
		  id: 13,
		  name: "Flip Flops",
		  slug: "Flip Flops",
		  description: "lorem ipsum dummy text",
		  parent_id: 12,
		},
	  ],
	},
	{
	  id: 10,
	  name: "Indian & Festive Wear",
	  slug: "Indian & Festive Wear",
	  description: null,
	  parent_id: null,
	  image: null,
	  child: [
		{
		  id: 11,
		  name: "Kurtas & Kurta Sets",
		  slug: "Cutton3",
		  description: "lorem ipsum dummy text",
		  parent_id: 10,
		},
		{
		  id: 11,
		  name: "Sherwanis",
		  slug: "Sherwanis",
		  description: "lorem ipsum dummy text",
		  parent_id: 10,
		},
  
		{
		  id: 11,
		  name: "Nehru Jackets",
		  slug: "Nehru Jackets",
		  description: "lorem ipsum dummy text",
		  parent_id: 10,
		},
		{
		  id: 11,
		  name: "Dhotis",
		  slug: "Dhotis",
		  description: "lorem ipsum dummy text",
		  parent_id: 10,
		},
	  ],
	},
	{
	  id: 8,
	  name: "Bottomwear",
	  slug: "Bottomwear",
	  description: null,
	  parent_id: null,
	  image: null,
	  child: [
		{
		  id: 9,
		  name: "Jeans",
		  slug: "Jeans",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
  
		{
		  id: 9,
		  name: "Casual Trousers",
		  slug: "Casual Trousers",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		{
		  id: 9,
		  name: "Formal Trousers",
		  slug: "Formal Trousers",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		{
		  id: 9,
		  name: "Shorts",
		  slug: "Shorts",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		{
		  id: 9,
		  name: "Track Pants & Joggers",
		  slug: "Track Pants & Joggers",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		// Add more child items if needed
	  ],
	},
	{
	  id: 10,
	  name: "Cutton",
	  slug: "",
	  description: null,
	  parent_id: null,
	  image: null,
	  child: [
		{
		  id: 10,
		  name: "BoysShirt",
		  slug: "Cutton3",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		{
		  id: 9,
		  name: "shirt2",
		  slug: "Cutton",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
		{
		  id: 9,
		  name: "shirt3",
		  slug: "Cutton",
		  description: "lorem ipsum dummy text",
		  parent_id: 8,
		},
	  ],
	},
  ];
const HomeDrawer = ({ draw, setDraw }) => {
	const [tab, setTab] = useState('one');
	const [one, setTabOne] = useState(false);
	const [two, setTabTwo] = useState(false);
	const [categoryList,setCategoryList]=useState([])
	const [categoryTopList,setCategoryTopList]=useState([])
	const [newcategoryTopList,setNewCategoryTopList]=useState([])
	const [newcategoryTopListChild,setNewCategoryTopListChild]=useState([])


  
  
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const menuCategory = useSelector((state) => state.menuCategory);
  
	const [lgShow, setLgShow] = useState(null); // Use null to determine which menu to show
	const [activeMenu, setActiveMenu] = useState(null); // State variable for the active menu item
  
	const idToColorMap = {};
	
	
	const handelRoute = ( link)=>{
	  navigate(link)
	}
	const renderItems = (items) => {
	  return items.map((item,) => (
		<div key={item.id}>
		  <p className="item-name">{item.name}</p>
		  {item.child && item.child.length > 0 && (
			<div className="child-items">{renderItems(item.child)}</div>
		  )}
		</div>
	  ));
	};
	function removeSpacesAndLowerCase(inputString) {
	  const stringWithoutSpaces = inputString.replace(/\s+/g, '');
	  const lowerCaseString = stringWithoutSpaces.toLowerCase();
	  
	  if (lowerCaseString === 'home&living') {
		return 'home-living';
	  }
	  else if(lowerCaseString === 'beauty'){
		return 'personal-care'
	  }
	  return lowerCaseString;
	}
  
	const handleMenuClick = (menu) => {
	  
	  console.log('menu', menu)
	  
	  localStorage.setItem("category_id", menu.id);
	  setTimeout(() => {
		handelRoute("/product/"+menu.id)
	  }, 1000);
	  
	  console.log("Clicked menu item:", removeSpacesAndLowerCase(menu.name) );
	};
	const getCategory = () => {
	  // const formData = new FormData();
	  // formData.append("image", image);
	  // formData.append("description", description);
  
	  const config = {
		headers: {
		  "Content-Type": "multipart/form-data",
		  Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	  };
  
	  fetch("https://loofer.bellazza.in/api/get_all_category", config)
		.then((response) => response.json())
		.then((res) => {
		  console.log("havana oh na na ", res);
		  let category = [];
		 
		  if (res) {
			res.map((val) => {
			  category.push(val);
			});
  
			let top = []
	  for (let index = 0; index < 3; index++) {
		
		const element = res[index];
  
		if(element.slug == 'men' || element.slug == 'women' || element.slug == 'kids' ){
		  top.push(element)
		}
	   
  
		
	  }
	  setCategoryTopList(top)

	  console.log('categoryTopList sidebar', categoryTopList)
	   
			setCategoryList(category);
			var newcatArray = []
  
			for (let index = 0; index < categoryList.length; index++) {
			  const element = categoryList[index];
  
			  var newElement = {}
			  newElement.id = element.id
			  newElement.name=element.name
			 
  
		 
			   var data= categoryList.filter(ca=> ca.parent_id == element.id )
			   if(data){
				console.log('data', data)
  
			   }
			   newElement.child = data
			
			   console.log(' newElement',  newElement)
  
			   newcatArray.push(newElement)
			}
  
		   
  
		  setTimeout(() => {
		   
		  }, 2000);
  
			
		  } else {
			console.log("failed to resolve");
			setCategoryList(resList);
		  }
  
		  console.log({ res });
		})
		.catch((err) => {
		  // console.error({ err });
		  setCategoryList(resList);
  
		});
	};
  
	useEffect(()=>{
	  getCategory()
	  
	},[])
	const handleChange = (val) => {
		setTab(val);
	};
	return (
		<>
			<Drawer
				anchor={'left'}
				open={draw}
				PaperProps={{
					sx: { width: '80%' },
				}}
				onClose={() => {
					draw ? setDraw(false) : setDraw(true);
					// dispatch(toggleLoginDrawerModal(false));
				}}
				style={{ width: '100%' }}
				// className={styles.drawerlogin}
				onKeyDown
				classes={{
					paper: { width: '80%' },
				}}>
				<div>
					<Box
						style={{
							display: 'flex',
							// justifyContent: 'space-between',
							// padding: 15,
						}}>
						<img src={logo} style={{ height: 80 }} />
						{/* <Button style={{ border: '1px solid #148c8d' }}>
							Login\Register
						</Button> */}
					</Box>
				</div>
				<Divider />
				<Divider />
				
				<Box
					style={{
						display: 'flex',
						// justifyContent: 'space-between',
						paddingTop: 2,
						paddingBottom: 2,
						paddingLeft: 12,
						paddingRight: 12,
						background: '#ebebeb',
						alignItems: 'center',
						boxShadow: '0 3px 10px 0 rgb(0 0 0/19%)!important',
					}}>
						{/* {console.log('categoryTopList categoryTopList', categoryTopList)} */}
						{categoryTopList?.map((main)=>{
							
				return	(<Box
					onClick={() =>{
						 handleChange(main.id)

						 var data = categoryList.filter((f)=> f.parent_id == main.id)

						 setNewCategoryTopList(data)
					}}
					onMouseEnter={() =>{
						handleChange(main.id)

						var data = categoryList.filter((f)=> f.parent_id == main.id)

						setNewCategoryTopList(data)
				   }}
					style={{
						background: tab === main.id ? '#fff' : '',
						borderRadius: 10,
						padding: '10px 40px',
						margin:"10px"
					}}>
						{/* background: tab === 'one' ? '#fff' : '', */}
					<span style={{ fontSize: 12 }}>{main.name}</span>
				</Box>)
				})}
					
					
				</Box>
				<Box style={{ padding: 20 }}>
					{newcategoryTopList.map((item)=>{
						// {console.log('newcategoryTopList newcategoryTopList', newcategoryTopList)}
				  return (
					<>
					<Box
						onClick={() =>{setNewCategoryTopListChild(item.child)}}
						
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<span style={{ fontSize: 12 }}>{item.name}</span>
						<img
							onClick={() => (one ? setTabOne(false) : setTabOne(true))}
							src='https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png'
							style={{ height: 20 }}
						/>
					</Box>

					{newcategoryTopListChild && newcategoryTopListChild.length>0 && newcategoryTopListChild?.map(
						(item1)=>{
							return (
								<>
                                  {item1?.parent_id == item.id? (
									<Box
									mt={2}
									style={{ border: '1px solid lightgrey', padding: '20px' }}>
									<Grid container>
										{/* {Array.from(Array(10)).map((i) => { */}
											
												<Grid item xs={3} mt={2}>
													<Box alignItems={'center'} textAlign={'center'}   onClick={() => {
                                      handleMenuClick(item1); // Log the clicked menu item
                                    }}>
														<img
															src='https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/side_menu_image/T-shirts_J8lZ9om_SwfupAv.png?format=webp&w=300&dpr=2.0'
															style={{ height: 25 }}
														/>
														<br />
														<span style={{ fontSize: 12 }}>
															{item1.name}
														</span>
													</Box>
												</Grid>
											
										{/* }) */}
										
									</Grid>
								</Box>
								):""}
								</>
                           
							)
						}
					)}

					</>
				  )
				
				})}
					
					
				
				</Box>
			</Drawer>
		</>
	);
};

export default HomeDrawer;

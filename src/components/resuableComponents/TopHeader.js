import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, ListGroup, Nav, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { getProductByCategory } from "../../reducers/action";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "@mui/system";
import { MenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { MenuButton } from "@mui/base/MenuButton";

import "./Menu.css";
import { Box } from "@mui/material";
import { yellow } from "@mui/material/node/colors";

// Import the CSS file for styling

const Menus = [
  { id: "1", name: "MEN", borderColor: "#EE5F73" },
  { id: "2", name: "WOMEN", borderColor: "#FB56C1" },
  { id: "3", name: "KIDS", borderColor: "#F26A10" },
  { id: "4", name: "HOME & LIVING", borderColor: "#F2C210" },
  { id: "5", name: "BEAUTY", borderColor: "#0DB7AF" },
  // { id: "6", name: "STUDIO", borderColor: "#FF3F6C" },
];

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

const headerStyle = {
  backgroundColor: "white",
  color: "grey",
  display: "block",
  fontSize: "14px",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
};

const Menu = () => {
  const [categoryList,setCategoryList]=useState([])
  const [categoryTopList,setCategoryTopList]=useState([])
  const [newcategoryTopList,setNewCategoryTopList]=useState([])


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const menuCategory = useSelector((state) => state.menuCategory);

  const [lgShow, setLgShow] = useState(null); // Use null to determine which menu to show
  const [activeMenu, setActiveMenu] = useState(null); // State variable for the active menu item

  const idToColorMap = {};
  Menus.forEach((menu) => {
    idToColorMap[menu.id] = menu.color;
  });
  
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
    for (let index = 0; index < res.length; index++) {
      
      const element = res[index];

      if(!element.parent_id  ){
        top.push(element)
      }
     

      
    }
    setCategoryTopList(top)
     
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

         

        // setTimeout(() => {
        //   setNewCategoryTopList(newcatArray)
        //   console.log('newcategoryTopList', newcategoryTopList)
        // }, 2000);

          
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

  return (
    <>
      <Nav className="mr-auto nav-item">
        {categoryTopList
        ?.map((menu,) => (
          <React.Fragment key={menu.id}>
            <Box
              className={`nav-link mr-2 ${activeMenu === menu.id ? "" : ""}`}
              style={{
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: ".3px",
                color: "#282c3f",
                // borderBottom: 'none',
                // borderBottom: `2px solid ${menu.borderColor}`, // Set the borderBottom color
                borderBottom:
                  activeMenu === menu.id
                    ? `2px solid ${menu.borderColor}`
                    : "none",

                transition: "left .2s ease-out, width .2s ease-out",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
              onMouseEnter={() => {
                setLgShow(menu.id);
                 // Set the ID of the menu on hover

                 var data = categoryList.filter((f)=> f.parent_id == menu.id)

                 setNewCategoryTopList(data)

                setActiveMenu(menu.id); // Set the active menu
              }}
              onMouseLeave={() => {
                // Hide the modal when the mouse leaves it
                setActiveMenu(null); // Clear the active menu
              }}
              onClick={() => {
                handleMenuClick(menu); // Log the clicked menu item
              }}
            >
              {menu.name}
            </Box>

            <Modal
              key={menu.id}
              style={{
                marginTop: "44px",
                marginLeft: "-100px",
                maxWidth: " 2026px !important",
              }}
              size="xl"
              show={lgShow === menu.id} // Show the modal when lgShow matches the current menu ID
              onHide={() => setLgShow(null)}
              aria-labelledby="example-modal-sizes-title-lg"
              onMouseLeave={() => {
                setLgShow(null);

              
              }}
            >
              <div className="container">
                <Modal.Body>
                  <CardGroup>
                    <Row>
                      {newcategoryTopList.map((item) => (

                        <Col xs lg="4" key={item.id}>
                          <Card
                            bg="white"
                            style={{ width: "18rem", border: "none" }}
                          >
                            <Card.Header style={headerStyle}>
                              {/* {item.name} */}
                            </Card.Header>
                            <ListGroup
                              variant="flush"
                              // style={{
                              //   backgroundColor:
                              //     item.id === 6
                              //       ? "blue" // Set background color based on menu id
                              //       : item.id === 7
                              //       ? "green" // Set background color based on menu id
                              //       : "rgba(0,0,0,.3)", // Default background color

                              //   border: "none",
                              // }}
                            >
                            <span  onClick={() => {
                                      handleMenuClick(item); // Log the clicked menu item
                                    }} style={{color:'#ee5f73', padding:"10px"}}>
                                       {item.name}
                                      </span> 
                              {item.child &&
                                item.child.map((childItem) => (
                                 
                                  <ListGroup.Item
                                    key={childItem.id}
                                    className="list-group-item-regular"
                                    // style={{ color: "grey", fontSize: "12px" }}
                                    onClick={() => {
                                      handleMenuClick(childItem); // Log the clicked menu item
                                    }}
                                    style={headerStyle}
                                  >
                                    {childItem.name}
                                  </ListGroup.Item>


                                ))}
                                
                                {/* {item.child.child &&
                                item.child.child.map((childItem) => (
                                 
                                  <ListGroup.Item
                                    key={childItem.id}
                                    className="list-group-item-regular"
                                    // style={{ color: "grey", fontSize: "12px" }}
                                    onClick={() => {
                                      handleMenuClick(childItem); // Log the clicked menu item
                                    }}
                                    style={headerStyle}
                                  >
                                    {childItem.name}
                                  </ListGroup.Item>


                                ))} */}
                            </ListGroup>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </CardGroup>
                </Modal.Body>
              </div>
            </Modal>
          </React.Fragment>
        ))}
        {/* <span className="desktop-newNavLink">
          <sup style={{ marginLeft: "-12px", color: "red" }}>new</sup>
        </span> */}
      </Nav>
    </>
  );
};

export default Menu;

import * as React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';
import { MenuButton } from '@mui/base/MenuButton';
import { MenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import './TopHeader.css';
import { Nav, Navbar } from 'react-bootstrap';
// import logo from '../../assets/images/logo.jpeg';
// import { Box } from '@mui/material';
// import LocalMallIcon from '@mui/icons-material/LocalMall';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from 'react-router-dom';
import { getProductByCategory } from '../../reducers/action';


function MenuSection({ children, label }) {
  return (
    <MenuSectionRoot role="group">
      <MenuSectionLabel>{label}</MenuSectionLabel>
      <ul>{children}</ul>
    </MenuSectionRoot>
  );
}

MenuSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string.isRequired,
};

export default function WrappedMenuItems() {
	const dispatch = useDispatch();

  const menuCategory = useSelector((state) => state.menuCategory);
	const navigate = useNavigate();


  const Menus = [
    { id: '1', name: 'MEN' },
    { id: '2', name: 'WOMEN' },
    { id: '3', name: 'KIDS' },
    { id: '4', name: 'HOME & LIVING' },
    { id: '5', name: 'BEAUTY' },
    { id: '6', name: 'STUDIO' },
    { id: '7', name: 'NEW' },
  ];

  const createHandleMenuClick = (menuItem) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Nav className="mr-auto nav-item">
          {Menus.map((menu) => (
            <div key={menu.id} className="nav-link">
              <TriggerButtonMenu
                menu={menu}
                createHandleMenuClick={createHandleMenuClick}
              />
            </div>
          ))}
           
        </Nav>
  );
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledListbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 200px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  box-shadow: 0px 2px 16px ${
    theme.palette.mode === 'dark' ? grey[900] : grey[200]
  };
  z-index: 1;
  `,
);

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;
  user-select: none;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${
      theme.palette.mode === 'dark' ? blue[600] : blue[200]
    };
    background-color: ${
      theme.palette.mode === 'dark' ? grey[800] : grey[100]
    };
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  &:hover:not(.${menuItemClasses.disabled}) {
    background-color: ${
      theme.palette.mode === 'dark' ? grey[800] : grey[100]
    };
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }
  `,
);

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 12px;
  padding: 8px 14px;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${
      theme.palette.mode === 'dark' ? grey[800] : grey[50]
    };
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${
      theme.palette.mode === 'dark' ? blue[500] : blue[200]
    };
  }
  `,
);

const MenuSectionRoot = styled('li')`
  list-style: none;

  & > ul {
    padding-left: 1em;
  }
`;

const MenuSectionLabel = styled('span')`
  display: block;
  padding: 10px 0 5px 10px;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05rem;
  color: ${grey[600]};
`;

function TriggerButtonMenu({ menu, createHandleMenuClick }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();


    const [showDropdown, setShowDropdown] = React.useState(false);
    const [activeMenu, setActiveMenu] = React.useState(null);
    const menuCategory = useSelector((state) => state.menuCategory);

    const handleMouseEnter = () => {
        setShowDropdown(true);
      };
    
      const handleMouseLeave = () => {
        setShowDropdown(false);
      };
    
      const handleMenuItemClick = (menuItem,category_id) => {
        setActiveMenu(menuItem);
        setShowDropdown(false);
        console.log(`Clicked on ${menuItem}`);
        dispatch(getProductByCategory(category_id));
	navigate('/product')
      };

      const getProductsById=(category_id)=>{
        dispatch(getProductByCategory(category_id));
        navigate('/product')
    }
      

  return (
     <Dropdown
      sx={{ border: 0 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <TriggerButton
        sx={{ border: 0, borderBottom: activeMenu === menu.name ? '2px solid yellow' : 'none' }}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {menu.name}
      </TriggerButton>

      <Menu slots={{ listbox: StyledListbox }}>
        {/* {showDropdown && ( */}
          <>
            {menuCategory?.categoryItem &&
              menuCategory?.categoryItem?.length > 0 &&
              menuCategory?.categoryItem?.map((menuItem) => (
                <div style={{cursor:"pointer"}}  onClick={() =>getProductsById(menuItem.id) }>
                <MenuSection key={menuItem.id} label={menuItem.name}>
                  {menuItem.child &&
                    menuItem.child.map((childItem) => (
                      <StyledMenuItem
                        key={childItem.id}
                        onClick={() => handleMenuItemClick(childItem.name,childItem.id)}
                      >
                        {childItem.name}
                      </StyledMenuItem>
                    ))}
                </MenuSection>
                </div>
              ))}
            {/* <li className="helper">Current zoom level: 100%</li> */}
          </>
        {/* )} */}
      </Menu>
    </Dropdown>
  );
}
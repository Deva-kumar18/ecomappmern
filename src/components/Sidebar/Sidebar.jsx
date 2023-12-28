import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ListAltIcon from "@mui/icons-material/ListAlt";
import InfoIcon from "@mui/icons-material/Info";
import AddBoxIcon from "@mui/icons-material/AddBox";

const Sidebar = () => {
  const sidebarData = [
    {
      title: "Admin Dashboard",
      link: "/admin",
      icon: <HomeIcon />,
    },
    { title: "User List", link: "/admin/users", icon: <ListAltIcon /> },
    { title: "User Details", link: "/admin/users/:userId", icon: <InfoIcon /> },
    { title: "Add New User", link: "/admin/users/new", icon: <AddBoxIcon /> },
    { title: "Product List", link: "/admin/products", icon: <ListAltIcon /> },
    {
      title: "Product Details",
      link: "/admin/products/:productId",
      icon: <InfoIcon />,
    },
    {
      title: "Add New Product",
      link: "/admin/products/new",
      icon: <AddBoxIcon />,
    },
    { title: "Order List", link: "/admin/orders", icon: <ListAltIcon /> },
    {
      title: "Order Details",
      link: "/admin/orders/:orderId",
      icon: <InfoIcon />,
    },
  ];

  return (
   <div className="sidebar-container">
    <ul className="sidebar" >{sidebarData.map((val,key)=>(
        <li key={key}>
            <Link to={val.link}>
            <div className="side-map">
           <li className="side-ico">{val.icon}</li>
                <li >{val.title}</li>
            </div>
            </Link> 
        </li>
    ))}</ul>
   </div>
  );
};

export default Sidebar;

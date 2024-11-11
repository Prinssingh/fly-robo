import React from "react";
import { Link } from "react-router-dom";
import "../styles/header/dropdown.css";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSubmenu: null,
    };
  }

  render() {
    const { openSubmenu } = this.state;

    const menuItems = [
      {
        icon: "fas fa-wrench",
        title: "DIY Project Kit",
        hasSubmenu: true,
        link: "/diy",
        submenu: [
          { title: "Kits for Beginners", link: "/diy/beginners" },
          { title: "Advanced Kits", link: "/diy/advanced" },
        ],
      },
      {
        title: "Multirotor",
        hasSubmenu: true,
        link: "/multirotor",
        submenu: [
          { title: "Drones", link: "/multirotor/drones" },
          { title: "Accessories", link: "/multirotor/accessories" },
        ],
      },
      { title: "E-Bike", hasSubmenu: false, link: "/ebike", submenu: [] },
      { title: "Robot Spare Parts", hasSubmenu: false, link: "/robot-parts", submenu: [] },
      {
        title: "Development Board and Accessories",
        hasSubmenu: true,
        link: "/development-boards",
        submenu: [
          { title: "Arduino", link: "/development-boards/arduino" },
          { title: "Arduino", link: "/development-boards/arduino" },
          { title: "Arduino", link: "/development-boards/arduino" },
          { title: "Raspberry Pi", link: "/development-boards/raspberry-pi" },
        ],
      },
      { title: "Motor and Driver", hasSubmenu: true, link: "/motor-driver", submenu: [] },
      {
        title: "Electronic Components",
        hasSubmenu: true,
        link: "/electronics",
        submenu: [],
      },
      {
        title: "3D Printer and Accessories",
        hasSubmenu: true,
        link: "/3d-printer",
        submenu: [],
      },
      { title: "Batteries and Chargers", hasSubmenu: true, link: "/batteries", submenu: [] },
      { title: "Tools and Accessories", hasSubmenu: true, link: "/tools", submenu: [] },
      { title: "Mechanical", hasSubmenu: true, link: "/mechanical", submenu: [] },
      { title: "Smart Home", hasSubmenu: false, link: "/smart-home", submenu: [] },
      { title: "Other", hasSubmenu: false, link: "/other", submenu: [] },
    ];

    return (
      
      <div className="dropdown-main">
        <div className="dropdown-containar">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li className="mainlink"
              key={index}
              onMouseEnter={() =>
                item.hasSubmenu && this.setState({ openSubmenu: index })
              }
              onMouseLeave={() =>
                item.hasSubmenu && this.setState({ openSubmenu: null })
              }
            >
              <Link to={item.link} className="drowplink submenu-link">
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </Link>
              {item.hasSubmenu && <i className="fas fa-chevron-right"></i>}
              {item.hasSubmenu && openSubmenu === index && item.submenu && (
                <ul className="submenu">
                  {item.submenu.map((subitem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subitem.link} className="submenu-link">
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        </div>
      </div>
    );
  }
}
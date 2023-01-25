import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link, useNavigate } from "react-router-dom";



import { menu, closedMenu } from "./menu";
import { hasChildren } from "./utils";

export default function Sidebar() {
    const [open, setOpen] = useState( () => {
      if(window.innerWidth > 1200) {
        return true;
      } else {
        return false;
      }
    }
    );
  return (
    open ? <div className="sidebar-open">
        <div className="sidebar-header">
            <p>Header</p>
            <p onClick={(e) => setOpen(!open)}>X</p>
        </div>
        {
            menu.map((item, key) => <MenuItem key={key} item={item} />)
        }
        <div className="sidebar-footer">
            Footer
        </div>
    </div> : <div className="sidebar-closed">
    <div className="sidebar-header" onClick={(e) => setOpen(!open)}>
            <h2>E</h2>   
        </div>
        {
            closedMenu.map((item, key) => <ClosedMenuItem key={key} item={item} />)
        }
    </div>
  );
}

const ClosedMenuItem = ({ item }) => {
  const Component = hasChildren(item) ? ClosedSingleLevel : ClosedSingleLevel;
  return <Component item={item} />;
};

const ClosedSingleLevel = ({ item }) => {
  return (
    <ListItem button onClick={e => onButtonClick(e, item.to)}>
      {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ""}
    </ListItem>
  );
};

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const onButtonClick = (e, link) => {
    e.preventDefault();
    window.location.href=link;
}
const SingleLevel = ({ item }) => {
  return (
    <ListItem button onClick={e => onButtonClick(e, item.to)}>
      {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ""}
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

const MultiLevel = ({ item }) => {
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
      {item.icon ? <ListItemIcon>{item.icon}</ListItemIcon> : ""}
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

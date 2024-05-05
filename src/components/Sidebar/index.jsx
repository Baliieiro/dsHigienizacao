import ClearIcon from "@mui/icons-material/Clear";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import navList from "../../constants/navList";
import { Container, Content } from "./styles";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container $sidebar={active}>
      <ClearIcon onClick={closeSidebar} />
      <Content>
        {navList.map((item) => (
          <Link to={item.links} key={item.id}>
            {item.label}
          </Link>
        ))}
      </Content>
    </Container>
  );
};

export default Sidebar;

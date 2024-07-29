import styled from "styled-components";
import SideBarMobile from "./SideBarMobile";
import SidebarDesktop from "./SideBarDesktop";



const Sidebar = ({ logout }) => {
  return (  
    <>
      <SidebarDesktop logout={logout} />
      <SideBarMobile logout={logout} />
    </>
  );
}
 
export default Sidebar;
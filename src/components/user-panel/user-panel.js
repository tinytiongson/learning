import React, { useMemo } from "react";
// import { useHistory } from "react-router-dom";
import ContextMenu, { Position } from "devextreme-react/context-menu";
import List from "devextreme-react/list";
import { useAuth } from "../../contexts/auth";
import "./user-panel.scss";

export default function UserPanel({ menuMode }) {
  const { user, signOut } = useAuth();
  // const history = useHistory();

  // function navigateToProfile() {
  //   history.push("/profile");
  // }
  const menuItems = useMemo(
    () => [
      {
        text: "Profile",
        icon: "user",
        // onClick: navigateToProfile
      },
      {
        text: "Logout",
        icon: "runner",
        onClick: signOut,
      },
    ],
    [signOut]
  );

  return (
    <div className={"user-panel"}>
      <div className={"user-info"}>
        <div className={"image-container"}>
          <div className={"circle"}><span className={"initials"}>CT</span></div>
        </div>
        <div className={"user-name"}>{user.username}</div>
      </div>

      {menuMode === "context" && (
        <ContextMenu
          items={menuItems}
          target={".user-button"}
          showEvent={"dxclick"}
          width={180}
          cssClass={"user-menu"}
        >
          <Position my={"top center"} at={"bottom center"} />
        </ContextMenu>
      )}
      {menuMode === "list" && (
        <List className={"dx-toolbar-menu-action"} items={menuItems} />
      )}
    </div>
  );
}

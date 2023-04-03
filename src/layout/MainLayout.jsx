import React, { Children } from "react";
import Menu from "../components/Menu/NavBar";

export default function MainLayout({children}) {
      return (
            <div>
                <Menu/>
                  <div>{children}</div>
            </div>
      );
}

import { FunctionComponent } from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;

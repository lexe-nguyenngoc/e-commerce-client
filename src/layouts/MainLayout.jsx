import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div>
      <header>header</header>
      {children}
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;

import styles from "../styles/Home.module.css";
import Nav from "./Nav";
import Header from "./Header.js";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <Header></Header>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;

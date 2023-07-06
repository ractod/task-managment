// components
import Image from "next/image";
// next js
import SideBar from "./SideBar";

const styles ={
   container: "flex",
   main: "flex-1 px-12 py-10",
   frame: "fixed left-1/2 top-1/2 -translate-x-1/2 blur-[200px] -z-50",
}

const Layout = ({ children }) => {
   return (
      <div className={styles.container}>
         <SideBar />
         <main className={styles.main}>
            { children }
         </main>
         <Image
            src="/images/blur-frame-2.svg"
            className={styles.frame}
            width={1000}
            height={700}
            alt="frame"
            priority
         />
      </div>
   );
}

export default Layout;
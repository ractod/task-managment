//  next js
import Image from "next/image";

const styles = {
   main: "relative h-screen flex items-center justify-center px-2",
   frame: "absolute top-0 sm:top-[-200px] right-0 sm:right-[-300px] blur-3xl -z-50",
   content: "w-[450px] p-4 sm:p-8 border-2 border-[#212329] rounded-[10px] backdrop-blur-3xl",
   logo: "mx-auto"
};

const AuthLoayout = ({ children }) => {
   return (
      <main className={styles.main}>
         <div className={styles.content}>
            <Image
               src="/images/logo.svg"
               className={styles.logo}
               width={140}
               height={57}
               alt="logo"
            />
            { children }
         </div>
         <Image
            src="/images/blur-frame.svg"
            className={styles.frame}
            width={1000}
            height={700}
            alt="frame"
            priority
         />
      </main>
   );
};

export default AuthLoayout;

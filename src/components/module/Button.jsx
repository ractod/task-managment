// components
import DotLoading from "@components/DotLoading";

const styles = {
   button: (loading) => `
      h-[50px] px-6 rounded-[10px] active:scale-95 transition-all duration-300 ease-out 
      ${loading ? "bg-transparent" : "bg-primary-main hover:bg-primary-dark"}
   `,
   buttonText: (loading) => `text-lg text-typography font-medium ${loading ? "hidden" : ""}`,
   loadingcontainer: (loading) => `w-full h-full ${loading ? "block" : "hidden"}`,
};

const Button = ({ children, className, loading, ...restProps }) => {

   return (
      <button  
         disabled={loading} 
         className={`${styles.button(loading)}  ${className}`} 
         {...restProps} 
      >
         <span className={styles.loadingcontainer(loading)}>
            <DotLoading />
         </span>
         <span className={styles.buttonText(loading)}> {children} </span>
      </button>
   );
};

export default Button
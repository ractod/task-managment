import { useEffect, useState } from "react";
// next js
import { useRouter } from "next/router";

const styles = {
   container: "absolute top-0 left-0 w-full h-1",
   line: "h-full bg-primary-dark animate-navigate"
}

/* 
   usage: shows a line loading in navigating between pages
   used in: _app.jsx
*/
const NavigateLoading = () => {

   let timeout = null
   const router = useRouter()
   const [loading, setLoading] = useState(false)

   useEffect(() => {
      router.events.on("routeChangeStart", () => {
         clearTimeout(timeout)
         setLoading(true)
         timeout = setTimeout(() => setLoading(false), 500)
      })
   }, [])


   return (
      <div className={styles.container}>
         { loading && <div className={styles.line}></div> }
      </div>
   );
}

export default NavigateLoading;
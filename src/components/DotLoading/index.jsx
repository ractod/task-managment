const styles = {
   container: "h-full w-full flex items-center justify-center",
   dotsContainer: "flex items-center  gap-x-2",
   dot: `h-2 w-2 rounded-full bg-primary-main animate-scale
   [&:nth-of-type(2)]:animation-delay-100 [&:nth-of-type(3)]:animation-delay-200
   [&:nth-of-type(4)]:animation-delay-300 [&:nth-of-type(5)]:animation-delay-400
   `
}

const DotLoading = () => {
   return (
      <div className={styles.container}>
         <div className={styles.dotsContainer}>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
            <span className={styles.dot}></span>
         </div>
      </div>
   );
}

export default DotLoading;
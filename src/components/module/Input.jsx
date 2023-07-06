const styles = {
   label: "block mb-1 text-sm sm:text-base text-mute font-bold",
   input: (error, isTouched) => `
      h-[50px] w-full px-5 rounded-[10px] border-2 outline-none  
      bg-transparent text-sm text-mute placeholder:text-mute font-medium
      ${ error && isTouched ? "border-red-700" : "border-[#4A4B52]" }
   `,
   error: "mt-2 text-sm text-red-700 font-medium"
};

const Input = ({ label, name, error, isTouched, ...restProps }) => {
   return (
      <div>
         {label && (
            <label htmlFor={name} className={styles.label}> 
               {label} 
            </label>
         )}
         <input id={name} name={name} className={styles.input(error, isTouched)} {...restProps} />
         {/* show if input is touched and there is error */}
         { error && isTouched && <p className={styles.error}> { error } </p> } 
      </div>
   );
};

export default Input;

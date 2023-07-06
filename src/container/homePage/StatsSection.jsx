// utils
import { filterByStage } from "@utils/helpers";
// hooks
import useAuth from "@hooks/useAuth";

const styles = {
   section: "flex items-center gap-x-5",
   stat: "flex items-center gap-x-[10px]",
   amount: (bgColor) => `h-10 w-10 flex items-center justify-center rounded-full ${bgColor} text-white font-bold`,
   name: "text-lg text-typography font-bold"
}

const StatsSection = () => {

   const { userData } = useAuth()

   return (
      <section className={styles.section}>
         <div className={styles.stat}>
            <p className={styles.amount("bg-[#EF9712]")}> 
               {filterByStage(userData.tasks, 1).length} 
            </p>
            <p className={styles.name}> تسک ها </p>
         </div>
         
         <div className={styles.stat}>
            <p className={styles.amount("bg-[#7259C6]")}> 
               {filterByStage(userData.tasks, 2).length} 
            </p>
            <p className={styles.name}> در حال انجام </p>
         </div>

         <div className={styles.stat}>
            <p className={styles.amount("bg-[#D34748]")}> 
               {filterByStage(userData.tasks, 3).length} 
            </p>
            <p className={styles.name}> باز بینی </p>
         </div>

         <div className={styles.stat}>
            <p className={styles.amount("bg-[#3651D9]")}> 
               {filterByStage(userData.tasks, 4).length} 
            </p>
            <p className={styles.name}> تمام شده </p>
         </div>
      </section>
   );
}

export default StatsSection;
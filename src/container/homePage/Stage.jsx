// #TODO find a solution for the colors
// icon 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
// components
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
// services
import { createTask } from "@services/taskServices";
// toast
import { toast } from "react-toastify";
// utils
import { filterByStage } from "@utils/helpers";
// hooks
import useToggle from "@hooks/useToggle";
import useAuth from "@hooks/useAuth";

const styles = {
   header: (bgColor) => `relative col-span-1 flex items-center justify-between py-4 
   px-5 mb-6 bg-secondary-main rounded-[15px] after:content-[''] after:h-10 after:w-1 after:rounded-lg
   after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2 after:${bgColor}`,
   headerLeftContent: "flex items-center gap-x-5",
   stageName: "text-lg text-typography font-bold",
   amount: (bgColor) => `h-7 w-7 flex items-center justify-center rounded-full text-white ${bgColor}`,
   addButton: "h-5 w-5 flex items-center justify-center border-2 border-typography rounded-[5px] text-typography",
   cardsContainer: "flex flex-col gap-y-5"
}

const Stage = ({ color, title, hasPervious = true, hasNext = true, stage }) => {

   const [createMode, toggleCreateMode] = useToggle()
   const { userData, updateUserData } = useAuth()
   const tasks = filterByStage(userData.tasks, stage)

   const createTaskHandler = async (formData) => {
      try {
         const { data } = await createTask({...formData, stage})
         toast.success(data.message)
         updateUserData({ tasks: data.tasks })
         toggleCreateMode()
      } catch {
         toast.error("در ساخت تسک به مشکلی بر خوردیم")
      }
   }

   return (
      <div>
         <div className={styles.header(color)}>
            <div className={styles.headerLeftContent}>
               <p className={styles.stageName}> { title } </p>
               <p className={styles.amount(color)}> {tasks.length} </p>
            </div>
            <button className={styles.addButton} onClick={toggleCreateMode}>
               <FontAwesomeIcon icon={faAdd} />
            </button>
         </div>

         <div className={styles.cardsContainer}>
            {createMode && (
               <TaskForm 
                  submitHandler={createTaskHandler}
                  closeHandler={toggleCreateMode}
                  title="ساخت تسک جدید"
               />
            )}
            {tasks.map(task => (
               <TaskCard 
                  key={task._id}
                  hasNext={hasNext} 
                  hasPervious={hasPervious} 
                  task={task}
               />
            ))}
         </div>
      </div>
   );
}

export default Stage;
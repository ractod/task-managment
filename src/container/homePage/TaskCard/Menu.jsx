// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight, faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
// servicex
import { deleteTask, updateToNextStage, updateToPerviousStage } from "@services/taskServices";
// toast
import { toast } from "react-toastify";
// hooks
import useToggle from "@hooks/useToggle";
import useAuth from "@hooks/useAuth";

const styles = {
   container: "relative",
   button: "text-typography",
   menu: "w-[200px] absolute top-4 right-0 py-5 px-1 rounded-[15px] bg-secondary-light shadow-xl animate-zoom z-50",
   menuItem: "group flex items-center gap-x-3 py-3 px-4 rounded-[10px] hover:bg-[#272a3066] duration-300 cursor-pointer",
   menuItemName: "font-bold text-typography group-hover:text-primary-main duration-300",
   menuItemIcon: "text-primary-main",
   backdrop: "h-screen w-full fixed top-0 left-0 z-40"
}

const Menu = ({ hasNext, hasPervious, toggleEditMode, taskId }) => {

   const [isOpen, toggleIsOpen] = useToggle()
   const { updateUserData } = useAuth()

   const nextStageHandler = async () => {
      try {
         const { data } = await updateToNextStage(taskId)
         toast.success(data.message)
         updateUserData({ tasks: data.tasks })
         toggleIsOpen()
      } catch {
         toast.error("به مشکلی بر خوردیم")
      }
   }

   const perviousStageHandler = async () => {
      try {
         const { data } = await updateToPerviousStage(taskId)
         toast.success(data.message)
         updateUserData({ tasks: data.tasks })
         toggleIsOpen()
      } catch {
         toast.error("به مشکلی بر خوردیم")
      }
   }

   const deleteHandler = async () => {
      try {
         const { data } = await deleteTask(taskId)
         toast.success(data.message)
         updateUserData({ tasks: data.tasks })
         toggleIsOpen()
      } catch {
         toast.error("به مشکلی بر خوردیم")
      }
   }

   return (
      <div className={styles.container} >
         <button className={styles.button} onClick={toggleIsOpen}>
            <FontAwesomeIcon icon={faEllipsis} />
         </button>
         {isOpen && (
            <ul className={styles.menu}>
               {hasNext && (
                  <li className={styles.menuItem} onClick={nextStageHandler}>
                     <FontAwesomeIcon icon={faCircleLeft} className={styles.menuItemIcon} />
                     <p className={styles.menuItemName}>مرحله بعد</p>
                  </li>
               )}
               {hasPervious && (
                  <li className={styles.menuItem} onClick={perviousStageHandler}>
                     <FontAwesomeIcon icon={faCircleRight} className={styles.menuItemIcon} />
                     <p className={styles.menuItemName}>مرحله قبل</p>
                  </li>
               )}
               <li className={styles.menuItem} onClick={deleteHandler}>
                  <FontAwesomeIcon icon={faTrashCan} className={styles.menuItemIcon} />
                  <p className={styles.menuItemName}>حذف</p>
               </li>
               <li className={styles.menuItem} onClick={toggleEditMode}>
                  <FontAwesomeIcon icon={faPenToSquare} className={styles.menuItemIcon} />
                  <p className={styles.menuItemName}>تغییر</p>
               </li>
            </ul>
         )}
         {isOpen && (
            <div className={styles.backdrop} onClick={toggleIsOpen}></div>
         )}
      </div>
   );
}

export default Menu;
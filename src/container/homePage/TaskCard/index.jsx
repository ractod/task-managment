// componentss
import Menu from "./Menu";
import TaskForm from "../TaskForm";
// services
import { updateTask } from "@services/taskServices";
// toasst
import { toast } from "react-toastify";
// hooks
import useToggle from "@hooks/useToggle";
import useAuth from "@hooks/useAuth";

const styles = {
   card: "py-5 px-4 bg-secondary-main rounded-[15px] animate-zoom drag",
   title: "text-lg text-typography font-black",
   description: "text-typography",
};

const TaskCard = ({ hasPervious, hasNext, task }) => {

   const [editMode, toggleEditMode] = useToggle();
   const { updateUserData } = useAuth();

   const editTaskHandler = async (formData) => {
      try {
         const { data } = await updateTask(formData, task._id);
         toast.success(data.message);
         updateUserData({ tasks: data.tasks });
         toggleEditMode();
      } catch {
         toast.error("در تغییر تسک به مشکلی بر خوردیم");
      }
   };

   if (editMode) {
      return (
         <TaskForm
            initialvalues={task}
            closeHandler={toggleEditMode}
            submitHandler={editTaskHandler}
            title="تغییر تسک"
         />
      );
   }

   return (
      <div  className={styles.card}  >
         <Menu
            hasPervious={hasPervious}
            hasNext={hasNext}
            toggleEditMode={toggleEditMode}
            taskId={task._id}
         />
         <p className={styles.title}> {task.title} </p>
         <p className={styles.description}>{task.description}</p>
      </div>
   );
};

export default TaskCard;

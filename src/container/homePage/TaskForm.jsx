// componentts
import Button from "@components/module/Button";
import Input from "@components/module/Input";
// icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
// hooks
import useFormData from "@hooks/useFormData";
// utils
import { taskFormValidator } from "@utils/validators";

const styles = {
   form: "p-5 bg-secondary-main rounded-[15px] animate-zoom",
   header: "flex items-center justify-between text-white",
   title: "text-lg font-bold mb-2",
   textarea: `h-[100px] w-full p-5 mt-2 rounded-[10px] border-2 border-[#4A4B52] outline-none 
   bg-transparent text-sm text-mute placeholder:text-mute font-medium resize-none`,
   button: "w-full mt-6"
};

/** @param {function} submitHandler - update or create task handler */

const TaskForm = ({ closeHandler, submitHandler, title, initialvalues }) => {

   const { generateInputProps, loading, submit } = useFormData(
      initialvalues || { title: "", description: "" },
      taskFormValidator,
      submitHandler
   )

   return (
      <form className={styles.form} onSubmit={submit}>
         <div className={styles.header}>
            <p className={styles.title}> { title } </p>
            <button onClick={closeHandler}>
               <FontAwesomeIcon icon={faXmark} />
            </button>
         </div>
         <Input
            name="title"
            placeholder="عنوان تسک خود را وارد کنید"
            type="text"
            {...generateInputProps("title")}
         />
         <textarea
            name="description"
            placeholder="توضیحات تسک (اختیاری)"
            type="text"
            className={styles.textarea}
            {...generateInputProps("description")}
         />
         <Button className={styles.button} loading={loading}> 
            تمام 
         </Button>
      </form>
   );
};

export default TaskForm;

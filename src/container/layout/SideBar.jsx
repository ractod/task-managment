// icon
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faListCheck, faHouseUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// services
import { logoutUser } from "@services/authServices";
// next js
import Link from "next/link";
import { useRouter } from "next/router";
// toast
import { toast } from "react-toastify";
// hooks
import useAuth from "@hooks/useAuth";

const styles = {
   aside: "sticky flex flex-col top-0 min-w-[250px] h-screen px-4 py-10 border-l-2 border-secondary-light rounded-l-[60px]",
   userProfile: "flex items-center justify-center gap-x-3 pb-5 border-b-2 border-secondary-light",
   userAvatar: "text-4xl text-primary-main",
   userName: "text-lg md:text-2xl text-typography font-extrabold",
   list: "flex flex-col gap-y-1 mt-10",
   listItem: (active) => `
      block flex items-center gap-x-4 px-10 py-4 rounded-xl 
      last:hover:text-red-600 transition-all duration-300 cursor-pointer
      ${active ? "bg-[#272A30] text-typography" : "text-mute hover:text-primary-main"}
   `,
   listItemIcon: "text-2xl",
   listItemText: "font-medium",
}

const SideBar = () => {

   const router = useRouter()
   const { userData } = useAuth()

   const logoutHandler = async () => {
      try {
         const { data } = await logoutUser()
         toast.success(data.message)
         window.location.pathname = "/auth/login"
      } catch {
         toast.error("مشکلی در هنگام خروج از حساب به وجود آمد لطفا دوباره امتحان کنید")
      }
   }

   return (
      <aside className={styles.aside}>
         <div className={styles.userProfile}>
            <FontAwesomeIcon icon={faUserCircle} className={styles.userAvatar} />
            <p className={styles.userName}> سلام؛ {userData.name} </p>
         </div>
         <ul className={styles.list}>
            <Link href="/" className={styles.listItem(router.pathname == "/")}>
               <FontAwesomeIcon icon={faListCheck} className={styles.listItemIcon} />
               <p className={styles.listItemText}>تسک های من</p>
            </Link>
            <Link href="/profile" className={styles.listItem(router.pathname == "/profile")}>
               <FontAwesomeIcon icon={faHouseUser} className={styles.listItemIcon} />
               <p className={styles.listItemText}>اطلاعات حساب</p>
            </Link>
            <li className={styles.listItem()} onClick={logoutHandler}>
               <FontAwesomeIcon icon={faRightFromBracket} className={styles.listItemIcon} />
               <p className={styles.listItemText}>خروج از حساب</p>
            </li>
         </ul>
      </aside>
   );
}

export default SideBar;
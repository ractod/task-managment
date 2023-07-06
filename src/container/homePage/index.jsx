import { Fragment } from "react";
// component
import StatsSection from "./StatsSection";
import Stage from "./Stage";

const HomePageContainer = () => {
   return (
      <Fragment>
         <StatsSection />
         <section className="grid grid-cols-4 mt-10 gap-x-7">
            <Stage 
               color="bg-[#EF9712]" 
               title="تسک ها" 
               hasPervious={false}
               stage={1}
            />
            <Stage 
               color="bg-[#7259C6]" 
               title="درحال انجام"
               stage={2}
            />
            <Stage 
               color="bg-[#D34748]" 
               title="باز بینی"
               stage={3}
            />
            <Stage 
               color="bg-[#3651D9]" 
               title="تمام شده"
               hasNext={false}
               stage={4}
            />
         </section>
      </Fragment>
   );
}

export default HomePageContainer;
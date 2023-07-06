// container
import HomePageContainer from "@container/homePage";
import Layout from "@container/layout";
// component
import WithAuth from "@components/WithAuth";

const HomePage = () => {
   return (
      <Layout>
         <HomePageContainer />
      </Layout>
   )
};

export default WithAuth(HomePage); 
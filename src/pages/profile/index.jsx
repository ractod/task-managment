// components
import WithAuth from "@components/WithAuth";
// container
import Layout from "@container/layout";
import ProfilePageContainer from "@container/profilePage";

const ProfilePage = () => {
   return (
      <Layout>
         <ProfilePageContainer />
      </Layout>
   )
};

export default WithAuth(ProfilePage);

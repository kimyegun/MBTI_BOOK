import HeaderContainer from '../containers/common/HeaderContainer';
import Footer from '../components/common/Footer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from './../containers/posts/PaginationContainer';




const PostListPage = () => {
  return (
    <>
     <HeaderContainer />
      <PostListContainer />
      <PaginationContainer/>
      <Footer/>
     </>
  );
};

export default PostListPage;

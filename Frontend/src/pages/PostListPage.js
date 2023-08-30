import HeaderContainer from '../containers/common/HeaderContainer';
import PostListContainer from '../containers/posts/PostListContainer';
import PaginationContainer from './../containers/posts/PaginationContainer';
import HeaderBanner from '../components/banner/banner';
import PortfolioComponent from '../components/posts/Portfoliocomponent'



const PostListPage = () => {
  return (
    <>
      <HeaderContainer />
      <HeaderBanner/>
      <PortfolioComponent/>
      <PostListContainer />
      <PaginationContainer/>
    </>
  );
};

export default PostListPage;

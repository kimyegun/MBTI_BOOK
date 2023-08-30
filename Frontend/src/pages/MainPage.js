import HeaderContainer from '../containers/common/HeaderContainer';
import HeaderBanner from '../components/banner/banner';
import PortfolioComponent from '../components/posts/Portfoliocomponent';
import Footer from '../components/common/Footer';

const MainPage = () => {
  return (
    <>
      <HeaderContainer />
      <HeaderBanner />
      <PortfolioComponent />
      <Footer />
    </>
  );
};

export default MainPage;

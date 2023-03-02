
import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet} from 'react-helmet-async';




const Home = () => {
  return (
    <>
  <Helmet>
    <title>Home Page</title>
    <meta name="description" content="Web site created using create-react-app" />

    </Helmet>
    <Header />   

    <MainContent   pageName="HOME Page"         />   



    <Footer />
  </>
  );
}

export default Home;

import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet} from 'react-helmet-async';



const Css = () => {
  return (
    <>
    <Helmet>
    <title>Css Page</title>
    <meta name="description" content="Web site created using create-react-app" />

    </Helmet>

    <Header />
   
   
   
    <MainContent pageName="CSS Page" />  


    <Footer />
  </>
  );
}

export default Css;

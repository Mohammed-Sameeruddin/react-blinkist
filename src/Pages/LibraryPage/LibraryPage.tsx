import MyLibrary from "../../components/templates/MyLibrary/MyLibrary";
import Typography from "../../components/atoms/Typography/Typography";
import Header from "../../components/organisms/Header/Header";
import Tabs from "../../components/organisms/Tab/LabTabs";
import Footer from "../../components/organisms/Footer/Footer";
import Constants from "../../data/Constants";

const LibraryPage = () => {
  return (
    <MyLibrary
      header={<Header />}
      heading={<Typography variant="h1">{Constants.header.heading}</Typography>}
      tab={<Tabs />}
      footer={<Footer />}
    />
  );
};

export default LibraryPage;

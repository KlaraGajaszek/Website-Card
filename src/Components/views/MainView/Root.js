import React, { useState } from 'react';

import './RootStyles.css';
import AppContext from '../../../context/context';
import Footer from '../../Navigations/Footer/Footer';
import MainPageContent from '../../MainPageContent/MainPageContent';
import GalleryModal from '../../molecules/GalleryModal/GalleryModal';

const App = () => {
  const [isGalleryModalOpen, setGalleryModalVisiblity] = useState(false);

  const handleGalleryModalClose = () => {
    setGalleryModalVisiblity(false);
  };

  const handleGalleryModalShow = () => {
    setGalleryModalVisiblity(true);
  };

  return (
    <AppContext.Provider
      value={{
        isGalleryModalOpen,
        handleGalleryModalShow,
        handleGalleryModalClose,
      }}
    >
      <div className="content__wrapper">
        <div className="content">
          <>
            <MainPageContent />
            <GalleryModal />
          </>
        </div>
      </div>
      <Footer />
    </AppContext.Provider>
  );
};

export default App;

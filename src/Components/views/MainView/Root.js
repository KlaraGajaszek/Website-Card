import React, { useState } from 'react';

import './RootStyles.css';
import AppContext from '../../../context/context';
import Footer from '../../molecules/Footer/Footer';
import MainPageContent from '../../molecules/MainPageContent/MainPageContent';
import GalleryModal from '../../molecules/GalleryModal/GalleryModal';

const Root = () => {
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

export default Root;

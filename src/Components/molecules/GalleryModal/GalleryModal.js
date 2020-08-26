import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { Modal } from 'react-bootstrap';
import { GiEarthAmerica } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import AppContext from '../../../context/context';
import ButtonClose from '../../atoms/ButtonClose/ButtonClose';
import './GalleryModal.css';

const GalleryModal = () => {
  const value = useContext(AppContext);

  const { isGalleryModalOpen, handleGalleryModalClose } = value;

  const [photos, setPhotos] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const getPhotoData = () => {
    axios
      .get('https://picsum.photos/v2/list?limit=10')
      .then((res) => {
        return setPhotos([...res.data]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPhotoData();
  }, []);

  const getNextPhoto = () => {
    if (photoIndex === 9) {
      setPhotoIndex(9);
    } else {
      setPhotoIndex(photoIndex + 1);
    }
  };

  const getPrevPhoto = () => {
    if (photoIndex === 0) {
      setPhotoIndex(0);
    } else {
      setPhotoIndex(photoIndex - 1);
    }
  };

  return (
    <>
      <Modal
        show={isGalleryModalOpen}
        onHide={handleGalleryModalClose}
        className="galleryModal__wrapper"
      >
        <Modal.Header className="galleryModal__header">
          <div className="galleryHeader__firstSection__wrapper">
            <h6>Gallery In Modal</h6>
            <ButtonClose
              content={<IoMdClose className="galleryModal__icon__close" />}
              btnFunction={handleGalleryModalClose}
              className={'closeModalButton'}
            />
          </div>
          <div className="galleryHeader__secondSection__wrapper">
            <GiEarthAmerica className="galleryModal__icon__earth" />
            {photos.length === 0 ? (
              ''
            ) : (
              <a
                href={photos[photoIndex].url}
                rel="noopener noreferrer"
                target="_blank"
              >
                {photos[photoIndex].url}
              </a>
            )}
          </div>
        </Modal.Header>
        <div className="gallerModal__content">
          <div className="galleryModal__imageSlider__wrapper">
            <button
              className="galleryModal__content__btn"
              disabled={photoIndex === 0 ? true : false}
              style={{
                color: photoIndex === 0 ? 'grey' : '#2699fb',
                borderColor: photoIndex === 0 ? 'grey' : '#2699fb',
              }}
              onClick={getPrevPhoto}
            >
              <IoIosArrowBack className="galleryModal__icon__arrayBack" />
            </button>
            {photos.length === 0 ? (
              ''
            ) : (
              <img
                src={photos[photoIndex].download_url}
                alt="foto"
                className="galleryModal__content__picsumImage"
              />
            )}
            <button
              className="galleryModal__content__btn"
              style={{
                color: photoIndex === 9 ? 'grey' : '#2699fb',
                borderColor: photoIndex === 9 ? 'grey' : '#2699fb',
              }}
              onClick={getNextPhoto}
            >
              <IoIosArrowForward className="galleryModal__icon__arrayNext" />
            </button>
          </div>
          <div className="galleryModal__content__author__wrapper">
            {photos.length === 0 ? (
              ''
            ) : (
              <p className="galleryModal__content__author">
                {photos[photoIndex].author}
              </p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GalleryModal;

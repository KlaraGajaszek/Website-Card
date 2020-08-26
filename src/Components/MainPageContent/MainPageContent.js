import React, { useState, useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Hexagon from '../atoms/Hexagon/Hexagon';
import './MainPageContent.css';
import AppContext from '../../context/context';

import { mainPagedata } from '../data';

const Box = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const value = useContext(AppContext);
  const { handleGalleryModalShow } = value;
  const { title, introduceContent, fullContent } = mainPagedata;

  return (
    <>
      <div className="hexagon__wrapper">
        <Hexagon />
      </div>
      <div
        className={
          isCollapsed
            ? 'MainContent__wrapper afterCollapse'
            : 'MainContent__wrapper '
        }
        style={{ animationPlayState: isCollapsed ? '' : 'paused' }}
      >
        <div className="sideBar"></div>
        <div className="mainContent">
          <div className="content__elements">
            <h1 className={isCollapsed ? 'h1AfterCollapsed' : ''}>{title}</h1>
            <div style={{ marginBottom: isCollapsed ? '40px' : '0' }}>
              {isCollapsed ? (
                <p
                  className={
                    isCollapsed
                      ? 'content__contentText afterTextCollapse'
                      : 'content__contentText '
                  }
                  style={{ animationPlayState: isCollapsed ? '' : 'paused' }}
                >
                  {fullContent}
                </p>
              ) : (
                <p
                  className="content__contentText"
                  style={{ animationPlayState: isCollapsed ? '' : 'paused' }}
                >
                  {introduceContent}
                </p>
              )}
            </div>
            <div className="buttons_container">
              <Button
                variant="outline-primary"
                size="lg"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed === true ? ' LESS' : 'MORE'}
              </Button>
              <Button
                variant="primary"
                size="lg"
                onClick={handleGalleryModalShow}
              >
                Show Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box;

import React, { useState, useEffect } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { Game, Button } from "../../common/styles";
import { GameContainer, WinContainer } from "./styles";

import DraggableList from "./components/DraggableList";


import { useImagesContext } from "../../contexts/ImagesContext";

import randomInt from "../../common/utils/randomInt";

export default (props) => {
  const { images } = useImagesContext();
  const [currentImage, setCurrentImage] = useState(null);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    disablePageScroll();
    return ()=> {
      enablePageScroll();
    }
  }, []);

  useEffect(() => {
    if (Object.keys(images).length > 0) {
      const imageNumber = randomInt(1, Object.keys(images).length)
      setCurrentImage(images[`${imageNumber}.png`]);
    }
  }, [images]);

  let content = (
    <DraggableList
      items={"1 2 3 4 5".split(" ")}
      setCompleted={setCompleted}
      img={currentImage}
    />
  );


  if (completed) {
    content = (
      <WinContainer>
        <img src={currentImage} alt="puzzle"  />
      </WinContainer>
    );
  }

  return (
    <Game bg={images["bg.png"]} size="400px" filter="1" >
      {/* <Nav type="back" to="/shop" /> */}
      <GameContainer>
          <div className="options">
            <Button onClick={completed ? props.goBackToVideo : undefined}>{completed ? "Go back to video!" : "Puzzle"}</Button>
          </div>
          <div className="inner">
          {content}
          </div>
      </GameContainer>
    </Game>
  );
};

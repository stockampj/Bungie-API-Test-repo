import React from 'react';
import backgroundMovement from '../media/images/mapLines.png';

function BackgroundMovement(){
  return(
    <div className="app-background-movement">
      <style>{`
        .app-background-movement{
          position: fixed;
          z-index: -1;
          display: block;
          margin-left: -50%;
          margin-top: -25%;
          width: 300%;
          height: 300%;
          background-image: url(${backgroundMovement});
          background-position: center, center;
          background-size: 80%;
          background-repeat: no-repeat;
          opacity: .1;
          animation: rotation 1200s infinite linear;
        }
        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }
      `}</style>
    </div>
  );
}

export default BackgroundMovement;
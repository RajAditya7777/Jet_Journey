import React from 'react';

function SendButton({ onClick }) {
  return (
    <>
      <style>
        {`
          /* From Uiverse.io by wang3616359git */ 
          .bt {
            border: none;
            user-select: none;
            font-size: 18px;
            color: white;
            text-align: center;
            background-color: #1447E6;
            box-shadow: #cacaca 2px 2px 10px 1px;
            border-radius: 12px;
            height: 60px;
            line-height: 60px;
            width: 155px;
            transition: all 0.2s ease;
            position: relative;
            cursor: pointer;
          }

          .msg {
            height: 0;
            width: 0;
            border-radius: 2px;
            position: absolute;
            left: 15%;
            top: 25%;
          }

          .bt:active {
            transition: all 0.001s ease;
            background-color: #5d9fcd;
            box-shadow: #97989a 0 0 0 0;
            transform: translateX(1px) translateY(1px);
          }

          .bt:hover .msg {
            animation: msgRun 2s forwards;
          }

          @keyframes msgRun {
            0% {
              border-top: #d6d6d9 0 solid;
              border-bottom: #f2f2f5 0 solid;
              border-left: #f2f2f5 0 solid;
              border-right: #f2f2f5 0 solid;
            }

            20% {
              border-top: #d6d6d9 14px solid;
              border-bottom: #f2f2f5 14px solid;
              border-left: #f2f2f5 20px solid;
              border-right: #f2f2f5 20px solid;
            }

            25% {
              border-top: #d6d6d9 12px solid;
              border-bottom: #f2f2f5 12px solid;
              border-left: #f2f2f5 18px solid;
              border-right: #f2f2f5 18px solid;
            }

            80% {
              border-top: transparent 12px solid;
              border-bottom: transparent 12px solid;
              border-left: transparent 18px solid;
              border-right: transparent 18px solid;
            }

            100% {
              transform: translateX(150px);
              border-top: transparent 12px solid;
              border-bottom: transparent 12px solid;
              border-left: transparent 18px solid;
              border-right: transparent 18px solid;
            }
          }
        `}
      </style>

      <button className="bt" onClick={onClick}>
        <span className="msg"></span>
        SEND
      </button>
    </>
  );
}

export default SendButton;

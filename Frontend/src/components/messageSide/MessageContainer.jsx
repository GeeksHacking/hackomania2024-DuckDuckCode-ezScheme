import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { BsChatLeftTextFill } from "react-icons/bs";

const MessageContainer = () => {
  const notChatting = false;
  return (

    <div className='md:min-w-[450px] flex flex-col'>
        {notChatting? (<NotChatting />) : (
          <>
          <div className='bg-slate-500 px-4 py-2 mb-2'>
              <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>Jessica Zhang</span>
          </div>
          <Messages /> 
          <MessageInput />
          </> 
        )}
    </div>
  );
};

const NotChatting = () => {
  return(
      <div className='flex items-center justify-center w-full h-full'>
          <div className=' px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
              <p>Welcome!</p>
              <p>How may i assist you.</p>
              <BsChatLeftTextFill className='text-2xl md:text-3xl text-center'/>
          </div>
      </div>
  );
};

export default MessageContainer
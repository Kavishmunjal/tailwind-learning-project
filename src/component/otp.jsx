import { useRef } from "react";

export function Otp() {
    const ref1 = useRef();
    const ref2 = useRef();
    const ref3 = useRef();
    const ref4 = useRef();
    const ref5 = useRef();
    const ref6 = useRef();

    return (
 <div className="flex flex-col items-center p-[200px]">
   <div className="flex ">
       <InputBox reference={ref1} onDone={()=>{ref2.current.focus();}}/>
       <InputBox reference={ref2} onDone={()=>{ref3.current.focus();}}/>
       <InputBox reference={ref3} onDone={()=>{ref4.current.focus();}}/>
       <InputBox reference={ref4} onDone={()=>{ref5.current.focus();}}/>
       <InputBox reference={ref5} onDone={()=>{ref6.current.focus();}}/>
       <InputBox reference={ref6} onDone={()=>{ref6.current.focus();}}/>
   
   </div>
   <div className=" ">
       <button className=" mt-4 text-white h-[50px] w-[200px] bg-[#2B9999] rounded-2xl">Click to Submit</button>
   </div>
   
</div>    )
}

function InputBox({reference,onDone}){

return(
  <div>
    <input ref={reference} onChange={onDone} type="text" className="px-4 text-white m-1 h-[50px] w-[40px] bg-[#3B9797] outline-none rounded-2xl"></input>
  
  </div>
)}
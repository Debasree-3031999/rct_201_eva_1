import { useState } from "react";

export const useList = (init: number[]) => {
  let [list, setList] = useState(init);

  const push=()=>{
    if (list.length===0) {
      setList([1]);
    } else {
      let temp: number[] = [...list];
      temp.push(list.length + 1);
      setList(temp);
    }
  };

  const pop=()=>{
    let temp: number[] = [...list];
    temp.pop();
    setList(temp);
  };

  const clear=()=> {
    setList([]);
  };
  const reset=()=>{
    setList(init);
  };

  const map=(el:any)=>{
    let temp: number[] = [...list];
    let rs:number[]=temp.map((e)=>(e*2))
    setList(rs);
  };

  return [list,{push,pop,clear,reset,map}];
};

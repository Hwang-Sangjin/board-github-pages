import { useRecoilState,useRecoilValue } from "recoil";
import charCountState from "../states/charCountState";
import textState from "../states/state";
import { useEffect } from "react";

function CharacterCounter() {
    return (
      <div>
        <TextInput />
        <CharacterCount />
      </div>
    );
  }

  

  function CharacterCount() {
    const count = useRecoilValue(charCountState);
  
    return <>Character Count: {count}</>;
  }
  
  function TextInput() {
    const [text, setText] = useRecoilState(textState);
  
    const onChange = (event) => {
      setText(event.target.value);
    };

    useEffect(()=>{
      console.log(text)
    },[text])
  
    return (
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    );
  }

  export default CharacterCounter
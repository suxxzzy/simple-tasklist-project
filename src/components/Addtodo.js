import styled from "styled-components";
import { useState } from 'react';

const AddTodoWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 10%;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid pink;
  padding: 0.5rem;
  flex: 9 1 0;
`

const Input = styled.input`
  width: 98%;
  height: 68%;
  border: none;
  font-size: 1.2rem;
  &:focus{
    outline: none;
  }
`

export default function Addtodo({updateTaskList}){
  const [value,setValue] = useState('');

  const handleChangeValue = (event) => {
    setValue(event.target.value);
  }

  const handleKeyUp = (event) => {
    if(event.key === "Enter"){
      updateTaskList(event)
      setValue('')
    }
  }

  return (
    <AddTodoWrapper>
      <InputWrapper>
        <Input onKeyUp={handleKeyUp} onChange = {handleChangeValue} value = {value} placeholder = "Write tasklist and press enter..."></Input>
      </InputWrapper>
    </AddTodoWrapper>
  )
}
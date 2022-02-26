import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';

const ListWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid pink;
  width: 100%;
  height: auto;
  padding: 1rem;
  margin: 5px 0;
  &:hover{
    background-color: rgba(0,0,0,0.1);
  }
`

const TaskWrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  flex: 19 1 0;
`

const Task = styled.div`
  margin: 0 1rem;
  height: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  transition: height 0.5s;
  &.showDetail{
    height: auto;
    white-space: normal;
  }
`

const Mark = styled.div`
  display: flex;
  justify-content: flex-end;
  color: gray;
  flex: 1 1 0;
  &.important{
    color: coral;
  }
`

export default function TodoList({task}){
  const [isImportant, setIsImportant] = useState(false);
  const [isFold,setIsFold] = useState(true);

  const handleImportantClick = () => {
    setIsImportant(!isImportant);
  }

  const handleFoldClick = () => {
    console.log('working')
    setIsFold(!isFold);
  }

  return (
    <ListWrapper>
      <TaskWrapper>
        <input type= "checkbox"></input>
        <Task className={isFold? "": "showDetail"} onClick={handleFoldClick}>{task.payload}</Task>
      </TaskWrapper>
      <Mark onClick={handleImportantClick} className = {isImportant? "important" : ""}>
        <FontAwesomeIcon icon="fa-solid fa-star" size="lg"/>
      </Mark>
    </ListWrapper>
  )
}
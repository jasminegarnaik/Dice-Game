import styled from "styled-components"

const Rules = () => {
  return (
   <RulesContainer>
    <h2>How to play Dice Game</h2>
    <div className="text">
        <p>
         Select any number   
        </p>
        <p>Click on dice image</p>
        <p>After you click on the dice, if the selected number is equal to the number on the dice, you will get same point according to the number on the dice</p>
        <p>If you get wrong guess then ,2 points will be dedcuted</p>
    </div>
   </RulesContainer>
  )
}

export default Rules
const RulesContainer=styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius: 10px;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;
}
`


const TreasureGold = (props) => {
  const max = props.goldUpperLimit
  const min = props.goldLowerLimit
  const goldAmount = Math.floor(Math.random() * (max - min + 1)) + min
  return <div> Gold: {goldAmount}</div>
}

export default TreasureGold;

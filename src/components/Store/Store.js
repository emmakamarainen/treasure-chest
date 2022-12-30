import Button from "../UI/Button";
import Card from "../UI/Card";

function Store() {

    const showStoreHandler = () => {

    }
  return (
    <div>
      <Card>
        <Button onClick={showStoreHandler}>Go to Store!</Button>
      </Card>
    </div>
  );
}

export default Store;

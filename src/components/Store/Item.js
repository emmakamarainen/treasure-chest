function Item() {
    const item = {name: 'name', category: 'light weapons', type:'melee', hand: 'h1', stats:{'ignore_shield': true}}
    return <div>{item}</div>
};

export default Item;
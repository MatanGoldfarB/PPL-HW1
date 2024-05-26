type Product = {
    name: string;
    price: number;
    discounted: boolean;
    }

let inventory : Product[] = [{name: "apple1", price: 10, discounted: true},{name: "apple2", price: 2, discounted: false},{name: "apple3", price: 5, discounted: true}];
function func1(inventory: Product[]) : number {
    let discounted : Product[] = inventory.filter((x) => x.discounted === true);
    return discounted.reduce((acc, cur) => acc + cur.price, 0)/discounted.length;
}

const func2 = (inventory: Product[]) : number => inventory.filter((x) => x.discounted === true).reduce((acc, cur) => 
    acc + cur.price, 0)/inventory.reduce((acc, cur) => cur.discounted===true ? acc + 1 : acc, 0);

console.log(func2(inventory));

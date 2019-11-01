// const mango = {
//     name: 'Mango',
//     sales: 5,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     },
//   };

//   console.log(mango.sales);
//   console.log(mango.sell('TV'));
//   console.log(mango.sales);
//   console.log(mango.sell('Microwave'));
//   console.log(mango.sales);

//   const poly = {
//     name: 'Poly',
//     sales: 10,
//     sell(product) {
//       this.sales += 1;
//       return `Manager ${this.name} sold ${product}.`;
//     },
//   };

//   console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12


const Manager = function(name = 'manager', sales = 0) {
    this.name = name;
    this.sales = sales;
  
    this.sell = function(product) {
      this.sales += 1;
      return `Manager ${this.name} sold ${product}.`;
    };
  };

  const mango = new Manager('Mango', 5);

  console.log(mango.sales); // 5
  console.log(mango.sell('TV')); // Manager Mango sold TV
    console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
console.log(mango.sales); // 7

const poly = new Manager('Poly', 10);
console.log(poly.sales); // 10
console.log(poly.sell('TV')); // Manager Poly sold TV
console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
console.log(poly.sales); // 12

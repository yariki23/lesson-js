//put your code here

export const vehicle = {
  name: "Argo",
  move: function () {
    console.log(`${this.name} is moving`);
  },
  stop: function () {
    console.log(`${this.name} stopped`);
  },
};
export const ship = {
  startMachine: function () {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine: function () {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
  __proto__: vehicle,
};

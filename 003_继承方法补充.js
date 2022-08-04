// 原型链继承
// 不足
// 1. 无法向父类的构造函数传递参数
// 2. 子类原型上的属性会被实例对象共享
// function Parent() {
//   this.name = 'Parent'
// }

// Parent.prototype.getInfo = function () {
//   console.log(this.name);
// }

// function Child() {
// }

// Child.prototype = new Parent()
// Child.prototype.constructor = Child

// const child1 = new Child()
// const child2 = new Child()
// child1.getInfo()
// child2.getInfo()

// 1.相比于原型链继承, 可以向父类传参
// 不足, 无法访问父类的原型上定义的方法, 方法无法共享, 所有方法属性写在构造函数中, 每次创建都会实例化
// 借用构造函数继承
// function Parent(name) {
//   this.name = name
//   this.getInfo = function () {
//     console.log(this.name)
//   }
// }

// function Child(name) {
//   Parent.call(this, name)
// }

// const child1 = new Child('小李')
// const child2 = new Child('小红')
// child1.getInfo()
// child2.getInfo()

// 组合继承,利用父类的propotypt实现 公有属性和方法继承, 利用构造函数实现对父类私有属性的继承
// function Parent(name) {
//   this.name = name
// }
// Parent.prototype.getInfo = function () {
//   console.log(this.name)
// }
// function Child(name, age) {
//   Parent.call(this, name)
//   this.age = age
// }
// Child.prototype = new Parent()
// Child.prototype.constructor = Child
// Child.prototype.getAge = function () {
//   console.log(this.age)
// }
// const child1 = new Child('小李',18)
// const child2 = new Child('小红', 25)
// child1.getInfo()
// child1.getAge()
// child2.getInfo()
// child2.getAge()

// 缺点会调用你两次父类的构造函数, 一次在子类的构造函数中, 一次在创造子类的原型时.

// 组合寄生继承
function Parent(name) {
  this.name = name
}
Parent.prototype.getInfo = function () {
  console.log(this.name)
}
function Child(name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child
Child.prototype.getAge = function () {
  console.log(this.age)
}
const child1 = new Child('小李', 18)
const child2 = new Child('小红', 25)
child1.getInfo()
child1.getAge()
child2.getInfo()
child2.getAge()
// 所谓寄生组合式继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。其背 
// 后的基本思路是:不必为了指定子类型的原型而调用超类型的构造函数，所需要的无非就是超类型原型的一个副本而已。本质上，
// 就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。寄生组合式继承的基本模式如下所示。

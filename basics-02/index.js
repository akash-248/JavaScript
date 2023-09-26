console.log("Chaliye shuru karte hai");

//objects creation
// const rectangle = {
//     length : 1,
//     breadth : 2,

//     draw: function () {
//         console.log('draw');
//     }
// };

// create factory function
// function createRectangle(len, bre) {

//     return rectangle = {
//         length : len,
//         breadth : bre,

//         draw() {
//             console.log('draw');
//         }
//     };
// }

// let obj1 = createRectangle(5, 4);
// let obj2 = createRectangle(2, 5);
// let obj3 = createRectangle(8, 7);

//Construction Function For Object Creation
// Constructor Function Use Pascal Notation Means First Letter Of Every Word Is CAPITAL

// function Rectangle(len, bre){
// this.length = len,
// this.breadth = bre,
// this.draw = function(){
//     console.log('draw');
// };
// }

// let rectangleObject = new Rectangle(10, 5);

// dynamic nature of objects

// function Rectangle(len, bre){
//     this.length = len,
//     this.breadth = bre,
//     this.draw = function(){
//         console.log('draw');
//     };
//     }

//     let rectangleObject = new Rectangle(10, 5);

//     rectangleObject.color = 'yellow';
//     console.log(rectangleObject);

//     delete rectangleObject.color;
//     console.log(rectangleObject);

// function Rectangle(len, bre) {
//   (this.length = len),
//     (this.breadth = bre),
//     (this.draw = function () {
//       console.log("drawing");
//     });
// }

// let rectangleObject = new Rectangle(10, 5);

// let Rectangle1 = new Function(
//   'len',
//   'bre',
//    `this.length = len,
//     this.breadth = bre,
//     this.draw = function () {
//         console.log('drawing');}
//     `
// );
// let rect = new Rectangle1(10, 5);
// console.log(rect);









// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// let a = { value : 10 };
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);


// let a = 10;
// function inc(a){ 
//     a++;
//  }
// inc(a);
// console.log(a);


// let a = {value : 10}
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a.value);


// let rectangle = {
//     length : 2,
//     breadth : 4
// }

////for in loop
// for (let key in rectangle) {
//   console.log(key, rectangle[key]);
// }

//// for of loop
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }



// let rectangle = {
//     length : 2,
//     breadth : 4,
// }

// if ('color' in rectangle) {
//     console.log('present');
// } else {
//     console.log('absent');
    
// }




//// object cloning


///using iteration---->01
// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let dest = {};
// for (let key in src) {
//     dest[key] = src[key];
// }
// console.log(dest);
// src.a++;
// console.log(src);


///using     ------>02
// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let src1 = {
//     value:100
// }
// let dest = Object.assign({}, src, src1);
// src.a++;
// console.log(dest);


///using    ----->03
// let src = {
//     a:10,
//     b:20,
//     c:30
// }
// let dest = {...src}
// console.log(dest);
// src.a++;
// console.log(dest);






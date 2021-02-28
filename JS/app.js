'use strict';
//LAB-06 Get started on the Salmon Cookies project
//MAKE HOURS AS GLOBAL , SINCE WE WILL USE IT FOR THE ALL CITY WITH SAME VALUES
// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// // //MAIN FUNCTION
// function generateRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// } ;

// //SEATTLE
// const seattle = {
//     name: 'Seattle',
//     min: 23,
//     max: 65,
//     avarage: 6.3,
//     numOfCustomerArr: [],
//     numOfCookiesArr: [],
//     total: 0,

//     //1st step calculate customers per each hour :
//     getNumOfCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//         }
//     },

//     //2nd step calculate cookies :
//     getNumOfCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
//             this.numOfCookiesArr.push(cookiesNum);

//     //3rd step calculate total number of cookies :
//             this.total += cookiesNum;
//         }
//     },

//     //finally print the render function
//     render: function () {
//         const parentElement = document.getElementById('SALAMON');
//         const articleElement = document.createElement('article');
//         parentElement.appendChild(articleElement);

//         const h2Element = document.createElement('h2');
//         articleElement.appendChild(h2Element);
//         h2Element.textContent = this.name;

//         const ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
//         }
//         const liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ` + this.total + ` cookies`;

//     }
// };
// //CALLING FUNCTION FOR SEATTLE
// seattle.getNumOfCustomers();
// seattle.getNumOfCookies();
// seattle.render();

// //TOKYO
// const tokyo = {
//     name: 'Tokyo',
//     min: 3,
//     max: 24,
//     avarage: 1.2,
//     numOfCustomerArr: [],
//     numOfCookiesArr: [],
//     total: 0,

//     //1st step calculate customers per each hour :
//     getNumOfCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//         }
//     },

//     //2nd step calculate cookies :
//     getNumOfCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
//             this.numOfCookiesArr.push(cookiesNum);

//     //3rd step calculate total number of cookies :
//             this.total += cookiesNum;
//         }
//     },

//     //finally print the render function
//     render: function () {
//         const parentElement = document.getElementById('SALAMON');
//         const articleElement = document.createElement('article');
//         parentElement.appendChild(articleElement);

//         const h2Element = document.createElement('h2');
//         articleElement.appendChild(h2Element);
//         h2Element.textContent = this.name;

//         const ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
//         }
//         const liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ` + this.total + ` cookies`;

//     }
// };
// //CALLING FUNCTION FOR TOKYO
// tokyo.getNumOfCustomers();
// tokyo.getNumOfCookies();
// tokyo.render();

// //DUBAI
// const dubai = {
//     name: 'Dubai',
//     min: 11,
//     max: 38,
//     avarage: 3.7,
//     numOfCustomerArr: [],
//     numOfCookiesArr: [],
//     total: 0,

//     //1st step calculate customers per each hour :
//     getNumOfCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//         }
//     },

//     //2nd step calculate cookies :
//     getNumOfCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
//             this.numOfCookiesArr.push(cookiesNum);

//     //3rd step calculate total number of cookies :
//             this.total += cookiesNum;
//         }
//     },

//     //finally print the render function
//     render: function () {
//         const parentElement = document.getElementById('SALAMON');
//         const articleElement = document.createElement('article');
//         parentElement.appendChild(articleElement);

//         const h2Element = document.createElement('h2');
//         articleElement.appendChild(h2Element);
//         h2Element.textContent = this.name;

//         const ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
//         }
//         const liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ` + this.total + ` cookies`;

//     }
// };
// //CALLING FUNCTION FOR DUBAI
// dubai.getNumOfCustomers();
// dubai.getNumOfCookies();
// dubai.render();

// //PARIS
// const paris = {
//     name: 'Paris',
//     min: 20,
//     max: 38,
//     avarage: 2.3,
//     numOfCustomerArr: [],
//     numOfCookiesArr: [],
//     total: 0,

//     //1st step calculate customers per each hour :
//     getNumOfCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//         }
//     },

//     //2nd step calculate cookies :
//     getNumOfCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
//             this.numOfCookiesArr.push(cookiesNum);

//     //3rd step calculate total number of cookies :
//             this.total += cookiesNum;
//         }
//     },

//     //finally print the render function
//     render: function () {
//         const parentElement = document.getElementById('SALAMON');
//         const articleElement = document.createElement('article');
//         parentElement.appendChild(articleElement);

//         const h2Element = document.createElement('h2');
//         articleElement.appendChild(h2Element);
//         h2Element.textContent = this.name;

//         const ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
//         }
//         const liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ` + this.total + ` cookies`;

//     }
// };
// //CALLING FUNCTION FOR PARIS
// paris.getNumOfCustomers();
// paris.getNumOfCookies();
// paris.render();

// //LIMA
// const lima = {
//     name: 'Lima',
//     min: 2,
//     max: 16,
//     avarage: 4.6,
//     numOfCustomerArr: [],
//     numOfCookiesArr: [],
//     total: 0,

//     //1st step calculate customers per each hour :
//     getNumOfCustomers: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//         }
//     },

//     //2nd step calculate cookies :
//     getNumOfCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
//             this.numOfCookiesArr.push(cookiesNum);

//     //3rd step calculate total number of cookies :
//             this.total += cookiesNum;
//         }
//     },

//     //finally print the render function
//     render: function () {
//         const parentElement = document.getElementById('SALAMON');
//         const articleElement = document.createElement('article');
//         parentElement.appendChild(articleElement);

//         const h2Element = document.createElement('h2');
//         articleElement.appendChild(h2Element);
//         h2Element.textContent = this.name;

//         const ulElement = document.createElement('ul');
//         articleElement.appendChild(ulElement);

//         for (let i = 0; i < hours.length; i++) {
//             const liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
//         }
//         const liElement = document.createElement('li');
//         ulElement.appendChild(liElement);
//         liElement.textContent = `Total: ` + this.total + ` cookies`;

//     }
// };
// //CALLING FUNCTION FOR LIMA
// lima.getNumOfCustomers();
// lima.getNumOfCookies();
// lima.render();






//LAB 07 Add a constructor function to the cookie stand project

//MAKE HOURS AS GLOBAL , SINCE WE WILL USE IT FOR THE ALL CITY WITH SAME VALUES
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//MAKE COLUMN HEADER AS GLOBAL
let columnHeader = ['Sales/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Daily Location Total'];

// //MAIN FUNCTION
function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//MAIN CONSTRUCTORS
function City(name, min, max, avarage) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avarage = avarage;
  this.numOfCookiesArr = [];
  this.total = 0;
  this.totalPerHour = 0;
  City.allCity.push(this);
}

City.allCity = [];

//PROTOTYPE FOR GET NUM OF COOKIES
City.prototype.getNumOfCookies = function () {
  for (let i = 0; i < hours.length; i++) {
    let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
    this.numOfCookiesArr.push(cookiesNum);

    //3rd step calculate total number of cookies :
    this.total += cookiesNum;


  }
};

//HEADER FUNCTION
const header = function () {
  const parentElement = document.getElementById('SALAMON');
  const table = document.createElement('table');
  parentElement.appendChild(table);
  table.setAttribute('id', 'myTable');
  const tr1 = document.createElement('tr');
  table.appendChild(tr1);
  for (let i = 0; i < columnHeader.length; i++) {
    const th1 = document.createElement('th');
    tr1.appendChild(th1);
    th1.textContent = columnHeader[i];
  }
};
//CALLING HEADER FUNCTION
header();

//PROTOTYPE FOR RENDER
City.prototype.render = function () {
  const tableElement = document.getElementById('myTable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const td1 = document.createElement('td');
  tr.appendChild(td1);
  td1.textContent = this.name;

  for (let i = 0; i < hours.length; i++) {
    const td2 = document.createElement('td');
    tr.appendChild(td2);
    td2.textContent = this.numOfCookiesArr[i];
  }
  const td3 = document.createElement('td');
  tr.appendChild(td3);
  td3.textContent = this.total;
};





//SEATTLE CITY
const seattle = new City('Seattle', 23, 65, 6.3, []);
seattle.getNumOfCookies();
seattle.render();
//TOKYO CITY
const tokyo = new City('Tokyo', 3, 24, 1.2, []);
tokyo.getNumOfCookies();
tokyo.render();
//DUBAI CITY
const dubai = new City('Dubai', 11, 38, 3.7, []);
dubai.getNumOfCookies();
dubai.render();
//PARIS CITY
const paris = new City('Paris', 20, 38, 2.3, []);
paris.getNumOfCookies();
paris.render();
//LIMA CITY
const lima = new City('Lima', 2, 16, 4.6, []);
lima.getNumOfCookies();
lima.render();

console.log(City.allCity);



// Lab: 09 - Add a form to the cookie stand project

// //NEW CITY RAW FUNCTION
// const cityRaw = function () {
//   const tableElement = document.getElementById('myTable');
//   const tr = document.createElement('tr');
//   tableElement.appendChild(tr);
//   const th1 = document.createElement('th');
//   tr.appendChild(th1);
//   th1.textContent = 'Total of total';
//   for (let i = 0; i < hours.length; i++) {
//     const th2 = document.createElement('th');
//     tr.appendChild(th2);
//     th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];
//   }
//   const th3 = document.createElement('th');
//   tr.appendChild(th3);
//   th3.textContent = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
// };

// //FOOTER FUNCTION
const footer = function () {
  const tableElement = document.getElementById('myTable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Total of total';
  for (let i = 0; i < hours.length; i++) {
    const th2 = document.createElement('th');
    tr.appendChild(th2);

    // FOR LAB 09 1ST STEP TO MAKE THE TOTAL SUM OTHER NEW CITIES
    let totalCookies = 0;
    for (let j = 0; j < City.allCity.length; j++) {
      totalCookies += parseInt(City.allCity[j].numOfCookiesArr[i]);
    }
    th2.textContent = totalCookies;

    //   th2.textContent = seattle.numOfCookiesArr[i] + tokyo.numOfCookiesArr[i] + dubai.numOfCookiesArr[i] + paris.numOfCookiesArr[i] + lima.numOfCookiesArr[i];

  }

  // for (let i = 0; i < hours.length; i++) {
  const th3 = document.createElement('th');
  tr.appendChild(th3);
  let totalOfTotal = 0;
  for (let g = 0; g < City.allCity.length; g++) {
    totalOfTotal += City.allCity[g].total;
  }

  th3.textContent = totalOfTotal;
  // }
  console.log(City.allCity);
};

//CALLING FOOTER FUNCTION
footer();

// STEP 2 FOR LAB 09
const formElement = document.getElementById('ADD-NEW-LOCATION');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const cityName = event.target.name.value;
  const minNumOfCustomers = event.target.min.value;
  const maxNumOfCustomers = event.target.max.value;
  const avarage = event.target.avarage.value;

  if (minNumOfCustomers >= maxNumOfCustomers) {
    alert('please make the Max.Num Of Customers value greater than the Min.Num Of Customers');
    console.log(alert);
  } else {

    document.getElementById('myTable').removeChild(document.getElementById('myTable').lastChild);
    const city = new City(cityName, minNumOfCustomers, maxNumOfCustomers, avarage);

    formElement.reset();

    city.getNumOfCookies();
    city.render();
    console.log(City.allCity);
    footer();
  }
  // tableElement.removeLastChild
});
















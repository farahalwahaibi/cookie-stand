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
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//MAIN CONSTRUCTORS
function City(name, min, max, avarage, [], [], total) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avarage = avarage;
    this.numberOfCustomerArr = [];
    this.numOfCookiesArr = [];
    this.total = total;
}

//PROTOTYPE FOR GET NUM OF CUSTOMERS
// City.prototype.getNumOfCustomers = function () {
//     for (let i = 0; i < hours.length; i++) {
//         this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
//     }
// };

//PROTOTYPE FOR GET NUM OF COOKIES
City.prototype.getNumOfCookies = function () {
    for (let i = 0; i < hours.length; i++) {
        let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
        this.numOfCookiesArr.push(cookiesNum);

        //3rd step calculate total number of cookies :
        this.total += cookiesNum;
    }
};



//PROTOTYPE FOR RENDER
City.prototype.render = function () {
    const parentElement = document.getElementById('SALAMON');
    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);

    const tableElement = document.createElement('table');
    articleElement.appendChild(tableElement);

    // const tr2Element = document.createElement('tr');
    // tableElement.appendChild(tr2Element);


    const tr1Element = document.createElement('tr');
    tableElement.appendChild(tr1Element);

    //FOR SALES/HOURS
    // const th2Element = document.createElement('th');
    // tr1Element.appendChild(th2Element);
    // th2Element.textContent = `Sales/hours`;

    //FOR COLUMN HEADER
    for (let i = 0; i < columnHeader.length; i++) {
        const th1Element = document.createElement('th');
        tr1Element.appendChild(th1Element);
        th1Element.textContent = columnHeader[i];
    }

    //FOR DAILY LOCATION TOTAL
    // const th3Element = document.createElement('th');
    // tr1Element.appendChild(th3Element);
    // th3Element.textContent = `Daily Location Total`;

    //FOR SEATTLE
    const tr7Element = document.createElement('tr');
    tableElement.appendChild(tr7Element);
    const td7Element = document.createElement('td');
    tr7Element.appendChild(td7Element);
    td7Element.textContent = 'Seattle';



    // //NUM OF COOKIES PER HOUR
    // for (let i = 0; i < hours.length; i++) {
    //     const td8Element = document.createElement('td');
    //     tr7Element.appendChild(td8Element);
    //     td8Element.textContent = seattle.this.numOfCookiesArr[i];
    // }

    //FOR TOKYO
    const tr2Element = document.createElement('tr');
    tableElement.appendChild(tr2Element);
    const td2Element = document.createElement('td');
    tr2Element.appendChild(td2Element);
    td2Element.textContent = 'Tokyo';
    //FOR DUBAI
    const tr3Element = document.createElement('tr');
    tableElement.appendChild(tr3Element);
    const td3Element = document.createElement('td');
    tr3Element.appendChild(td3Element);
    td3Element.textContent = 'Dubai';
    //FOR PARIS
    const tr4Element = document.createElement('tr');
    tableElement.appendChild(tr4Element);
    const td4Element = document.createElement('td');
    tr4Element.appendChild(td4Element);
    td4Element.textContent = 'Paris';
    //FOR LIMA
    const tr5Element = document.createElement('tr');
    tableElement.appendChild(tr5Element);
    const td5Element = document.createElement('td');
    tr5Element.appendChild(td5Element);
    td5Element.textContent = 'Lima';
    //FOR TOTALS
    const tr6Element = document.createElement('tr');
    tableElement.appendChild(tr6Element);
    const td6Element = document.createElement('td');
    tr6Element.appendChild(td6Element);
    td6Element.textContent = 'Totals';

    // const h2Element = document.createElement('h2');
    // articleElement.appendChild(h2Element);
    // h2Element.textContent = this.name;

    // const ulElement = document.createElement('ul');
    // articleElement.appendChild(ulElement);

    // for (let i = 0; i < hours.length; i++) {
    //     const liElement = document.createElement('li');
    //     ulElement.appendChild(liElement);
    //     liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
    // }
    // const liElement = document.createElement('li');
    // ulElement.appendChild(liElement);
    // liElement.textContent = `Total: ` + this.total + ` cookies`;

};

//SEATTLE CITY
const seattle = new City('Seattle', 23, 65, 6.3, [], [], 0);
seattle.getNumOfCookies();
// seattle.render();
console.log(seattle);

//TOKYO CITY
const tokyo = new City('Tokyo', 3, 24, 1.2, [], [], 0);
tokyo.getNumOfCookies();
// tokyo.render();
console.log(tokyo);

//DUBAI CITY
const dubai = new City('Dubai', 11, 38, 3.7, [], [], 0);
dubai.getNumOfCookies();
// dubai.render();
console.log(dubai);

//PARIS CITY
const paris = new City('Paris', 20, 38, 2.3, [], [], 0);
paris.getNumOfCookies();
// paris.render();
console.log(paris);

//LIMA CITY
const lima = new City('Lima', 2, 16, 4.6, [], [], 0);
lima.getNumOfCookies();
// lima.render();
console.log(lima);

//CALLING RENDER FUNCTION
City.prototype.render();












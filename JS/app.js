'use strict';
const seattle = {
    name: 'seattle',
    hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    minCookie: 23,
    maxCookie: 65,
    avarage: 6.3,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    numOfTotal: 0,


    //first step calculate customers each hour 
    getNumOfCustomers: function (min, max) {
        for (let i = 0; i < this.hours.length; i++);
        this.numOfCustomerArr = push(generateRandomNumber(min, max));
        console.log(this.numOfCustomerArr);
        console.log(this.numOfCustomerArr.seattle);
        return [this.numOfCustomerArr];



    },
    getNumOfCookies: function (min, max) {
        for (let i = 0; i < this.numOfCustArr.length; i++);
        this.numOfCookiesArr = push(generateRandomNumber(min, max) * this.avarage);
        console.log(this.numOfCookiesArr);
        console.log(this.numOfCookiesArr.seattle);
        return [this.numOfCookiesArr];


    }
    
    render: function () {
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);
        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < this.hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = this.hours[i] + this.numOfCookiesArr;
        }
    }




};

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(seattle);

// second step => loop through the cust array and mul * each element with totalAvarage 
// third step push the result to the numOfCookiesArr 
// final step render the values inside numOfCookiesArr
//  getTotalCookies: function () {
//for (i=0; i < this.numOfCookiesArr.length; i++);
//total = total+this.numOfCookiesArr;
//return [total];

//},







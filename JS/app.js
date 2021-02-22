'use strict';

//MAKE HOURS AS GLOBAL , SINCE WE WILL USE IT FOR THE ALL CITY WITH SAME VALUES
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//MAIN FUNCTION
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//SEATTLE
const seattle = {
    name: 'Seattle',
    min: 23,
    max: 65,
    avarage: 6.3,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    total: 0,

    //1st step calculate customers per each hour :
    getNumOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
        }
    },
    
    //2nd step calculate cookies :
    getNumOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
            this.numOfCookiesArr.push(cookiesNum);
   
    //3rd step calculate total number of cookies :        
            this.total += cookiesNum;
        }
    },

    //finally print the render function
    render: function () {
        const parentElement = document.getElementById('SALAMON');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
        }
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total: ` + this.total + ` cookies`;

    }
};
//CALLING FUNCTION FOR SEATTLE 
seattle.getNumOfCustomers();
seattle.getNumOfCookies();
seattle.render();

//TOKYO
const tokyo = {
    name: 'Tokyo',
    min: 3,
    max: 24,
    avarage: 1.2,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    total: 0,

    //1st step calculate customers per each hour :
    getNumOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
        }
    },
    
    //2nd step calculate cookies :
    getNumOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
            this.numOfCookiesArr.push(cookiesNum);
   
    //3rd step calculate total number of cookies :        
            this.total += cookiesNum;
        }
    },

    //finally print the render function
    render: function () {
        const parentElement = document.getElementById('SALAMON');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
        }
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total: ` + this.total + ` cookies`;

    }
};
//CALLING FUNCTION FOR TOKYO
tokyo.getNumOfCustomers();
tokyo.getNumOfCookies();
tokyo.render();

//DUBAI
const dubai = {
    name: 'Dubai',
    min: 11,
    max: 38,
    avarage: 3.7,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    total: 0,

    //1st step calculate customers per each hour :
    getNumOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
        }
    },
    
    //2nd step calculate cookies :
    getNumOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
            this.numOfCookiesArr.push(cookiesNum);
   
    //3rd step calculate total number of cookies :        
            this.total += cookiesNum;
        }
    },

    //finally print the render function
    render: function () {
        const parentElement = document.getElementById('SALAMON');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
        }
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total: ` + this.total + ` cookies`;

    }
};
//CALLING FUNCTION FOR DUBAI
dubai.getNumOfCustomers();
dubai.getNumOfCookies();
dubai.render();

//PARIS
const paris = {
    name: 'Paris',
    min: 20,
    max: 38,
    avarage: 2.3,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    total: 0,

    //1st step calculate customers per each hour :
    getNumOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
        }
    },
    
    //2nd step calculate cookies :
    getNumOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
            this.numOfCookiesArr.push(cookiesNum);
   
    //3rd step calculate total number of cookies :        
            this.total += cookiesNum;
        }
    },

    //finally print the render function
    render: function () {
        const parentElement = document.getElementById('SALAMON');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
        }
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total: ` + this.total + ` cookies`;

    }
};
//CALLING FUNCTION FOR PARIS
paris.getNumOfCustomers();
paris.getNumOfCookies();
paris.render();

//LIMA
const lima = {
    name: 'Lima',
    min: 2,
    max: 16,
    avarage: 4.6,
    numOfCustomerArr: [],
    numOfCookiesArr: [],
    total: 0,

    //1st step calculate customers per each hour :
    getNumOfCustomers: function () {
        for (let i = 0; i < hours.length; i++) {
            this.numOfCustomerArr.push(generateRandomNumber(this.min, this.max));
        }
    },
    
    //2nd step calculate cookies :
    getNumOfCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            let cookiesNum = Math.floor(generateRandomNumber(this.min, this.max) * this.avarage);
            this.numOfCookiesArr.push(cookiesNum);
   
    //3rd step calculate total number of cookies :        
            this.total += cookiesNum;
        }
    },

    //finally print the render function
    render: function () {
        const parentElement = document.getElementById('SALAMON');
        const articleElement = document.createElement('article');
        parentElement.appendChild(articleElement);

        const h2Element = document.createElement('h2');
        articleElement.appendChild(h2Element);
        h2Element.textContent = this.name;

        const ulElement = document.createElement('ul');
        articleElement.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {
            const liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = hours[i] + `:` + this.numOfCookiesArr[i] + ` cookies`;
        }
        const liElement = document.createElement('li');
        ulElement.appendChild(liElement);
        liElement.textContent = `Total: ` + this.total + ` cookies`;

    }
};
//CALLING FUNCTION FOR LIMA
lima.getNumOfCustomers();
lima.getNumOfCookies();
lima.render();



















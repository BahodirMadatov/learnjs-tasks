// 5.1
    // #1
    // выдаст undefined 



//5.2
    // #1
    // let a = +prompt("Введите первое число");
    // let b = +prompt("Введите второе число");

    // alert( a + b );


    // #2
    // alert( Math.round(6.35 * 10) / 10 );


    // #3
    // function readNumber() {
    //     let num;
      
    //     do {
    //       num = prompt("Введите число", 0);
    //     } while ( !isFinite(num) );
      
    //     if (num === null || num === '') return null;
      
    //     return +num;
    //   }
      
    //   alert(`Число: ${readNumber()}`);


    // #4
    // let i = 0;
    // while (i < 11) {
    // i += 0.2;
    // if (i > 9.8 && i < 10.2) alert( i );
    // }


    // #5
    // function random(min, max) {
    //     return min + Math.random() * (max - min);
    //   }
    //   alert( random(1, 5) );
    //   alert( random(1, 5) );
    //   alert( random(1, 5) );


    // #6
    // function randomInteger(min, max) {
    //     // случайное число от min до (max+1)
    //     let rand = min + Math.random() * (max + 1 - min);
    //     return Math.floor(rand);
    //   }
      
    //   alert( randomInteger(1, 3) );



// 5.3
    // #1
    // function ucFirst(str) {
    //     if (!str) return str;
      
    //     return str[0].toUpperCase() + str.slice(1);
    //   }
      
    //   alert( ucFirst("вася") );


    // #2
    // function checkSpam(str) {
    //     let lowerStr = str.toLowerCase();
      
    //     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
    //   }
      
    //   alert( checkSpam('buy ViAgRA now') );
    //   alert( checkSpam('free xxxxx') );
    //   alert( checkSpam("innocent rabbit") );


    // #3
    // function truncate(str, maxlength) {
    //     return (str.length > maxlength) ?
    //       str.slice(0, maxlength - 1) + '…' : str;
    // }


    // #4 
    // function extractCurrencyValue(str) {
    //     return +str.slice(1);
    // }



// 5.4 
    // #1 
    // let fruits = ["Яблоки", "Груша", "Апельсин"];

    // let shoppingCart = fruits;
    // shoppingCart.push("Банан");

    // alert( fruits.length ); // Ответ: 4


    // #2
    // let styles = ["Джаз", "Блюз"];
    // styles.push("Рок-н-ролл");
    // styles[Math.floor((styles.length - 1) / 2)] = "Классика";
    // alert( styles.shift() );
    // styles.unshift("Рэп", "Регги");


    // #3
    // let arr = ["a", "b"];
    // arr.push(function() {
    // alert( this );
    // })

    // arr[2](); // a,b,function(){...}, так как у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив


    // #4
    // function sumInput() {

    //     let numbers = [];
      
    //     while (true) {
      
    //       let value = prompt("Введите число", 0);
      
    //       // Прекращаем ввод?
    //       if (value === "" || value === null || !isFinite(value)) break;
      
    //       numbers.push(+value);
    //     }
      
    //     let sum = 0;
    //     for (let number of numbers) {
    //       sum += number;
    //     }
    //     return sum;
    //   }
      
    //   alert( sumInput() );


    // #5
    // function getMaxSubSum(arr) {
    //     let maxSum = 0;
    //     let partialSum = 0;
      
    //     for (let item of arr) { 
    //       partialSum += item; 
    //       maxSum = Math.max(maxSum, partialSum);  
    //       if (partialSum < 0) partialSum = 0; 
    //     }
      
    //     return maxSum;
    //   }
      
    //   alert( getMaxSubSum([-1, 2, 3, -9]) ); 
    //   alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
    //   alert( getMaxSubSum([-2, -1, 1, 2]) ); 
    //   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); 
    //   alert( getMaxSubSum([1, 2, 3]) ); 
    //   alert( getMaxSubSum([-1, -2, -3]) );



// 5.5
    // #1
    // function camelize(str) {
    //     return str
    //       .split('-') 
    //       .map(
            
    //         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    //       )
    //       .join('');
    //   }


    // #2
    // function filterRange(arr, a, b) {
    //     return arr.filter(item => (a <= item && item <= b));
    //   }
      
    //   let arr = [5, 3, 8, 1];
      
    //   let filtered = filterRange(arr, 1, 4);
      
    //   alert( filtered );
      
    //   alert( arr );


    // #3
    // function filterRangeInPlace(arr, a, b) {

    //     for (let i = 0; i < arr.length; i++) {
    //       let val = arr[i];
    //       if (val < a || val > b) {
    //         arr.splice(i, 1);
    //         i--;
    //       }
    //     }
      
    //   }
      
    //   let arr = [5, 3, 8, 1];
      
    //   filterRangeInPlace(arr, 1, 4);
      
    //   alert( arr );


    // #4
    // let arr = [5, 2, 1, -10, 8];

    // arr.sort((a, b) => b - a);

    // alert( arr );


    // #5
    // function copySorted(arr) {
    //     return arr.slice().sort();
    //   }
      
    //   let arr = ["HTML", "JavaScript", "CSS"];
      
    //   let sorted = copySorted(arr);
      
    //   alert( sorted );
    //   alert( arr );


    // #6
    // function Calc() {
    //     this.methods = {
    //       "-": (a, b) => a - b,
    //       "+": (a, b) => a + b
    //     };
      
    //     this.calculate = function(str) {
    //       let split = str.split(' '),
    //         a = +split[0],
    //         op = split[1],
    //         b = +split[2]
      
    //       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
    //         return NaN;
    //       }
      
    //       return this.methods[op](a, b);
    //     }
      
    //     this.addMethod = function(name, func) {
    //       this.methods[name] = func;
    //     };
    //   }


    // #7
    // let vasya = { name: "Вася", age: 25 };
    // let petya = { name: "Петя", age: 30 };
    // let masha = { name: "Маша", age: 28 };

    // let users = [ vasya, petya, masha ];

    // let names = users.map(item => item.name);

    // alert( names ); 


    // #8
    // let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
    // let petya = { name: "Петя", surname: "Иванов", id: 2 };
    // let masha = { name: "Маша", surname: "Петрова", id: 3 };
    // let users = [ vasya, petya, masha ];
    // let usersMapped = users.map(user => ({
    // fullName: `${user.name} ${user.surname}`,
    // id: user.id
    // }));

    // alert( usersMapped[0].id ); 
    // alert( usersMapped[0].fullName );


    // #9
    // function sortByAge(arr) {
    //     arr.sort((a, b) => a.age > b.age ? 1 : -1);
    //   }
    //   let vasya = { name: "Вася", age: 25 };
    //   let petya = { name: "Петя", age: 30 };
    //   let masha = { name: "Маша", age: 28 };
    //   let arr = [ vasya, petya, masha ];
    //   sortByAge(arr);
    //   alert(arr[0].name); 
    //   alert(arr[1].name); 
    //   alert(arr[2].name); 


    // #10
    // function shuffle(array) {
    //     array.sort(() => Math.random() - 0.5);
    //   }
      
    //   let arr = [1, 2, 3];
    //   shuffle(arr);
    //   alert(arr);


    // #11
    // function getAverageAge(users) {
    //     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
    //   }
      
    //   let vasya = { name: "Вася", age: 25 };
    //   let petya = { name: "Петя", age: 30 };
    //   let masha = { name: "Маша", age: 29 };
      
    //   let arr = [ vasya, petya, masha ];
      
    //   alert( getAverageAge(arr) );


    // #12
    // function unique(arr) {
    //     let result = [];
    //     for (let str of arr) {
    //       if (!result.includes(str)) {
    //         result.push(str);
    //       }
    //     }
    //     return result;
    //   }
    //   let strings = ["кришна", "кришна", "харе", "харе",
    //     "харе", "харе", "кришна", "кришна", ":-O"
    //   ];
      
    //   alert( unique(strings) );


    // #13
    // function groupById(array) {
    //     return array.reduce((obj, value) => {
    //       obj[value.id] = value;
    //       return obj;
    //     }, {})
    //   }




// 5.7
    // #1
    // function unique(arr) {
    //     return Array.from(new Set(arr));
    //   }


    // #2
    // function aclean(arr) {
    //     let obj = {};
      
    //     for (let i = 0; i < arr.length; i++) {
    //       let sorted = arr[i].toLowerCase().split("").sort().join("");
    //       obj[sorted] = arr[i];
    //     }
      
    //     return Object.values(obj);
    //   }
      
    //   let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
      
    //   alert( aclean(arr) );


    // #3
    // let map = new Map();
    // map.set("name", "John");

    // let keys = Array.from(map.keys());
    // keys.push("more");

    // alert(keys);




// 5.8
    // #1
    // let messages = [
    //     {text: "Hello", from: "John"},
    //     {text: "How goes?", from: "John"},
    //     {text: "See you soon", from: "Alice"}
    // ];
    // let readMessages = new WeakSet();

    // readMessages.add(messages[0]);
    // readMessages.add(messages[1]);

    // readMessages.add(messages[0]);

    // alert("Read message 0: " + readMessages.has(messages[0]));
    // messages.shift();


    // #2
    // для хранения даты мы можем использовать WeakMap
    // let messages = [
    //     {text: "Hello", from: "John"},
    //     {text: "How goes?", from: "John"},
    //     {text: "See you soon", from: "Alice"}
    //   ];
      
    //   let readMap = new WeakMap();
      
    //   readMap.set(messages[0], new Date(2017, 1, 1));




// 5.9
    // #1
    // function sumSalaries(salaries) {

    //     let sum = 0;
    //     for (let salary of Object.values(salaries)) {
    //       sum += salary;
    //     }
      
    //     return sum; // 650
    //   }
      
    //   let salaries = {
    //     "John": 100,
    //     "Pete": 300,
    //     "Mary": 250
    //   };
      
    //   alert( sumSalaries(salaries) );


    // #2
    // function count(obj) {
    //     return Object.keys(obj).length;
    // }



// 5.10 
    // #1
    // let user = {
    //     name: "John",
    //     years: 30
    // };
    
    // let {name, years: age, isAdmin = false} = user;
    
    // alert( name );
    // alert( age ); 
    // alert( isAdmin ); 


    // #2
    // let salaries = {
    //     "John": 100,
    //     "Pete": 300,
    //     "Mary": 250
    // };

    // function topSalary(salaries) {

    //     let max = 0;
    //     let maxName = null;
      
    //     for(const [name, salary] of Object.entries(salaries)) {
    //       if (max < salary) {
    //         max = salary;
    //         maxName = name;
    //       }
    //     }
      
    //     return maxName;
    //   }



// 5.11
    // #1
    // let d = new Date(2012, 1, 20, 3, 12);
    // alert( d );


    // #2
    // function getWeekDay(date) {
    //     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    
    //     return days[date.getDay()];
    // }
    
    //   let date = new Date(2014, 0, 3); // 3 января 2014 года
    // alert( getWeekDay(date) );
    
    
    // #3
    // let date = new Date(2012, 0, 3); 
    
    // function getLocalDay(date) {

    // let day = date.getDay();
    
    //   if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    //     day = 7;
    //     }
    
    //     return day;
    // }
    // alert( getLocalDay(date) );


    // #4
    // function getDateAgo(date, days) {
    //     let dateCopy = new Date(date);
      
    //     dateCopy.setDate(date.getDate() - days);
    //     return dateCopy.getDate();
    //   }
      
    //   let date = new Date(2015, 0, 2);
      
    //   alert( getDateAgo(date, 1) );
    //   alert( getDateAgo(date, 2) ); 
    //   alert( getDateAgo(date, 365) );

    // #5
    // function getLastDayOfMonth(year, month) {
    //     let date = new Date(year, month + 1, 0);
    //     return date.getDate();
    //   }
      
    //   alert( getLastDayOfMonth(2012, 0) ); 
    //   alert( getLastDayOfMonth(2012, 1) ); 
    //   alert( getLastDayOfMonth(2013, 1) );


    // #6
    // function getSecondsToday() {
    //     let now = new Date();
    //     let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      
    //     let diff = now - today;
    //     return Math.round(diff / 1000); 
    //   }
    
    //   alert( getSecondsToday() );


    // #7
    // function getSecondsToTomorrow() {
    //     let now = new Date();
    //     let hour = now.getHours();
    //     let minutes = now.getMinutes();
    //     let seconds = now.getSeconds();
    //     let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    //     let totalSecondsInADay = 86400;
      
    //     return totalSecondsInADay - totalSecondsToday;
    //   }


    // #8
    // function formatDate(date) {
    //     let dayOfMonth = date.getDate();
    //     let month = date.getMonth() + 1;
    //     let year = date.getFullYear();
    //     let hour = date.getHours();
    //     let minutes = date.getMinutes();
    //     let diffMs = new Date() - date;
    //     let diffSec = Math.round(diffMs / 1000);
    //     let diffMin = diffSec / 60;
    //     let diffHour = diffMin / 60;
      
    //     // форматирование
    //     year = year.toString().slice(-2);
    //     month = month < 10 ? '0' + month : month;
    //     dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    //     hour = hour < 10 ? '0' + hour : hour;
    //     minutes = minutes < 10 ? '0' + minutes : minutes;
      
    //     if (diffSec < 1) {
    //       return 'прямо сейчас';
    //     } else if (diffMin < 1) {
    //       return `${diffSec} сек. назад`
    //     } else if (diffHour < 1) {
    //       return `${diffMin} мин. назад`
    //     } else {
    //       return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    //     }
    //   }



//5.12
    // #1
    // let user = {
    //     name: "Василий Иванович",
    //     age: 35
    //   };
      
    //   let user2 = JSON.parse(JSON.stringify(user));


    // #2
    // let room = {
    //     number: 23
    // };
    
    // let meetup = {
    //     title: "Совещание",
    //     occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    //     place: room
    // };
    
    // room.occupiedBy = meetup;
    // meetup.self = meetup;
    
    // alert( JSON.stringify(meetup, function replacer(key, value) {
    //     return (key != "" && value == meetup) ? undefined : value;
    // }));
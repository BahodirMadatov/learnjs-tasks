// 2 chapter 

// 2.1
    // #1
        // alert('Я JavaScript');



// 2.4
    // #1
        
        // let name = 'John';
        // admin = name;

        // alert(admin);


    // #2 

        // let planetName = 'Earth';
        // let adminName = 'Bahodir';


    // #3

        // const BIRTHDAY = '18.04.1982'; 
        // const age = someCode(BIRTHDAY);



// 2.5
    // #1
        // let name = "Ilya";

        // alert( `hello ${1}` ); // hello 1
        
        // alert( `hello ${"name"}` ); // hello name 
        
        // alert( `hello ${name}` ); // hello Ilya


    
// 2.6
    // let name = prompt('Tell me your name');

    // alert(`your name is ${name}`);



// 2.8
    // #1
        // let a = 1, b = 1;

        // let c = ++a; // 2
        // let d = b++; // 1


    // #2
        // let a = 2;

        // let x = 1 + (a *= 2); // x = 5


    // #3
        // "" + 1 + 0; // 10
        // "" - 1 + 0; // -1
        // true + false // 1
        // 6 / "3" // 2
        // "2" * "3" // 6
        // 4 + 5 + "px" // 9px
        // "$" + 4 + 5 //$45
        // "4" - 2 // 2
        // "4px" - 2 // NaN
        // "  -9  " + 5 // "  -9  5" 
        // "  -9  " - 5 // -14 
        // null + 1 // 1 
        // undefined + 1 // NaN 
        // " \t \n" - 2 // -2 


    // #4
        // let a = +prompt("Первое число?", 1);
        // let b = +prompt("Второе число?", 2);
        
        // alert(a + b);



// 2.9
    // #1
        // 5 > 4 //true
        // "ананас" > "яблоко" //false
        // "2" > "12" // false 
        // undefined == null // true
        // undefined === null //false
        // null == "\n0\n" // false 
        // null === +"\n0\n" // false 




// 2.10
    // #1 
        // if ("0") {
        //     alert( 'Привет' );
        // }
        // выведется т. к. "0" = true


    // #2 
        // let jsName = prompt("Какое «официальное» название JavaScript?");

        // (jsName == "ECMAScript") ? alert("верно") : alert("Не знаете? ECMAScript!");


    // #3
            // let num = prompt("Type any mumber");

            // if(num >= 1) {
            //     alert('1');
            // } else if(num < 0) {
            //     alert('-1');
            // } else {alert('0')}

        
    // #4
        // result = (a + b < 4) ? 'Мало' : 'Много';


    // #5
        // let message = (login == "Сотрудник") ? 'Привет' : 
        //     (login == 'Директор') ? 'Здравствуйте' : 
        //     (login == '') ? 'Нет логина' :
        //     '';




// 2.11 
    //#1
        // alert( null || 2 || undefined ); //выдаст 2


    //#2
        // alert( alert(1) || 2 || alert(3) );  // код выведет  1, 2


    // #3
        // alert( 1 && null && 2 ); // код выведет null


    // #4
        // alert( alert(1) && alert(2) ); // код выведет 1, undefined


    // #5
    // alert( null || 2 && 3 || 4 ); // код выведет 3

    // #6 
    // let age = prompt('Your age?');

    // let res = (age >= 14 && age <= 90) ? 'Вы находитесь в диапазоне' : 'Вы не находитесь в диапазоне';
    // console.log(res);


    // #7
    // let age = prompt('Your age?');

    // let res = (!(age >= 14 && age <= 90)) ? 'Вы находитесь в диапазоне' : 'Вы не находитесь в диапазоне';
    // let res1 = (age < 14 || age > 90) ? 'Вы находитесь в диапазоне' : 'Вы не находитесь в диапазоне';

    // console.log(res);
    // console.log(res1);


    // #8
    // if (-1 || 0) alert( 'first' ); // выполнится
    // if (-1 && 0) alert( 'second' ); // не выполнится
    // if (null || -1 && 1) alert( 'third' ); // // выполнится


    // #9
    // let person = prompt('Введите логин');
    // let keyWord = 'Admin'

    // if(person === keyWord) {
    //     let password = prompt('Введите пароль');

    //     if (password === 'Я главный') {
    //         alert( 'Здравствуйте!' );
    //     } else if (password === '' || password === null) {
    //         alert( 'Отменено' );
    //     } else {
    //         alert( 'Неверный пароль' );
    //     }
    // } else if(person === '' || person === null) {
    //     alert('Отменено')
    // } else {alert('Я вас не знаю')};



// 2.13
    // #1
    // let i = 3;

    // while (i) {
    // alert( i-- ); // отработает до 1 включ, т к проверка while(i) не даст выполняться циклу дальше
    // }



    // #2
    // let a = 0;
    // while (++a < 5) alert( a ); // отработает до 4

    // let i = 0;
    // while (i++ < 5) alert( i ); // отработает до 5


    // #3
    // for (let a = 0; a < 5; a++) alert( a ); // отработает до 4

    // for (let i = 0; i < 5; ++i) alert( i ); // отработает до 4


    // #4
    // for (let i = 2; i <= 10; i++) {
    //     if (i % 2 == 0) {
    //         alert( i );
    //     };
    // };


    // #5
    // let i = 0;
    // while (i < 3){
    //     alert(`number ${i}!`)
    //     i++;
    // }


    // #6
    // let num = 0; 

    // do {
    //     num = prompt("Введите число больше 100?");
    // } while (num <= 100 && num);


    // #7
    // let a = 10;
    // newNum:
    // for (let i = 2; i <= a; i++) {
    //     for (let b =2; b < i; b++) {
    //         if (i % b == 0) continue newNum;
    //     }
    //     alert (i);
    // }



// 2.14 
    // #1
    // if (browser == 'Edge') {
    //     alert("You've got the Edge!");
    // } else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    //     alert( 'Okay we support these browsers too' );
    // } else {
    //     alert( 'We hope that this page looks ok!' );
    // }


    // #2
    // const number = +prompt('Введите число между 0 и 3', '');

    // switch (number) {
    // case 0:
    //     alert('Вы ввели число 0');
    //     break;

    // case 1:
    //     alert('Вы ввели число 1');
    //     break;

    // case 2:
    // case 3:
    //     alert('Вы ввели число 2, а может и 3');
    //     break;
    // }



// 2.15
    // #1
    // function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       // ...
    //       return confirm('Родители разрешили?');
    //     }
    //   }

    // function checkAge(age) {
    //     if (age > 18) {
    //       return true;
    //     }
    //     // ...
    //     return confirm('Родители разрешили?');
    //   }

    // отличий между ними нет


    // #2
    // function checkAge(age) {
    //     return (age > 18) ? true : confirm('Родители разрешили?');
    //   }

    // function checkAge(age) {
    //     return (age > 18) || confirm('Родители разрешили?');
    //   }


    // #3
    // function min(a, b) {
    //     return a < b ? a : b;
    //   }


    // #4
    // function pow(x, n) {
    //     let result = x;
        
    //     for (let i = 1; i < n; i++) {
    //       result *= x;
    //     }
        
    //     return result;
    //   }
        
    //   let x = prompt("x?", '');
    //   let n = prompt("n?", '');
        
    //   if (n < 1) {
    //     alert(`Степень ${n} не поддерживается, используйте натуральное число`);
    //   } else {
    //     alert( pow(x, n) );
    //   }




// 2.17
    // #1 
    // function ask(question, yes, no) {
    //     if (confirm(question)) yes()
    //     else no();
    // }
    
    // ask(
    //     "Вы согласны?",
    //     () => alert("Вы согласились."),
    //     () => alert("Вы отменили выполнение.")
    // )





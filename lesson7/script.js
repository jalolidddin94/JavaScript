// String => '', "", ``

//let str = 'Webbrain';

// console.log(str.length); // textni uzunlik, har doim 1 dan boshlanadi
// console.log(str[1]); // harflaring joylashuv urni, har doim 0 dan boshlanadi

// console.log(str[str.length - 1]);

// '' vs ""

// let str ='Webbrain uquv "markaz" ';
// let str = "Webbrain uquv 'markaz' ";

// console.log(str);

// let name = 'Foziljon';
// let status = 'Student';
// let result = "Mening ismim:" + " " + name + " " + "Status:" + " " + status;
// let result = 'Mening ismim: ${name} status: ${status}';

// console.log(result);

// console.log('${5}'); // 5+5

// /t, /n, /r

// let str = 'Webbrain';
// let result = 'Webbrain /t academy'; => tabda 4ta bush joy tashlaydi
// let result = 'Webbrain /n academy'; => new line yangi qatorga utkazkadi
// let result = 'Webbrain /r academy'; => faqat ung tarafdagi textni kursatadi

// console.log(result);

// string methods (funksiya);

// let str = 'Webbrain';

// console.log(str.toLowerCase()); => kichkina harfga almashtiradi

// console.log(str.toUpperCase()); => katta harfga almashtiradi

// console.log(str.trim()); =>ikki tomondagi bush joyni yuqotib beradi

// console.log(str.startsWith('W')); =>Text qaysi harf bn boshlanganini tekshiradi, Boolean qiymat qaytaradi

// console.log(str.endssWith('Y')); =>Text qaysi harf bn tugaganini tekshiradi, Boolean qiymat qaytaradi

// console.log(str.padStart('12, 'a')); =>Boshidan malumot qushish

// console.log(str.padEnd(20, '.')); =>oxiridan malumot qushish

// console.log(str.replace("Web" '"IT')); =>almashtirish, 1-qiymat nimani almashtirish 2-qiymat nimaga alamashtirish

// console.log(str.replace("Web" '"100')); =>almashtirish, 1-qiymat nimani almashtirish 2-qiymat nimaga alamashtirish


// console.log(str.repeat(100)); =>takrorlab chiqarib beradi, faqat raqam oladi

// console.log(str1.concat(" ", 'ITBRain')); =>Qushish

// console.log(str1.includes('brain')); => Boolean qaytaradi, textda malum qiymatbor yuqligini tekshirib beradi

// console.log(str1.indexOf('n')); => malum bir elementni qaysi indexdaligini kursatadi

// console.log(str1.indexOf('b')); => birinchi kelayotgan elementning indexni oladi

// console.log(str1.lastindexOf('b')); => oxirgi kelayotgan elementning indexni oladi

// console.log(str1.charAt(0)); => malum indexda qanaqa element borligini kursatadi

// console.log(str1.substring(1, 4)); => 1- qiymat boshlangich index 2 - qiymat oxirgi index
let people = [
   {
      name: 'Malika',
      budget: 20000,
      rent: 12,
      expenses: [
         {
            total: 2000,
            title: 'sousages'
         },
         {
            total: 1200,
            title: 'mobile phone'
         },
         {
            total: 3000,
            title: 'car'
         },
      ],
      totalMoney: 0,

   },
   {
      name: 'Diyor from 611 gr',
      budget: 20000,
      rent: 12,
      expenses: [{
         total: 1500,
         title: 'sousages'
      },
      {
         total: 2200,
         title: 'sousages width ketchup'
      },
      {
         total: 3500,
         title: 'sousages'
      },
      ],
      totalMoney: 0,
   },
   {
      name: 'Aziz',
      budget: 20200,
      rent: 12,
      expenses: [{
         total: 100,
         title: 'girls'
      },
      {
         total: 4200,
         title: 'girls'
      },
      {
         total: 300,
         title: 'girls'
      },
      ],
      totalMoney: 0,
   },
   {
      name: 'Amir',
      budget: 27000,
      rent: 12,
      expenses: [{
         total: 2000,
         title: 'study'
      },
      {
         total: 1000,
         title: 'games'
      },
      {
         total: 5000,
         title: 'clothes'
      },
      ],
      totalMoney: 0,
   },
   {
      name: 'Maxmudbek',
      budget: 15000,
      rent: 12,
      expenses: [{
         total: 1111,
         title: 'sigarets'
      },
      {
         total: 1900,
         title: 'chilim'
      },
      {
         total: 6000,
         title: 'anasha'
      },
      ],
      totalMoney: 0,
   },
   {
      name: 'Samir',
      budget: 12000,
      rent: 12,
      expenses: [{
         total: 1200,
         title: 'food'
      },
      {
         total: 990,
         title: 'car'
      },
      {
         total: 7000,
         title: 'protain'
      },
      ],
      totalMoney: 0,
   },
   {
      name: 'Bahriddin',
      budget: 20000,
      rent: 12,
      expenses: [{
         total: 1000,
         title: 'taxi'
      },
      {
         total: 8000,
         title: 'rich girls'
      },
      {
         total: 700,
         title: 'on himself',

      },
      ],
      totalMoney: 0,
   }
]


// for (let item of people) {
//    let tBalance = item.budget - (item.budget / 100 * item.rent)

//    for (let elem of item.expenses) {
//       item.totalMoney += elem.total
//    }

//    let shakh = tBalance - item.totalMoney
//    console.log(shakh);
// }


for (let item of people) {
let shaxzod=[]
for(let item2 of item.expenses){
   item.shaxa=item.budget-item.budget*item.rent/100
   shaxzod.push(item2.total)
   item.shax=item.shaxa-shaxzod.reduce((a,b)=>a+b)
}

}



console.log(people);
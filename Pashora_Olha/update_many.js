//Задача. Увеличить баланс всех юзеров с положительным балансом на 5.5%
db.users.updateMany(
    {balance: {$gt: 0}},
    {$mul:{balance:1.055}}
)
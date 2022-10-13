type User = {
    id: number;
    kind: string;
}

// 题目
// function makeCustomer<T extends User>(u :T):T {
//     return {
//         id: u.id,
//         kind: 'Customer'
//     }
// }

// s1
// function makeCustomer<T extends User>(u :T):User {
//     return {
//         id: u.id,
//         kind: 'Customer'
//     }
// }

function makeCustomer<T extends User>(u :T):T {
    return {
        ...u,
        id: u.id,
        kind: 'Customer'
    }
}
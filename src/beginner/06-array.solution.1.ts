interface User {
    id: number;
    name: string;
    coins: Coin[];
}

interface Coin {
    type: 'ecoin' | 'wcoin' | 'xcoin' | 'ycoin' | 'zcoin';
    value: number;
}

const someone: User =  {
    id: 1,
    name: "Elon Musk",
    coins: [
        {
            type: 'ecoin',
            value: 10
        },
        {
            type: 'wcoin',
            value: 20
        },
        {
            type: 'xcoin',
            value: 30
        },
        {
            type: 'ycoin',
            value: 40
        },
        {
            type: 'zcoin',
            value: 87
        }
    ]
}


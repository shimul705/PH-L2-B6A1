

type FormatValue = (value: string | number | boolean) => string | number | boolean;

const formatValue: FormatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }
    return 'invalid type';
};









function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}









class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}






type Item = {
    title: string;
    rating: number;
};
function filterByRating(items: Item[]): Item[] {
    const result: Item[] = [];

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (typeof item.rating === 'number' && item.rating >= 0 && item.rating <= 5) {
            if (item.rating >= 4) {
                result[result.length] = item;
            }
        }
    }
    return result;
}








type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

type FilterActiveUsers = (users: User[]) => User[];

const filterActiveUsers: FilterActiveUsers = (users) => {
    const result: User[] = [];

    for (let i = 0; i < users.length; i++) {
        const user: User = users[i];

        if (user.isActive === true) {
            result[result.length] = user;
        }
    }
    return result;
};


const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
console.log(filterActiveUsers(users));
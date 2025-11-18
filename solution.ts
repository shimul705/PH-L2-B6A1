

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










interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book): void => {

    const availabilityStatus: string = (book.isAvailable === true ? 'Yes' : 'No');

    const BookDetails: string = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availabilityStatus}`;

    console.log(BookDetails);
}










type filterArray = (array1: (string | number)[], array2: (string | number)[]) => (string | number)[];
type PushItem = (array: (string | number)[], value: string | number) => void;

const pushMethod: PushItem = (array, value) => {
    array[array.length] = value;
};

const getUniqueValues: filterArray = (array1, array2) => {

    const result: (string | number)[] = [];
    const Arr1Arr2: (string | number)[] = [];

    for (let i = 0; i < array1.length; i++) {
        pushMethod(Arr1Arr2, array1[i])
    }
    for (let i = 0; i < array2.length; i++) {
        pushMethod(Arr1Arr2, array2[i])
    }

    for (let i = 0; i < Arr1Arr2.length; i++) {
        const value: string | number = Arr1Arr2[i]
        let isExist = false;

        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                isExist = true;
            }
        }

        if (isExist === false) {
            pushMethod(result, value);
        }
    }
    return result;
}













type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

type checkDiscount = (item: Product) => boolean;

type computeTotal = (products: Product[]) => number;

const calculateTotalPrice: computeTotal = (products) => {
    const totalPrice: number = products.reduce((acc, product) => {
        const regulerPrice: number = product.price * product.quantity;
        const finalPrice: number = product.discount !== undefined && product.discount > 0 && product.discount <= 100 ? regulerPrice * (1 - product.discount / 100) : regulerPrice;

        return acc + finalPrice;
    }, 0)
    return totalPrice;
};




// output of all codes to check


// ===Problem1===
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));


// ===Problem2===
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));


// ===Problem3===
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());



// ===Problem4===
const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));



// ===Problem5===
const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));




// ===Problem6===
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);



// ===Problem7===
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));



// ===Problem8===
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
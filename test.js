// 1) ყველაზე ძვირი ლეპტოპი
const laptops = [
  { model: "Dell XPS 13", price: 1800 },
  { model: "MacBook Pro 14", price: 2499 },
  { model: "Lenovo ThinkPad X1", price: 2100 },
  { model: "Asus Zephyrus G14", price: 1999 },
];
const mostExpensive = laptops.reduce((max, item) =>
  item.price > max.price ? item : max
);
console.log(mostExpensive);

// 2) ობიექტი ფართობის მეთოდით
const rectangle = {
  width: 10,
  height: 20,
  getArea() {
    return this.width * this.height;
  },
};
console.log(rectangle.getArea());

// 3) სტუდენტების სახელები, რომელთაც passed === true
const students = [
  { name: "Giorgi", score: 85, passed: true },
  { name: "Nika", score: 50, passed: false },
  { name: "Mariam", score: 92, passed: true },
  { name: "Luka", score: 60, passed: false },
];
const passedStudents = students.filter((s) => s.passed).map((s) => s.name);
console.log(passedStudents);

// 4) 10$-ზე იაფი პროდუქტების სათაურები
const products = [
  { title: "Pencil", price: 2 },
  { title: "Notebook", price: 5 },
  { title: "Backpack", price: 35 },
  { title: "Ruler", price: 3 },
  { title: "Calculator", price: 40 },
];
const cheapProducts = products.filter((p) => p.price < 10).map((p) => p.title);
console.log(cheapProducts);

// 5) ფილმები rating-ის მიხედვით ზრდადობით
const movies = [
  { title: "Inception", rating: 9 },
  { title: "Avatar", rating: 7.5 },
  { title: "Joker", rating: 8.2 },
  { title: "Tenet", rating: 6.9 },
];
const sortedMovies = movies.sort((a, b) => a.rating - b.rating);
console.log(sortedMovies);

// 6) ყველაზე იაფი ტელეფონის model
const phones1 = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const cheapestPhone = phones1.reduce((min, p) =>
  p.price < min.price ? p : min
);
console.log(cheapestPhone.model);

// 7) 300-გვერდზე მეტი წიგნები
const books = [
  { title: "Harry Potter", pages: 500 },
  { title: "The Little Prince", pages: 120 },
  { title: "Lord of the Rings", pages: 700 },
  { title: "Animal Farm", pages: 250 },
];
const bigBooks = books.filter((b) => b.pages > 300).map((b) => b.title);
console.log(bigBooks);

// 8) დაალაგე ტელეფონები ფასის მიხედვით და შეკრიბე
const phones2 = [
  { model: "iPhone 15", price: 1200 },
  { model: "Samsung Galaxy S24", price: 950 },
  { model: "Xiaomi Redmi 13", price: 250 },
  { model: "Pixel 8", price: 800 },
];
const sortedPhones = phones2.sort((a, b) => a.price - b.price);
console.log(sortedPhones);

const totalPrice = phones2.reduce((sum, p) => sum + p.price, 0);
console.log(totalPrice);

import employees from "./employees.js";

const employeesOriginal = employees;

const employeesUnder40 = employees.filter(employee => employee.age < 40);
const employeesOver40 = employees.filter(employee => employee.age > 40);

const firstTenEmployees = employees.filter(employee => employee.id < 10);
const bandwagonEmployees = employees.filter(employee => employee.id > 10);

let visibleEmployees = employeesOriginal;
visibleEmployees = employeesUnder40;



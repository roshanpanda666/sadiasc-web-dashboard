const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;

export const connectionuri = `mongodb+srv://${username}:${password}@cluster0.09x2u1i.mongodb.net/sadiasc_logs?retryWrites=true&w=majority&appName=Cluster0&authSource=admin`;

console.log(username);
console.log(password);
console.log("Final URI:", connectionuri);

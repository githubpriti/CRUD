const app = require("./app");      //imported app here
const PORT = process.env.PORT || 4000;  //means if process.env not executed thn 4000 will execute.

app.listen(PORT, () => {
    console.log(`App is running at http://localhost:${PORT}`);
});
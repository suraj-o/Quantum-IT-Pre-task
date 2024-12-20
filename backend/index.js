import express from "express";
import userRouter from "./routes/user.js"
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/user/",userRouter)

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

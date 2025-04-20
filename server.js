const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3000;
const clickedUsers = new Set();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client")));

app.post("/login", (req, res) => {
    const { username } = req.body;
    if (username) {
        res.cookie("token", `${username}-token`, {
            httpOnly: false,
            sameSite: "strict",
        });
        res.json({ message: "로그인 성공" });
    } else {
        res.status(400).json({ message: "이름이 필요합니다" });
    }
});

app.post("/logout", (req, res) => {
    res.clearCookie("token", { sameSite: "strict" });
    res.json({ message: "로그아웃 성공" });
});

app.get("/check", (req, res) => {
    const token = req.cookies.token;
    if (token) {
        res.json({ message: `로그인됨: ${token}` });
    } else {
        res.status(401).json({ message: "로그인 안 됨" });
    }
});

app.post("/click", (req, res) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "로그인 필요" });
    }

    if (clickedUsers.has(token)) {
        return res.status(409).json({ message: "이미 클릭한 사용자입니다." });
    }

    clickedUsers.add(token);
    console.log(`${token} 사용자가 클릭했습니다.`);
    res.json({ message: "클릭 완료" });
});

app.listen(PORT, () => {
    console.log(`서버 실행 중: http://localhost:${PORT}`);
});

const express = require("express");
const path = require("path");
const ntpClient = require("ntp-client");

const app = express();

// 정적 파일 제공
app.use(express.static(path.join(__dirname, "public")));

// 서버 시간 API
app.get("/api/time", (req, res) => {
  ntpClient.getNetworkTime("pool.ntp.org", 123, (err, date) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "NTP 서버에서 시간 가져오기 실패", details: err });
    }

    const timeInfo = {
      serverTime: date.toISOString(),
      serverTimestamp: date.getTime(),
      timezone: {
        intl: "Asia/Seoul",
        system: "NTP 서버 (pool.ntp.org)",
        offset: 9,
      },
      formats: {
        iso: date.toISOString(),
        utc: date.toUTCString(),
        local: date.toString(),
        localeString: date.toISOString(),
        localeDateString: date.toISOString().split("T")[0],
        localeTimeString: date.toISOString().split("T")[1].split(".")[0],
      },
      components: {
        utcHours: date.getUTCHours(),
        localHours: date.getUTCHours(),
        utcMinutes: date.getUTCMinutes(),
        localMinutes: date.getUTCMinutes(),
      },
    };

    res.json(timeInfo);
  });
});

// HTML 페이지 제공
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  const now = new Date();
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

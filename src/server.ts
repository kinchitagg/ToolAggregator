import app from "./app";

const PORT = process.env.PORT || 3000;

// ✅ Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

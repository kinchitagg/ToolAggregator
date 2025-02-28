console.log("🟢 JavaScript Loaded Successfully!");

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", searchTool);
    document.getElementById("resetButton").addEventListener("click", resetSearch);

    function searchTool() {
        console.log("🔍 Button Clicked! JavaScript is working!");

        const toolName = document.getElementById("toolName").value.trim();
        const resultsDiv = document.getElementById("results");

        if (!toolName) {
            resultsDiv.innerHTML = "<p class='error'>⚠️ Please enter a tool name.</p>";
            console.log("⚠️ No tool name entered.");
            return;
        }

        resultsDiv.innerHTML = "<div class='loader'></div>"; // Show loader animation
        console.log(`📡 Sending API request: /api/search?name=${toolName}`);

        fetch(`/api/search?name=${encodeURIComponent(toolName)}`)
            .then(response => {
                console.log("📡 API Response:", response);
                if (!response.ok) {
                    throw new Error("No tool found");
                }
                return response.json();
            })
            .then(data => {
                console.log("✅ Data received:", data);
                if (data.length === 0) {
                    resultsDiv.innerHTML = "<p class='error'>❌ No tool found.</p>";
                } else {
                    let resultHTML = `<div class='result-box'><h3>✅ Results:</h3>`;

                    data.forEach(tool => {
                        resultHTML += `
                            <table>
                                <tr><th>Application Name</th><td>${tool.application_name}</td></tr>
                                <tr><th>Type</th><td>${tool.application_type}</td></tr>
                                <tr><th>Application Code</th><td>${tool.application_code}</td></tr>
                                <tr><th>Release Status</th><td>${tool.release_status}</td></tr>
                                <tr><th>Team</th><td>${tool.team}</td></tr>
                                <tr><th>Product Name</th><td>${tool.product_name}</td></tr>
                                <tr><th>Business Criticality</th><td>${tool.business_criticality}</td></tr>
                                <tr><th>Application Manager</th><td>${tool.application_manager || "N/A"}</td></tr>
                                <tr><th>Delegates</th><td>${tool.delegates || "N/A"}</td></tr>
                            </table>
                            <br>
                        `;
                    });

                    resultHTML += "</div>";
                    resultsDiv.innerHTML = resultHTML;
                }
            })
            .catch(error => {
                console.error("🚨 Fetch error:", error);
                resultsDiv.innerHTML = "<p class='error'>⚠️ Error fetching data.</p>";
            });
    }

    function resetSearch() {
        document.getElementById("toolName").value = "";
        document.getElementById("results").innerHTML = "";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const chatBox = document.getElementById("chat-box");
    const chatInput = document.getElementById("chat-input");
    const sendButton = document.getElementById("send-button");

    // Function to append a message to the chat box
    function addMessage(text, sender = "user") {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);

        const messageText = document.createElement("div");
        messageText.classList.add("message-text");
        messageText.textContent = text;

        const messageTime = document.createElement("div");
        messageTime.classList.add("message-time");
        const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
        messageTime.textContent = currentTime;

        messageDiv.appendChild(messageText);
        messageDiv.appendChild(messageTime);

        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll to bottom
    }

    // Event listener for send button
    sendButton.addEventListener("click", () => {
        const text = chatInput.value.trim();
        if (text !== "") {
            addMessage(text, "user"); // Add user message
            chatInput.value = "";
        }
    });

    // Allow pressing Enter to send messages
    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendButton.click();
        }
    });
});

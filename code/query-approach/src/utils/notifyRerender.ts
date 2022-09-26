export const notify = (sender: string, message: string) => {
    const formattedMessage = `[${new Date().toLocaleTimeString()}][${sender}]: ${message}`;
    console.log(formattedMessage);
    const consoleDiv = document.getElementById("console");
    if (consoleDiv) consoleDiv.innerText += formattedMessage + "\n";
};

export const notifyRerender = (name: string) => {
    notify(name, "Rerender");
};

function getCurrentRoudedTime() {
    const initialTime = new Date().toISOString().split("T")[1].split(":").slice(0, 2).join(":");
    const roundedMinutes = Math.round(Number(initialTime.split(":")[1]) / 30) * 30;
    return `${initialTime.split(":")[0]}:${roundedMinutes.toString().padStart(2, "0")}`;
}

export {
    getCurrentRoudedTime
}
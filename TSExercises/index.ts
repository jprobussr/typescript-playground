const logTime = (date: Date) => {
    console.log(`The time is ${date.toLocaleTimeString()}`);
}

logTime(new Date());
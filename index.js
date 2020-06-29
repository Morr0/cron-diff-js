const parser = require("cron-parser");

module.exports.timeDiffSeconds = function timeDiffSeconds(crontab){
    try {
        const interval = parser.parseExpression(crontab);
        const t1 = interval.next();
        const t2 = interval.next();
        const td = (t2.getTime() - t1.getTime()) / 1000;
        return td;
    } catch (e){
        return new Error("Incorrect syntax");
    }
}
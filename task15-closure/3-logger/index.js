"use strict";
//algo
//1.create func log error warn and return obj from these func
//2.create getRecords
//3.inside getRecords use sort method and filter
/**
 * @return {object}
 */
export const createLogger = () => {
  const infoMessage = [];
  function log(text) {
    infoMessage.push({ message: text, dateTime: new Date(), type: "log" });
  }
  function warn(text) {
    infoMessage.push({ message: text, dateTime: new Date(), type: "warn" });
  }
  function error(text) {
    infoMessage.push({ message: text, dateTime: new Date(), type: "error" });
  }
  function getRecords(message) {
    if (infoMessage.length === 0) {
      return [];
    }
    const sortDateMessage = [...infoMessage];
    sortDateMessage.sort((val, nextVal) => nextVal.dateTime - val.dateTime);
    if (message === undefined) {
      return sortDateMessage;
    }
    return sortDateMessage.filter((val) => val.type === message);
  }
  return {
    log,
    warn,
    error,
    getRecords,
  };
};

// examples
const logger1 = createLogger();
logger1.log("User logged in");
logger1.warn("User is tring to ented restricted page");
logger1.log("User logged out");
logger1.error("Unexpected error on the site");

logger1.getRecords(); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords("log"); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
logger1.getRecords("error"); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
logger1.getRecords("warn"); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

const logger2 = createLogger();
logger2.warn("Opps, something is happenning");
logger2.getRecords("error"); // ===> []
logger2.getRecords("warn"); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
logger2.getRecords(); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
logger3.getRecords("error"); // ===> []
logger3.getRecords(); // ===> []

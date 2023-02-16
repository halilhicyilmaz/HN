// import saveAs from "file-saver"
// import moment from "moment"
// import Papa from "papaparse";
// import axios from 'axios'

//#TODO if you need any function below uncomment that function
// simulate api request
const timeout = (data) => new Promise(resolve => setTimeout(() => resolve(data), 0))

// class timer {
//     constructor(callback, delay) {
//         var id, started, remaining = delay, running;

//         this.start = function () {
//             running = true;
//             started = new Date();
//             id = setTimeout(callback, remaining);
//         };

//         this.pause = function () {
//             running = false;
//             clearTimeout(id);
//             remaining -= new Date() - started;
//         };

//         this.getTimeLeft = function () {
//             if (running) {
//                 this.pause();
//                 this.start();
//             }

//             return remaining;
//         };

//         this.getStateRunning = function () {
//             return running;
//         };

//         this.start();
//     }
// }

// /**
//  * 
//  * @param {Object} obj // object itself that includes date fields 
//  * @param {String} prevFormat // previous format of the date field
//  * @param {String} currentFormat // expected format of the date field
//  * @returns {Object}
//  * 
//  * Formats all the dates in an object which are includes 'Date' in their key, ex: 'startDate', 'endDate', 'createdAt', 'updatedAt' etc.
//  * Nested objects are also supported.
//  */
// const formatDates = (object, prevFormat, currentFormat) => {
//     let obj = JSON.parse(JSON.stringify(object))
//     Object.keys(obj).forEach(key => {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             obj[key] = formatDates(obj[key], prevFormat, currentFormat)
//         }
//         if (key.includes('Date') && obj[key]) {
//             obj[key] = moment(obj[key], prevFormat).format(currentFormat)
//         }
//     })
//     return obj
// }

// // Checks if email is in correct format.
// const validEmailChecker = (email) => {
//     return email.match(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
// }


// /**
//  * 
//  * @param {text/csv/Array} data  
//  * @param {string} fileName 
//  *  
//  * when function is called, it will download the csv file with the given name
//  */
// const downloadCSV = (data, fileName) => {
//     let csv;
//     if (Array.isArray(data)) {
//         csv = Papa.unparse(data)
//     } else {
//         csv = data
//     }
//     const BOM = "\uFEFF"
//     const csvData = BOM + csv // add BOM to fix UTF-8 issue in Excel

//     const blob = new Blob([csvData], { type: 'text/csv;' })
//     saveAs(blob, fileName)
// }


// /**
//  * @param {url} url
//  * @param {string} fileName - should contain extension .rar/ .zip/ .pdf /.gif /.doc ...
//  */
// async function downloadSingleFile(url, fileName) {
//     try {
//         const data = await axios.get(url, { responseType: 'blob' })
//         saveAs(data.data, fileName);
//         return Promise.resolve()
//     } catch (error) {
//         return Promise.reject(error)
//     }
// }


export {
    timeout,
    // timer,
    // formatDates,
    // validEmailChecker,
    // downloadCSV,
    // downloadSingleFile,
}

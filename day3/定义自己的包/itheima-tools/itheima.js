const data=require('./src/dateFormat');
const esape=require('./src/htmlEscape');


module.exports = {
    //es6  ...
    ...data,
    ...esape
}
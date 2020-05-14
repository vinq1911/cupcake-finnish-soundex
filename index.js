module.exports = (str) => {
    const rules = require('./config');
    const dm = require('./doubleMetaphone');
    return dm(rules.reduce(str));
}
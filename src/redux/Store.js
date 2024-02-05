const { createStore } = require("redux");
const { default: rootReducer } = require("./Reducer");

const myStore = createStore(rootReducer);

export default myStore;

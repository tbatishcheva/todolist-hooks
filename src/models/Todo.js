export default class TodoItem {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    name;

    /**
     * @param {number} id
     * @param {string} name
     */
    constructor({id, name}) {
        this.id = id;
        this.name = name;
    }
}

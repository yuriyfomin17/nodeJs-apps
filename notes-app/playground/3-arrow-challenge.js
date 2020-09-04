const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() {
        const newArr = this.tasks.filter(el => el.completed === true)
        return newArr
    }

}
console.log(tasks.getTasksToDo())
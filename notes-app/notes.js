const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => {
    return "Your notes..."
}
// Function to add note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(el => el.title === title)



    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bold.greenBright.inverse('New note added!'))
    } else {
        console.log(chalk.bold.red.inverse('Note title already taken!'))
    }

}
// Function to remove note
const removeNote = (title) => {
    const notes = loadNotes()
    const removedNoteArray = notes.filter(el => el.title !== title)
    if (removedNoteArray.length !== notes.length) {
        saveNotes(removedNoteArray)
        console.log(chalk.bold.greenBright.inverse(`Note with title: ${title} was removed`))
    } else {
        console.log(chalk.bold.red.inverse(`Title: ${title} doesn't exist`))
    }
}
//Function to find note and read it
const findNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(el => el.title === title)
    console.log(note)
    if (note !== undefined) {
        console.log(chalk.bold.greenBright("Title:"), note.title)
        console.log(chalk.bold.greenBright("description:"), note.body)
    } else {
        console.log(chalk.bold.red.inverse("Note doesn't exist"))
    }
}
// Function to write note to notes.json file
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSon)
}
// Function to list all notes
const listNotes = () => {
    const notes = loadNotes()
    if (notes.length > 0) {
        console.log(chalk.bold.greenBright.inverse("Printing notes\n"))
        notes.map(function (el) {
            console.log(chalk.bold.green("Title:"), el.title)
            console.log(chalk.bold.green("description:"), el.body)
            console.log("\n")

        })
    } else {
        console.log(chalk.bold.blueBright.inverse("Printing notes\n"))
    }
}

// Function to load notes from notes.json file
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    findNote: findNote
}
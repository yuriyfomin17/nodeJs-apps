const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//  remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

// list command
yargs.command({
    command: "list",
    describe: "list notes",
    handler: function () {
        notes.listNotes()
    }
})
// reading notes - finding specific note
yargs.command({
    command: "find",
    describe: "read notes",
    builder:{
        title:{
            describe: "Title to find",
            demandOption:true,
            type: "string"
        }
    },
    handler: function (argv) {
        notes.findNote(argv.title)
    }
})
yargs.parse()

// console.log(yargs.argv)







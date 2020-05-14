//node modules
const chalk = require('chalk')
const yargs = require('yargs')

//personal required files
const notesFunctions = require('./notes')

//common functions
const log = console.log

//add, remove, read, list

//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notesFunctions.addNote(argv.title, argv.body)
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove\'s a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => notesFunctions.removeNote(argv.title)
})

//Create Read command
yargs.command({
    command: 'read',
    describe: 'Read\'s a Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => notesFunctions.readNote(argv.title)
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List\'s all the Note\'s',
    handler: () => notesFunctions.listNotes()
})

// log(yargs.argv)
yargs.parse()

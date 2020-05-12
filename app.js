//node modules
const chalk = require('chalk')
const yargs = require('yargs')

//personal required files
const notes = require('./notes')

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
        price: {
            describe: 'Note Price',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        log(`Title: ${argv.title}`)
        log(`Price: ${argv.price}`)
        log(`Body: ${argv.body}`)
    }
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove\'s a Note',
    handler: function() {
        log("Removing a Note...")
    }
})

//Create Read command
yargs.command({
    command: 'read',
    describe: 'Read\'s a Note',
    handler: function() {
        log("Reading Note...")
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List\'s all the Note\'s',
    handler: function() {
        log('Listing all Note\'s...')
    }
})

// log(yargs.argv)
yargs.parse()

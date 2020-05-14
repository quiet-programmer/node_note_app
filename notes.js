const chalk = require('chalk')
const fs = require('fs')

const getNotes = () => "Your Notes..."

//function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.filter((note) => note.title === title)

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added successfully"))
    } else {
        console.log(chalk.red.inverse("Title already taken"))
    }
}

// function to remove notes
const removeNote = (title) => {
    const allNotes = loadNotes()

    const noteToKeep = allNotes.filter((note) => note.title !== title)

    if (allNotes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed!"))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse("No Note found!"))
    }
}

//function reused when saving a note
const saveNotes = (notes) => {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

//function to load all notes
const loadNotes = () => {
    try {
        const readData = fs.readFileSync('notes.json')
        const dataJson = readData.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
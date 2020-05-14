const chalk = require('chalk')
const fs = require('fs')

const getNotes = function () {
    return "Your Notes..."
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNote = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNote.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("New Note Added successfully")
    } else {
        console.log("Title already taken")
    }

}

const removeNote = function (title) {
    const allNotes = loadNotes()

    const noteToKeep = allNotes.filter(function (note) {
        return note.title !== title
    })

    if(allNotes.length > noteToKeep.length) {
        console.log(chalk.green.inverse("Note Removed!"))
        saveNotes(noteToKeep)
    } else {
        console.log(chalk.red.inverse("No Note found!"))
    }

}

const saveNotes = function (notes) {
    const dataString = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataString)
}

const loadNotes = function () {

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
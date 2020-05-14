const chalk = require('chalk')
const fs = require('fs')

//function to add notes
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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

//function to get all the title on the note list
const listNotes = () => {
    console.log(chalk.inverse("Your List"))
    const allList = loadNotes()
    allList.forEach((list) => console.log(list.title))
}

//function to read all notes
const readNote = (title) => {
    const getNotes = loadNotes()

    const readByTitle = getNotes.find((note) => note.title === title)

    if (!readByTitle) {
        console.log(chalk.red.inverse("No such title found"))
    } else {
        console.log(chalk.inverse(readByTitle.title))
        console.log(readByTitle.body)
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
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
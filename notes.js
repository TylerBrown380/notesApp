const fs = require('fs')
const chalk = require('chalk');
const getNotes =  () => {
    return 'REEEEEEEEEEEEEEEEE'
}

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title ===title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken'))
    }
}

//logic to remove a Note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !==title)
    if(notes.length === notesToKeep.length) {
        console.log(chalk.bgRed.black('No note found!'));
    } else {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen.black('Note Removed!'));
    }
}

const listNote = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
    notes.forEach(element => {
        console.log(element.title + " : " + element.body)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title === title)
    if(notesToKeep.length === 0) {
        console.log(chalk.bgRed.black('note not found'));
    } else {
        notesToKeep.forEach(element => {
            console.log(chalk.blue.inverse(element.title) + " : \n\t"+ element.body )
        })
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
   
}
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}
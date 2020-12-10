const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//Customize yags version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})
//create list command
yargs.command({
    command: 'list',
    describe: 'lists notes',
    handler() {
        notes.listNote()
    }
})
//reading notes
yargs.command({
    command: 'read',
    describe: 'reads notes',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()
//console.log(yargs.argv)
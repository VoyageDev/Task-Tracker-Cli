#!/usr/bin/env node 
//jangan dihapus diatas
const { Command } = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Inisialisasi database
const adapter = new FileSync('db.json');
const db = low(adapter);

// Set default data jika database kosong
db.defaults({ tasks: [] }).write();

// Inisialisasi program CLI
const program = new Command();
program.version('1.0.0').description('A simple CLI Task Tracker');

// Fungsi untuk menampilkan semua tugas
const listTasks = () => {
    const tasks = db.get('tasks').value();
    console.log(chalk.yellow.bold('\n--- Your Tasks ---'));
    if (tasks.length === 0) {
        console.log(chalk.gray('No tasks found.'));
    } else {
        tasks.forEach(task => {
            const status = task.completed ? chalk.green('✔') : chalk.red('✖');
            console.log(`${status} [${task.id}] ${task.name}`);
        });
    }
    console.log(chalk.yellow.bold('------------------\n'));
};

// Fungsi untuk menambah tugas baru
const addTask = async () => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the task name:',
            validate: (input) => input ? true : 'Task name cannot be empty!',
        },
    ]);

    const tasks = db.get('tasks').value();
    const newId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) + 1 : 1;

    db.get('tasks')
        .push({ id: newId, name: answers.name, completed: false })
        .write();

    console.log(chalk.green.bold('\nTask added successfully!\n'));
    listTasks();
};

// Fungsi untuk menandai tugas sebagai selesai
const completeTask = async () => {
    const tasks = db.get('tasks').filter({ completed: false }).value();
    if (tasks.length === 0) {
        console.log(chalk.yellow('\nNo pending tasks to complete.\n'));
        return;
    }

    const choices = tasks.map(task => ({
        name: `[${task.id}] ${task.name}`,
        value: task.id,
    }));

    const { taskId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'taskId',
            message: 'Which task do you want to complete?',
            choices,
        },
    ]);

    db.get('tasks').find({ id: taskId }).assign({ completed: true }).write();
    console.log(chalk.green.bold('\nTask marked as completed!\n'));
    listTasks();
};

// Fungsi untuk menghapus tugas
const removeTask = async () => {
    const tasks = db.get('tasks').value();
    if (tasks.length === 0) {
        console.log(chalk.yellow('\nNo tasks to remove.\n'));
        return;
    }

    const choices = tasks.map(task => ({
        name: `${task.completed ? '[✔]' : '[✖]'} [${task.id}] ${task.name}`,
        value: task.id,
    }));

    const { taskId } = await inquirer.prompt([
        {
            type: 'list',
            name: 'taskId',
            message: 'Which task do you want to remove?',
            choices,
        },
    ]);

    db.get('tasks').remove({ id: taskId }).write();
    console.log(chalk.red.bold('\nTask removed successfully!\n'));
    listTasks();
};


// Definisi perintah-perintah CLI
program
    .command('list')
    .description('List all tasks')
    .action(listTasks);

program
    .command('add')
    .description('Add a new task')
    .action(addTask);

program
    .command('complete')
    .description('Mark a task as completed')
    .action(completeTask);

program
    .command('remove')
    .description('Remove a task')
    .action(removeTask);

// Jika tidak ada perintah, tampilkan menu utama interaktif
const run = async () => {
    if (!process.argv.slice(2).length) {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What do you want to do?',
                choices: [
                    { name: 'List all tasks', value: 'list' },
                    { name: 'Add a new task', value: 'add' },
                    { name: 'Complete a task', value: 'complete' },
                    { name: 'Remove a task', value: 'remove' },
                    new inquirer.Separator(),
                    { name: 'Exit', value: 'exit' },
                ],
            },
        ]);

        switch (action) {
            case 'list':
                listTasks();
                break;
            case 'add':
                await addTask();
                break;
            case 'complete':
                await completeTask();
                break;
            case 'remove':
                await removeTask();
                break;
            case 'exit':
                console.log(chalk.blue('Goodbye!'));
                process.exit(0);
        }
    }
};

// Parsing argumen dan jalankan menu jika perlu
program.parse(process.argv);
run();
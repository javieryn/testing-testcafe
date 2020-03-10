import { Selector } from 'testcafe';
import LoginPage from '../page_objects/loginPage';
import TasksPage from '../page_objects/tasksPage';

const loginPage = new LoginPage();
const tasksPage = new TasksPage();

fixture `Getting Started`
    .page `https://todoist.com/Users/showLogin#start`;

var email = process.env.TODO_EMAIL;
var pass = process.env.TODO_PASSWORD;

test('SignIn into the Site', async t => {
    await loginPage.login(email, pass);

    await t.expect(tasksPage.agendaView.visible).ok();
});

test('Create a task', async t => {
    await loginPage.login(email, pass);
    await tasksPage.createTask('Some task');

    await t.expect(tasksPage.tasksList.innerText).contains('Some');
});

test('Update a task', async t => {
    await loginPage.login(email, pass);
    await tasksPage.updateTask('Updated task');

    await t.expect(tasksPage.tasksList.innerText).contains('Updated');
});

test('Delete a task', async t => {
    await loginPage.login(email, pass);
    await tasksPage.deleteTask();

    await t.expect(tasksPage.tasksList.exists).notOk();
});

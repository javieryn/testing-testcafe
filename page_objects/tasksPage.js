import { Selector, t } from 'testcafe';

export default class TasksPage {
    constructor () {
        this.agendaView = Selector('#agenda_view');
        this.addTaskLink = Selector('.agenda_add_task a');
        this.taskInput = Selector('.public-DraftEditor-content');
        this.submitButton = Selector('.item_editor_submit');
        this.cancelLink = Selector('.cancel');
        this.tasksList = Selector('.task_item_content_text');
        this.taskMenuList = Selector('.task_item .menu');
        this.deleteTaskOption = Selector('.ist_menu[style|="z"] .sel_delete_task');
        this.deleteButton = Selector('.ist_button_red');
    }

    async createTask (task) {
        await t
            .click(this.addTaskLink)
            .typeText(this.taskInput, task)
            .setTestSpeed(0.2)
            .click(this.submitButton);
    }

    async updateTask (task) {
        await t
            .click(this.tasksList)
            .selectText(this.taskInput)
            .pressKey('delete')
            .typeText(this.taskInput, task)
            .setTestSpeed(0.2)
            .click(this.submitButton);
    }

    async deleteTask () {
        await t
            .hover(this.tasksList)
            .click(this.taskMenuList)
            .click(this.deleteTaskOption)
            .setTestSpeed(0.2)
            .click(this.deleteButton);
    }
}

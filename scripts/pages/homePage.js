import {Selector, t} from 'testcafe'
class HomePage{
    constructor(){
        this.topIcons=Selector('#top_icons')
        this.QuickAddTaskButton=Selector('#quick_add_task_holder')
        this.TaskInput=Selector('.richtext_editor')
        this.InputDueDate=Selector('.input_due_date')
        this.NextMonthButton=Selector('.scheduler-picker-header-action').nth(2)
        this.dayButton=Selector('.scheduler-picker-cell-day').withText('10')
        this.dayEditButton=Selector('.scheduler-picker-cell-day').withText('20')
        this.addTimeLink=Selector('.scheduler-actions-addtime')
        this.TimeInput=Selector('.scheduler-timepicker-input-controls')
        this.AddTimeButton=Selector('.scheduler-timepicker-actions-add')
        this.EditTimeButton=Selector('.scheduler-actions-time-label')
        this.SubmitButton=Selector('.submit_btn')
        this.SaveButton=Selector('.scheduler-actions-save')
        this.TaskAdded=Selector('.sel_item_content')
        this.TaskEdited=Selector('.sel_item_content')
        this.BandejaButton=Selector('.item_content').withText('Bandeja de entrada')
        this.deleteContainer=Selector('li.not_shared')
        this.deleteTaskButton=Selector('.menu_label').withText('Eliminar tarea')
        this.TaskEditInput=Selector('.richtext_editor')
        this.taskName = Selector('.text')
        this.newTaskRadioBtn = Selector('.checker')
        this.DragTaskButton=Selector('.invisible_space')
    }

    

    AddTaskFlow = async (taskName) => {
        
        await t
            .click(this.QuickAddTaskButton)
            .typeText(this.TaskInput,taskName)
            .click(this.InputDueDate)
            .click(this.addTimeLink)
            .typeText(this.TimeInput,'2:00')
            .click(this.AddTimeButton)
            .click(this.NextMonthButton)
            .click(this.dayButton)
            .click(this.SaveButton)
            .click(this.SubmitButton)        
    }

    DeleteTaskFlow = async () =>{
        const contador = await this.getTasksCount()
        await t
            .click(this.deleteContainer.nth(contador-1).find('.menu'))
            .click(this.deleteTaskButton)
            .pressKey('enter')
    }

    DragTaskFlow = async () => {
        const contador = await this.getTasksCount()
        await t
            .hover(this.DragTaskButton.nth(contador))
            .dragToElement(this.DragTaskButton.nth(contador), this.DragTaskButton.nth(2))
            .hover(this.DragTaskButton.nth(contador))
    }
    EditTaskFlow = async (taskName, taskNameEdited) =>{
        await t
            .click(this.TaskAdded.withText(taskName))
            .click(this.TaskEditInput)
            .pressKey('ctrl+a delete')
            .typeText(this.TaskEditInput,taskNameEdited)
            .click(this.InputDueDate)
            .click(this.EditTimeButton)
            .pressKey('ctrl+a delete')
            .typeText(this.TimeInput,'16:00')
            .click(this.AddTimeButton)
            .click(this.NextMonthButton)
            .click(this.dayEditButton)
            .click(this.SaveButton)
            .click(this.SubmitButton)
    }

    getTasksCount = async () => {
        await t.hover(this.newTaskRadioBtn)
        return this.newTaskRadioBtn.count
    }
    
    getLastTaskName = async () => {
        const tasksCount = await this.getTasksCount()
        return this.taskName.nth(tasksCount - 1).innerText
    }

    
}

export default new HomePage()
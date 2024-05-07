import { v4 as uuid } from "uuid";

export const reducer = (state, action) => {
    const { type } = action;
    let newTasks = null;
    switch (type) {
        case "CHANGE_THEME":
            return {
                ...state,
                theme: action.theme
            }
            break;
        case 'CHANGE_TASK_STATE':
            newTasks = state.tasks.map((item) => {
                return {
                    ...item,
                    isFinished: item.id === action.id ? !item.isFinished : item.isFinished
                }
            });

            return {
                ...state,
                tasks: newTasks,
                filteredTasks: newTasks

            }
            break;
        case 'REMOVE_TASK':
            const { id } = action;
            newTasks = state.tasks.filter(item => item.id !== id);
            return {
                ...state,
                tasks: newTasks,
                filteredTasks: newTasks
            }
            break;
        case 'REMOVE_ALL_FINISHED':
            newTasks = state.tasks.filter(item => !item.isFinished);
            return {
                ...state,
                tasks: newTasks,
                filteredTasks: newTasks
            }
            break;
        case 'FILTER_TASKS':
            const { filter } = action;
            let newState = null;

            switch (filter) {
                case 'all':
                    newState = {
                        ...state,
                        filteredTasks: state.tasks,
                        activeFilter: filter
                    }
                    break;
                case 'active':
                    newState = {
                        ...state,
                        filteredTasks: state.tasks.filter(item => !item.isFinished),
                        activeFilter: filter
                    }
                    break;
                case 'completed':
                    newState = {
                        ...state,
                        filteredTasks: state.tasks.filter(item => item.isFinished),
                        activeFilter: filter
                    }
                    break;
                default:
                    return state;
            }

            return newState;
            break;
        case 'ADD_TASKS':
            const { text, isFinished } = action;

            const newTask = {
                id: uuid(),
                text,
                isFinished
            };
            newTasks = [...state.tasks];
            newTasks.push(newTask);

            return {
                ...state,
                tasks: newTasks,
                filteredTasks: newTasks
            }
            break;
        default:
            return state;
    }
}


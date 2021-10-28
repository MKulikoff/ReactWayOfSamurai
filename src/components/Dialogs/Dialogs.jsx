import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css';

const dialogsData = [
    {
        name: 'Alex',
        message: 'Hello, how are you?'
    },
    {
        name: 'John',
        message: 'Okey, bye'
    },
    {
        name: 'Jane',
        message: 'See you later'
    }
]

const dialog_item = dialogsData.map((dialog) => {
    return <Dialog name={dialog.name} message={dialog.message} />
})


const Dialogs = (props) => {
    return (
        <div>
            {dialog_item}
        </div>
    )
}

export default Dialogs;
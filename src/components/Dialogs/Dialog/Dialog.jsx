import styles from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={styles.messages}>
            <div className={styles.user}>
                <div className={styles.user_avatar}>
                    <img src="https://github.com/MKulikoff/Dashboard/blob/main/images/image-jeremy.png?raw=true" alt="" />
                </div>
            </div>
            <div className={styles.dialog}>
                <div className={styles.dialog_name}>{props.name} </div>
                <div className={styles.message}>
                    {props.message}.
                </div>
            </div>
        </div>
    )
}

export default Dialog;

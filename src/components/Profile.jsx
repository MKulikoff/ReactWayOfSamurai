import styles from './Profile.module.css'; 

function Profile() {
    return (
        <div className={styles.profile}>
            <div className={styles.person}>
                <div className={styles.avatar}>
                    <img src="https://github.com/MKulikoff/Dashboard/blob/main/images/image-jeremy.png?raw=true" alt="avatar" />
                </div>
                <div className={styles.personal_info}>
                    <div className={styles.name}>Dmitry Kolesnikov</div>
                </div>
            </div>
            <div className={styles.feed}>
                <div className={styles.create_post}>
                    <h3>My posts</h3>
                    <input placeholder="Start typing here" className={styles.newPost}></input>
                </div>
                <div className={styles.posts}>
                    <div className={styles.post}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet ipsam ex laboriosam! Sapiente blanditiis fugit voluptates, delectus accusantium ea commodi natus, consequuntur, qui iusto atque perferendis itaque perspiciatis libero?
                    </div>
                    <div className={styles.post}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos amet ipsam ex laboriosam! Sapiente blanditiis fugit voluptates, delectus accusantium ea commodi natus, consequuntur, qui iusto atque perferendis itaque perspiciatis libero?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
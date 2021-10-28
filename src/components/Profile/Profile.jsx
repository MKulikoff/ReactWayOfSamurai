import styles from './Profile.module.css';
import Post from './MyPosts/Post/Post'

const postData = [
    {message: 'Hello everyone'}, 
    {message: 'This is my second post'}, 
    {message: 'Forever young'}, 
    {message: 'It is nice day'}
]

function Profile(props) {
    const posts = postData.map((post) => <Post message={post.message}/>)
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
                {posts}
            </div>
        </div>
    )
}

export default Profile;
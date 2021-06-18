import './post.css'

export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Siddharth</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight"></div>
                </div>
                <div className="postCenter"></div>
                <div className="postButtom"></div>
            </div>
        </div>
    )
}

import { Link } from "wouter"



const PostCard = ({ image, title, description, author, id }) => {
    return (
        <>
            <Link to={`/post/${id}`}>
                <div className="post-card" style={{ width: '100%' }}>
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h3 className="card-title">
                            {title}
                        </h3>

                        <p className="card-text">
                            {description}
                        </p>

                    </div>
                </div>
            </Link>

            <br />

        </>

    )
}



export default PostCard
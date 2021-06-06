import { Link } from "wouter"



const PostCard = ({ image, title, description, author, id }) => {
    return (
        <>
            <Link to={`/post/${id}`}>
                <div className="card" style={{ width: '100%' }}>
                    <img src={image} className="card-img-top" alt="..." />

                    <div className="card-body">
                        <h5 className="card-title text-center">
                            {title}
                        </h5>

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
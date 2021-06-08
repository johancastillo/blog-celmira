import { Link } from "wouter"



const PostVertical = ({ image, title, description, author, id }) => {
    return (
        <>
            <Link to={`/post/${id}`}>
                <div className="post-card" style={{ width: '100%' }}>
                    <div className="row">
                        <div className="col-md-6">

                            <div className="card-body">
                                <h4 className="card-title">
                                    {title}
                                </h4>

                                <p className="card-text">
                                    {description}
                                </p>

                            </div>
                        </div>

                        <div className="col-md-6">
                            <img src={image} className="card-img-top" alt="..." />
                        </div>


                    </div>

                </div>
            </Link>

            <br />

        </>

    )
}



export default PostVertical
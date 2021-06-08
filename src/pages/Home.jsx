import { Link } from "wouter"
import PostCard from "../components/PostCard"
import PostVertical from "../components/PostVertical"
import ProfileCard from "../components/ProfileCard"
// Images
import post1 from "../images/posts/01.jpg"
import post2 from "../images/posts/02.jpg"
import post3 from "../images/posts/03.png"

const Home = () => {
    return (
        <div className="container-fluid">

            <br />

            <div className="card py-4 px-5 section">
                <div className="">
                    <h1>Celmira Blog</h1>
                    <p>La tecnología se alimenta a si misma. <br />La tecnología hace posible más tecnología. <br />- Alvin Toffler</p>
                </div>

                <div className="row posts-main">

                    <div className="col-md-6">
                        <Link to="/post/1">
                            <div className="main-post">
                                <img className="" src={post1} alt="" width="100%" />

                                <div>
                                    <br />
                                    <br />
                                    <span class="badge bg-danger">Tecnología</span>
                                    <h2>¿Qué es el Bitcoin?</h2>
                                </div>

                            </div>
                        </Link>

                        <br />

                        <div className="row">

                            <div className="col-md-6">
                                <Link to="/post/1">
                                    <div className="main-post vertical-img">
                                        <img className="" src={post1} alt="" width="100%" />

                                        <div>

                                            <span class="badge bg-danger">Tecnología</span>
                                            <h2>¿Qué es el Bitcoin?</h2>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                            <br />

                            <div className="col-md-6">
                                <Link to="/post/1">
                                    <div className="main-post vertical-img">
                                        <img className="" src={post1} alt="" width="100%" />

                                        <div>

                                            <span class="badge bg-danger">Tecnología</span>
                                            <h2>¿Qué es el Bitcoin?</h2>
                                        </div>

                                    </div>
                                </Link>
                            </div>


                        </div>

                        <br />

                    </div>

                    <div className="col-md-6">
                        <div className="row">

                            <div className="col-md-6">
                                <Link to="/post/1">
                                    <div className="main-post vertical-img">
                                        <img className="" src={post1} alt="" width="100%" />

                                        <div>

                                            <span class="badge bg-danger">Tecnología</span>
                                            <h2>¿Qué es el Bitcoin?</h2>
                                        </div>

                                    </div>
                                </Link>
                            </div>

                            <div className="col-md-6">
                                <Link to="/post/1">
                                    <div className="main-post vertical-img">
                                        <img className="" src={post1} alt="" width="100%" />

                                        <div>

                                            <span class="badge bg-danger">Tecnología</span>
                                            <h2>¿Qué es el Bitcoin?</h2>
                                        </div>

                                    </div>
                                </Link>
                            </div>


                        </div>

                        <br />
                        <Link to="/post/1">
                            <div className="main-post">
                                <img className="" src={post1} alt="" width="100%" />

                                <div>
                                    <br />
                                    <br />
                                    <span class="badge bg-danger">Tecnología</span>
                                    <h2>¿Qué es el Bitcoin?</h2>
                                </div>

                            </div>
                        </Link>
                    </div>

                </div>
            </div>



            <br />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-md-8">

                        <div className="card px-4 py-5">

                            <PostCard
                                title="La historia de Tesla"
                                image={post2}
                                author="Celmira Rojas"
                                description="Nikola Tesla nació en 1856 en Smiljan, una aldea serbia del Imperio austríaco (actual Croacia) y dedicó su vida a la investigación científica. Fue un genio considerado el fundador de la tecnología moderna y padre de la civilización eléctrica..."
                                id="2"
                            />

                            <hr />

                            <PostVertical
                                title="¿Qué es el Blockchain?"
                                image={post3}
                                author="Celmira Rojas"
                                description="Blockchain se puede definir como una estructura matemática para almacenar datos de una manera que es casi imposible de falsificar. Es un libro electrónico público que se puede compartir abiertamente entre usuarios dispares y que crea un registro inmutable de sus transacciones...."
                                id="3"
                            />

                            <hr />

                        </div>


                        <br />
                        <br />
                    </div>



                    <div className="col-md-4 sidebar">
                        <ProfileCard />
                    </div>
                </div>
            </div>




            <br />
            <br />

        </div>
    )
}

export default Home
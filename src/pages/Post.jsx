import post1 from "../images/posts/01.jpg"
import post2 from "../images/posts/02.jpg"
import post3 from "../images/posts/03.png"

import { useState, useEffect } from "react"

const data = {
    1: { image: post1, title: "¿Qué es el Bitcoin?", content: `<p>Bitcoin​ ​ es un protocolo, proyecto de código abierto y red entre iguales que se utiliza como criptomoneda, sistema de pago​ y mercancía.​​Fue concebida en 2008​ por una entidad conocida bajo el seudónimo de Satoshi Nakamoto, cuya identidad concreta se desconoce.Bitcoin​ ​ es un protocolo, proyecto de código abierto y red entre iguales que se utiliza como criptomoneda, sistema de pago​ y mercancía.​​Fue concebida en 2008​ por una entidad conocida bajo el seudónimo de Satoshi Nakamoto, cuya identidad concreta se desconoce.</p>` },
    2: { image: post2, title: "La historia de Tesla", content: `<p>Una muestra repasa la vida del visionario de la electricidad, inventor de la corriente alterna🤯.</p><p>Cuando Nikola Tesla tenía tres años vivió un episodio que marcaría el camino del resto de su vida. Mientras acariciaba el lomo de su gato Macak el roce de su mano produjo una lluvia de chispas ruidosas y quiso averiguar por qué. Su padre, un sacerdote ortodoxo, le dijo que era lo mismo que ocurría en los árboles durante una tormenta: la electricidad. Desde ese momento y hasta su muerte Nikola Tesla enfocó sus días a resolver qué era aquel fenómeno hasta convertirse en el gran visionario de la electricidad. El Museo Príncipe Felipe recuerda ahora la vida y la trayectoria de una figura olvidada por la historia con la exposición Nikola Tesla. Ideas como relámpagos, una adaptación del proyecto expositivo que se vio en 2014 en el Espacio Fundación Telefónica, comisariada por Miguel Ángel Delgado y María Santoyo.</p>` },
    3: { image: post3, title: "¿Qué es el Blockchain?", content: `<p>Blockchain se puede definir como una estructura matemática para almacenar datos de una manera que es casi imposible de falsificar. Es un libro electrónico público que se puede compartir abiertamente entre usuarios dispares y que crea un registro inmutable de sus transacciones.</p>` },
}



const Post = ({ params }) => {
    const [post, setPost] = useState({})

    useEffect(() => {
        setPost(data[params.id])
    }, [])

    useEffect(() => {
        const content = document.getElementById("content")

        content.innerHTML = post.content
    }, [post])

    return (
        <div>
            <div className="main-post">
                <img src={post.image} className="post-image" alt="" width="100%" />

                <div>
                    <br />
                    <br />
                    
                    <h1>
                        {post.title}
                    </h1>

                    <p>Autor: Celmira Rojas</p>
                </div>

            </div>

            <br />

            <div className="container">
                
                

                <div className="card p-4">
                    <p id="content">
                        
                    </p>
                </div>

            </div>

            <br/>
            <br/>

        </div>
    )
}



export default Post


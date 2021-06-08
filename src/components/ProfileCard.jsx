import image from "../images/perfil.png"


const ProfileCard = () => {
    return (
        <div className="card card-profile">
            <h4 className="text-uppercase">Acerca de mí</h4>

            <br/>

            <img src={image} className="card-img-top image-profile" alt="..." />
            
            <div className="card-body text-center">
                
                
                
                <p className="description">
                 Mi nombre es Celmira Rojas. A través de la razón buscamos convencer. A través del sentimiento buscamos conmover.
                </p>

                <br/>
                <br/>

                <h4 className="text-uppercase">Redes sociales</h4>

                <div className="row">
                    
                    <div className="col-md-4">

                    </div>
                    
                    <div className="col-md-4">

                    </div>

                    <div className="col-md-4">

                    </div>
                </div>

                <h4 className="text-uppercase">Subscribete a mi boletín</h4>
                
            </div>
        </div>

    )
}


export default ProfileCard

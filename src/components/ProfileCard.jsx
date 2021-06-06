import image from "../images/perfil.png"


const ProfileCard = () => {
    return (
        <div className="card card-profile" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top image-profile" alt="..." />
            
            <div className="card-body text-center">
                
                <h5 className="card-title">Celmira Rojas</h5>
                
                <p className="card-text">
                    "A través de la razón buscamos convencer. A través del sentimiento buscamos conmover."
                </p>
                
            </div>
        </div>

    )
}


export default ProfileCard

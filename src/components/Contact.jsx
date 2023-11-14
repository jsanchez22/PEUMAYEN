import React from 'react'

export const Contact = () => {
    return (
      <div className='contacto'> 
        <h1>Contacto</h1>
  
        <div>
          <div>
            <p>
              ¡Nos encantaría saber de ti! Si tienes alguna pregunta, comentario o simplemente quieres charlar sobre nuestros productos, no dudes en contactarnos.
            </p>
            <p>
              Estamos aquí para ayudarte y proporcionarte la mejor experiencia posible.
            </p>
          </div>
  

        </div>
  
        <div className='ubicacion'>
          <div>
            <h2>Información de Contacto</h2>
            <p><strong>Dirección:</strong> Calle corrientes 3000, CABA, Argentina</p>
            <p><strong>Teléfono:</strong> (5411) 1234-5678</p>
            <p><strong>Correo Electrónico:</strong> info@peumayen.com</p>
          </div>
  
          <div>
          
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.9853129091903!2d-58.412274725332765!3d-34.604532897748456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8d37597871%3A0xb70c37721767a285!2sAv.%20Corrientes%203000%2C%20C1193AAO%20CABA!5e0!3m2!1ses-419!2sar!4v1700003471698!5m2!1ses-419!2sar" width="100%" height="200" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    );
  };
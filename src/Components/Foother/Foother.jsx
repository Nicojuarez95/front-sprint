import React from 'react'
import './foother.css'
import BotonSeccion1Hero1 from '../BotonSeccion1Hero1/BotonSeccion1Hero1'
import ModalDonate from '../ModalDonate/ModalDonate'
import { useDispatch, useSelector } from 'react-redux'
import modaleActions from '../../store/Modale/actions.js';

const { openModal, closeModal } = modaleActions;

export default function Foother() {
  const modalName = 'modalDonate';
  const dispatch = useDispatch();
  const isOpen = useSelector(store => store.modal.isOpen);

  const handleOpenModal = () => {
    dispatch(openModal({ modalName }));
  };
  function handleCloseModal() {
    dispatch(closeModal());
  }

  return (
    <footer>
      <div className='rectangulo-img-foother'></div>
      <div className='suscribe'>
        <h5 id='suscribeId'>Subscribe</h5>
        <div className='input-button'>
          <input type="email" placeholder='Enter your email'/>
          <BotonSeccion1Hero1 text="Subscribe Now"/>
        </div>
      </div>

      <div className='ultimo-cont'>
        <div id='ancors-footer'>
          <a href="/">Home</a>
          <a href="/mangas">Comics</a>
        </div>

        <img id='img-footer' src="/Logomr.png" alt="" />

        <div className='cont-icono-boton'>
          <div className='iconos-footer'>
            <img src="/Facebook.png" alt="fb" />
            <img src="/Twitter.png" alt="tw" />
            <img src="/Vimeo.png" alt="vm" />
            <img src="/Youtube.png" alt="yt" />
          </div>
          <button className="button-suscribe" onClick={handleOpenModal}>Donate</button>
          <ModalDonate isOpen={isOpen} onCloseModal={handleCloseModal} />
        </div>
      </div>
    </footer>
  )
}
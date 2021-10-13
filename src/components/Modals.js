import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Modals = ()=> {
    
    const [ isOpenMOdal1, openModal1, closeModal1 ] = useModal(false);
    const [ isOpenMOdal2, openModal2, closeModal2 ] = useModal(false);

    return(
        <div>
            <h2>Modales</h2>
            {/* Modal 1 */}
            <button onClick={openModal1}>Modal 1</button>
            <Modal 
            isOpen={isOpenMOdal1} 
            closeModal={closeModal1}
            >
                <h3>Modal 1</h3>
                <p>Hola! Este es el contenido de mi modal 1</p>
                <img src="https://placeimg.com/300/300/animals" alt="animals"/>
            </Modal>
            {/* Modal 2 */}
            <button onClick={openModal2}>Modal 2</button>
            <Modal 
            isOpen={isOpenMOdal2} 
            closeModal={closeModal2}
            >
                <h3>Modal 2</h3>
                <p>Hola! Este es el contenido de mi modal 2</p>
                <img src="https://placeimg.com/400/400/nature" alt="nature"/>
            </Modal>
        </div>
    )
};


export default Modals
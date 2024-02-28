

const Nima= ({modal,setmodal}) => {
    return(
        <>
        <div className={`modal ${modal ? "modal--open" : ""}`}
        onClick={(evt) => {
            if(evt.target.matches(".modal")){
                setmodal(false);
            }
        }}>
            <div className="modal__inner">
                <h1>nimalardir</h1>
            <button onClick={()=> setmodal(false)}>Close</button>
            </div>
        </div>
            
        </>
    )
}
export default Nima;
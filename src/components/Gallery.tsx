import left from '../assets/left.jpg'
import rigth1 from '../assets/4c6ea85bec9a25c43b159af08d4361cb.jpg'
import rigth2 from '../assets/fde22f62d867beb69ff9231615ad80f5.jpg'
import rigth3 from '../assets/20ef7096906fd39e4af55d36263f9719.jpg'
import rigth4 from '../assets/ec487ec339cacc808f02b7ec830ab2c7.jpg'
import rigth5 from '../assets/9f9affc376a736ba740ea5a6e9cc3b8d.jpg'
import rigth6 from '../assets/729885ef3bce37a434152668eb553778.jpg'
import rigth7 from '../assets/912274eb69076b00ed9dd92f9191467a.jpg'
import rigth8 from '../assets/a9b62923487791f18ba96c273f8ba1ec.jpg'

const Gallery = () => {
  return (
    <div className="Gallery">
        <div className="left">
            <img src={left} alt="" />
        </div>
        <div className="right">
            <div className='up'>
                <h2>Feauter Products</h2>
                <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="gal">
                <img src={rigth1} alt="" />
                <img src={rigth2} alt="" />
                <img src={rigth3} alt="" />
                <img src={rigth4} alt="" />
                <img src={rigth5} alt="" />
                <img src={rigth6} alt="" />
                <img src={rigth7} alt="" />
                <img src={rigth8} alt="" />

            </div>
        </div>
    </div>
  )
}

export default Gallery
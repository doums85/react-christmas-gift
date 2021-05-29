import img from "../../img/send.png";
import emailjs from 'emailjs-com';
import "./SendGift.scss";
import Swal from "sweetalert2";

const SendGift = () => {
    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'christmas', e.target, 'user_AnRKPe9TQgc2nQIoJ6zy5')
          .then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Santa is on his way to give you your gift',
                showConfirmButton: false,
                timer: 1500
              })
          }, (error) => {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Tornade is sick',
                showConfirmButton: false,
                timer: 1500
              })
          });
      }
      


    return (
        <section className="send section" >
            <div className="send__container bd-container bd-grid">
                <div data-aos="fade-right" data-aos-offset="500" className="send__content">
                    <h2 className="section-title-center send__title">
                        Send Gift Now
                    </h2>
                    <p className="send__description">Start giving away before the holidays are over. Write the home address of the person who will send the gift. </p>
                    <form onSubmit={sendEmail}>
                        <div className="send__direction">
                            <input type="text" name="address" placeholder="House address" className="send__input" required/>
                            <input type="submit" className="button send__button" value="Send" />
                        </div>
                    </form>
                </div>

                <div data-aos="fade-left" data-aos-offset="500" className="send__img">
                    <img src={img} alt="image send" />
                </div>
            </div>
        </section>
    )
}

export default SendGift

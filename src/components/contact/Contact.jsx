import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
    },
  },
};

function Contact() {
  const ref = useRef();

  const formRef = useRef();

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_l5vny7o", "template_88xv66x", formRef.current, {
        publicKey: "Kgaer7DJtbL8xVVCY",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <h1>Let's work together</h1>

        <motion.div className="item" variants={variants}>
          <h2>Email</h2>
          <span>chrissmart920@gmail.com</span>
        </motion.div>
        <div className="item">
          <h2>Location</h2>
          <span>Bradford, UK</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>07*********</span>
        </div>
      </motion.div>
      <motion.div className="formContainer" variants={variants}>
        <motion.div
          className="contactSvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
        >
          <svg width="450px" height="450px" viewBox="0 0 64 64">
            <motion.path
              strokeWidth={0.2}
              fill="none"
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 13 }}
              d="M53.6572,12.4736H41.4077l-0.0132-2.7222h10.4063c0.3604,0,0.6934-0.1943,0.8711-0.5083    c0.1768-0.3145,0.1719-0.6997-0.0146-1.0083l-1.6543-2.7402l1.6719-3.0088c0.1719-0.3101,0.168-0.6875-0.0117-0.9932    C52.4834,1.1875,52.1553,1,51.8008,1H40.3896c-0.5527,0-1,0.4478-1,1v6.7515c0,0.0009,0.0005,0.0015,0.0005,0.0024    s-0.0005,0.0016-0.0005,0.0025l0.0179,3.7173H24.8789c-3.8793,0-7.4057,2.6094-8.6739,6.3091H4.7803    c-0.9618,0-1.8318,0.3844-2.479,1.0008c-0.001,0.0011-0.0024,0.0015-0.0034,0.0026l-0.0002,0.0004    c-0.6891,0.658-1.1238,1.5803-1.1238,2.6066v12.6387c0,1.9888,1.6177,3.6064,3.6064,3.6064H15.71v3.2627c0,0.5522,0.4478,1,1,1    h15.3379v4.7842c-1.4263-0.4462-3.0609-0.4372-4.5693,0.0791c-1.7002,0.5815-2.98,1.7056-3.6592,3.1978    c-4.0586,0.9756-5.9355,4.1704-5.6851,6.9448C18.3628,60.4419,20.4697,63,24.6611,63h20.2471c0.5527,0,1-0.4478,1-1V42.9009    h15.918c0.5527,0,1-0.4478,1-1V21.6426C62.8262,16.5869,58.7129,12.4736,53.6572,12.4736z M41.3896,3h8.7119l-1.1279,2.0298    c-0.1738,0.3135-0.167,0.6958,0.0176,1.0024l1.0381,1.7192h-8.6396V3z M40.2804,21.2544    c0.0557,0.0096,0.1064,0.0332,0.1649,0.0332c0.002,0,0.0029,0,0.0049,0c0.0455-0.0002,0.0844-0.0204,0.1284-0.0266    c1.2291,0.0947,2.2027,1.1118,2.2027,2.3625c0,1.3149-1.0693,2.3848-2.3848,2.3848c-1.3145,0-2.3838-1.0698-2.3838-2.3848    C38.0127,22.3503,39.0208,21.3163,40.2804,21.2544z M16.9093,20.7827c0.0723,0.0023,0.1445,0.0128,0.214,0h7.3386l-9.7466,8.5039    l-9.7526-8.5039H16.9093z M26.183,21.9348c0.0437,0.1462,0.0743,0.298,0.0743,0.4583v12.6387c0,0.1-0.012,0.1969-0.0295,0.2919    l-7.3672-6.9999L26.183,21.9348z M3.3615,35.769c-0.1158-0.2219-0.1876-0.4702-0.1876-0.7373V22.3931    c0-0.1583,0.03-0.3083,0.0726-0.4529L10.8842,28.6L3.3615,35.769z M5.349,36.6382l7.0493-6.7178l1.6599,1.4473    c0.1885,0.1641,0.4229,0.2461,0.6572,0.2461s0.4692-0.082,0.6572-0.2466l1.9741-1.7225l7.355,6.9883    c-0.0175,0.0005-0.0337,0.0052-0.0513,0.0052H5.349z M17.71,38.6382h6.9404c0.9653,0,1.8386-0.3862,2.4866-1.0058    c0.012-0.0115,0.0281-0.0153,0.0397-0.0274c0.0031-0.0033,0.0039-0.0078,0.007-0.0111c0.6617-0.6541,1.0736-1.5603,1.0736-2.5621    V22.3931c0-1.0282-0.4367-1.9517-1.1282-2.6099l-0.0002-0.0004c-0.001-0.0012-0.0026-0.0016-0.0036-0.0028    c-0.6469-0.6141-1.5151-0.9972-2.4749-0.9972h-6.2888c1.1589-2.5566,3.7184-4.3091,6.5173-4.3091    c3.9531,0,7.1689,3.2158,7.1689,7.1689v19.2583H17.71V38.6382z M20.126,57.7271c-0.1797-1.9927,1.3438-4.3203,4.6035-4.9136    c0.3574-0.0649,0.6514-0.3188,0.7681-0.6631c0.5313-1.5693,1.8745-2.2358,2.6284-2.4937    c0.5801-0.1987,1.1924-0.2954,1.7925-0.2954c0.7607,0,1.501,0.1558,2.1294,0.4585V61h-7.3867    C21.5352,61,20.269,59.3091,20.126,57.7271z M34.0479,42.9009h3.0918V61h-3.0918V42.9009z M43.9082,61h-4.7686V42.9009h4.7686V61z     M60.8262,40.9009H34.0479V21.6426c0-2.9014-1.3586-5.4876-3.4688-7.1689h8.8382l0.0236,4.881    c-1.9577,0.438-3.4281,2.1822-3.4281,4.2689c0,2.418,1.9668,4.3848,4.3838,4.3848c2.418,0,4.3848-1.9668,4.3848-4.3848    c0-2.0542-1.4276-3.7702-3.3403-4.2414l-0.0237-4.9085h12.2399c3.9531,0,7.1689,3.2158,7.1689,7.1689V40.9009z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 2 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows="6" placeholder="Type your message here..." name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;

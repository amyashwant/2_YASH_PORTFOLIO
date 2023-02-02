import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS (Endorsements)
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">Here's What People are Saying About My Work.</p>
      </motion.div>
      {/* w-8 h-8  object-cover cursor-pointer rounded-3xl*/}
      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8 ">
        <motion.div
          style={{ border: "" }}
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-person1  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div style={{ border: "", marginTop: "3rem" }}>
            <p className=" text-center ">SAGAR SAINI</p>
            <p className=" text-center ">
              <a
                className=" text-center "
                href="https://www.linkedin.com/in/sagar-saini-0785561b6/"
              >
                {" (Linkedin)🔗 "}
              </a>
            </p>

            <p className=" text-center text-1xl">(SDE at TCS)</p>

            <p className="text-center    ">
              "Always having fun to work on a WEBSITE project. Keen and
              enthusiastic for learning new skills."
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div style={{ border: "", marginTop: "3rem" }}>
            <p className=" text-center ">Kumar Raushan Parag</p>
            <p className=" text-center ">(SDE at SCHNEIDER ELECTRIC)</p>
            <p className="  text-center ">
              <a
                // style={{ marginLeft: "3rem", marginRight: "2.2rem" }}
                href="https://www.linkedin.com/in/kumar-raushan-1b40aa20b/"
              >
                {"Linkedin🔗 "}
              </a>
            </p>
            <p className="text-center ">
              "Passionate at solving the issues and enjoying during the whole
              process."
            </p>
          </div>
        </motion.div>

        <motion.div
          // style={{
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          // }}
          className="mx-auto relative bg-green-900 max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-180px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* <div
            style={{
              border: "2px solid grey",
              marginTop: "2rem",
              marginLeft:"2rem",
              marginRight:"2rem",
              marginBottom:"2rem"
            
            }}
          > */}
            <div
              // className="w-[350px]"
              style={{
                // border: "2px solid red",
                marginTop: "3rem",
                // marginLeft:"2rem",
                // marginRight:"2rem",
                // marginBottom:"2rem"
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "center",
                //  margin:"auto"
                // marginRight: "-50%",
                // transform: "translate(-50%, -50%)",
              }}
            >
              <p className=" text-center ">HARSH CHAUDHARY</p>
              <p className=" text-center ">(SDE at TATA ELXSI )</p>
              <p className=" text-center ">
                <a
                  className="text-center "
                  href="https://www.linkedin.com/in/harsh-chaudhary-563b47199/"
                >
                  {"Linkedin 🔗 "}
                </a>
              </p>

              <p className="text-center ">
                " Having a good content Planning Strategy. Good at figuring out
                new real world projects."
              </p>
            </div>
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

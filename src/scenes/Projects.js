import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-95 transition duration-500
    bg-grey z-30 flex flex-col justify-center  items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <>
      <div
        style={{
          border: "",
          marginBottom: "2rem",
          marginLeft: "2rem",
          marginTop: "1rem",
          marginRight: "0rem",
        }}
      >
        {/* <div className="text-center" style={{marginTop:"0rem"}}>click Here</div> */}

        <motion.div
          variants={projectVariant}
          className="relative"
          style={{ border: "" }}
        >
          <div className={overlayStyles} style={{ border: "" }}>
            <p
              className="text-2xl font-playfair"
              style={{ marginBottom: "-2rem" }}
            >
              {(title === "Office Aid" && "Ⓞⓕⓕⓘⓒⓔ Ⓐⓘⓓ") ||
                (title === "Dating Book" && "Ⓓⓐⓣⓘⓝⓖ Ⓑⓞⓞⓚ") ||
                (title === "Angel Notes" && "Ⓐⓝⓖⓔⓛ Ⓝⓞⓣⓔⓢ") ||
                (title === "Morning Report" && "Ⓡⓔⓟⓞⓡⓣ Ⓜⓞⓡⓝⓘⓝⓖ") ||
                (title === "My Portfolio" && "Ⓜⓨ Ⓟⓞⓡⓣⓕⓞⓛⓘⓞ")}
            </p>
            <div
              className="mt-7"
              style={{
                border: "",
                // width: "15rem",
                // height: "10rem",
              }}
            >
              <div
                className=""
                style={{
                  border: "",
                  width: "15rem",
                  height: "12rem",
                  overflowY: "scroll",
                  scrollbarColor:"red ",
                  backgroundColor: "lightgrey",
                  transform: "scale(1.5,1) translateY(10px)"
                 
                  
                }}
              >
                <p>
                  <a href="https://tutorial-cdb7e.web.app">
                    {title === "Office Aid" && "🔗•𝕊𝕚𝕥𝕖 𝕝𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p>
                  <a href="https://github.com/amyashwant/React_Admin">
                    {title === "Office Aid" && "🔗•𝔾𝕚𝕥𝕙𝕦𝕓 𝕃𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p p>
                  {title === "Office Aid" &&
                    "•Users can sign up and sign in using 𝑭𝒊𝒓𝒆𝒃𝒂𝒔𝒆 𝑨𝒖𝒕𝒉𝒆𝒏𝒕𝒊𝒄𝒂𝒕𝒊𝒐𝒏."}
                </p>
                <p>
                  {title === "Office Aid" &&
                    "•We can store our data in 𝑭𝒊𝒓𝒆𝒃𝒂𝒔𝒆 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆 and store images using 𝑭𝒊𝒓𝒆𝒃𝒂𝒔𝒆 𝑺𝒕𝒐𝒓𝒂𝒈𝒆 and 𝑭𝒊𝒓𝒆𝒃𝒂𝒔𝒆 𝑹𝒆𝒂𝒍𝒕𝒊𝒎𝒆 𝑫𝒂𝒕𝒂𝒃𝒂𝒔𝒆."}
                </p>
                <p>
                  {title === "Office Aid" &&
                    "•This site can be used as an 𝒂𝒅𝒎𝒊𝒏 site with 𝒓𝒆𝒔𝒑𝒐𝒏𝒔𝒊𝒗𝒆𝒏𝒆𝒔𝒔."}
                </p>
                <p>
                  <a href="https://github.com/amyashwant/Full_Mern_Stack">
                    {title === "Dating Book" && "🔗•𝔾𝕚𝕥𝕙𝕦𝕓 𝕃𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p>
                  {title === "Dating Book" &&
                    "•Created a web app similar to Instagram having features such as 𝒍𝒐𝒈𝒊𝒏, writing 𝒑𝒐𝒔𝒕𝒔, 𝒄𝒐𝒎𝒎𝒆𝒏𝒕𝒔, 𝒓𝒆𝒂𝒄𝒕𝒊𝒐𝒏𝒔, 𝒂𝒏𝒅 𝒑𝒓𝒐𝒇𝒊𝒍𝒆 𝒔𝒆𝒂𝒓𝒄𝒉."}
                </p>
                <p>
                  {title === "Dating Book" &&
                    "•Boys and girls can 𝒄𝒉𝒂𝒕 with each other in a safe anonymous environment. Used 𝑾𝒆𝒃𝑺𝒐𝒄𝒌𝒆𝒕 hooks."}
                </p>
                {title === "Dating Book" &&
                  "•Integrated messaging app features like 𝒍𝒊𝒗𝒆 𝒄𝒉𝒂𝒕𝒕𝒊𝒏𝒈, image sharing, and emoji reactions.Integrated backend and frontend using APIs and used database 𝑴𝒐𝒏𝒈𝒐𝑫𝑩 𝑨𝒕𝒍𝒂𝒔."}
                {title === "Dating Book" && ""}
                <p>
                  <a href="https://github.com/amyashwant/SECRET-STORAGE">
                    {title === "Angel Notes" && "🔗•𝔾𝕚𝕥𝕙𝕦𝕓 𝕃𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p>
                  {title === "Angel Notes" &&
                    "•(mern stack)•Online web platform where you can create, edit, upload, and delete your notes/information privately and securely without any disturbances."}
                </p>
                {title === "Angel Notes" &&
                  "•Usage of 𝑹𝒆𝒂𝒄𝒕𝑱𝑺,𝑱𝒂𝒗𝒂𝒔𝒄𝒓𝒊𝒑𝒕,𝑪𝑺𝑺, 𝑯𝑻𝑴𝑳 ,𝑩𝒐𝒐𝒕𝒔𝒕𝒓𝒂𝒑, 𝑴𝑬𝑹𝑵 𝑺𝒕𝒂𝒄𝒌."}
                <p>
                  <a href="https://github.com/amyashwant/REPORT-MORNING">
                    {title === "Morning Report" && "🔗•𝔾𝕚𝕥𝕙𝕦𝕓 𝕃𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p>
                  {title === "Morning Report" &&
                    "•Users can browse the latest news articles and videos through various categories like business, health,entertainment, general, sports, and technology."}
                </p>
                <p>
                  {title === "Morning Report" &&
                    "•Usage of 𝑹𝒆𝒂𝒄𝒕𝑱𝑺, 𝑱𝒂𝒗𝒂𝒔𝒄𝒓𝒊𝒑𝒕, 𝑪𝑺𝑺, 𝑯𝑻𝑴𝑳, 𝑩𝒐𝒐𝒕𝒔𝒕𝒓𝒂𝒑, and 𝑩𝒂𝒄𝒌𝒆𝒏𝒅 𝑨𝑷𝑰𝒔 like 𝒏𝒆𝒘𝒔 𝑨𝑷𝑰𝒔."}
                </p>
                <p>
                  <a href="https://github.com/amyashwant/Yash_portfolio">
                    {title === "My Portfolio" && "🔗•𝔾𝕚𝕥𝕙𝕦𝕓 𝕃𝕚𝕟𝕜🔗 "}
                  </a>
                </p>
                <p>{title === "My Portfolio" && " •𝑹𝒆𝒔𝒑𝒐𝒏𝒔𝒊𝒗𝒆 web𝑺𝒊𝒕𝒆."}</p>
                <p>
                  {title === "My Portfolio" &&
                    "•I have used 𝑻𝒂𝒊𝒍𝒘𝒊𝒏𝒅 𝑪𝑺𝑺 for styling."}
                </p>

                <p>
                  {title === "My Portfolio" &&
                    " •Used 𝒇𝒓𝒂𝒎𝒆𝒓 𝒎𝒐𝒕𝒊𝒐𝒏 for animation. •Used 𝑹𝒆𝒂𝒄𝒕 𝒉𝒐𝒐𝒌 𝒇𝒐𝒓𝒎 for form and validation."}
                </p>

                <p>
                  {title === "My Portfolio" &&
                    "  •Used 𝑹𝒆𝒂𝒄𝒕 𝒉𝒐𝒐𝒌 𝒇𝒐𝒓𝒎 for form and validation."}
                </p>
                {title === "My Portfolio" &&
                  " •Used 𝒓𝒆𝒂𝒄𝒕-𝒂𝒏𝒄𝒉𝒐𝒓-𝒍𝒊𝒏𝒌-𝒔𝒎𝒐𝒐𝒕𝒉-𝒔𝒄𝒓𝒐𝒍𝒍 for navigation "}
              </div>
            </div>
          </div>
          <h3
            className="bg-gradient-rainbow"
            style={{
              position: "absolute",
              color: " #6AFF05",
              top: "50%",
              left: "50%",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "black",
              borderRadius: "1rem",
              border: "rounded",
              borderColor: "yellow",
            }}
          >
            CLICK TO OPEN PROJECT
          </h3>
          <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mt-14 mb-4">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[25rem] max-h-[25rem] text-2xl font-playfair font-semibold"
            style={{
              border: "",
              marginLeft: "2rem",
              marginTop: "1rem",
            }}
          >
            GOOD REAL-WORLD PROJECTS
          </div>
          <Project title="Office Aid" />
          <Project title="Dating Book" />

          {/* ROW 2 */}
          <Project title="Angel Notes" />
          <Project title="Morning Report" />
          <Project title="My Portfolio" />

          {/* <Project title="Project 6" />
          <Project title="Project 7" /> */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

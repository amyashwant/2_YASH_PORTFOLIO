import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 cursor-default">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 ">
            <div
              className="transition ease-in-out delay-150 hover:hover:text-green-200 hover:-translate-y-1 hover:scale-110 duration-300 
            "
            >
              <div
                className="font-bold
              uppercase "
              >
                Computer Languages
              </div>
              <span>Javasript, c, c++, HTML, CSS</span>
            </div>
            <div className="transition ease-in-out delay-150 hover:hover:text-green-200  hover:-translate-y-1 hover:scale-110 duration-300  ">
              <div className="font-bold uppercase">Software Packages</div>
              <span>MongoDB, NodeJS, ExpressJS, ReactJS, Redux</span>
            </div>
            <div className="transition ease-in-out delay-150 hover:hover:text-green-200  hover:-translate-y-1 hover:scale-110 duration-300  ">
              <div className="font-bold uppercase">CI/CD</div>
              <span>Git, Github</span>
            </div>
            <div className="transition ease-in-out delay-150 hover:hover:text-green-200  hover:-translate-y-1 hover:scale-110 duration-300  ">
              <div className="font-bold uppercase">Additional Courses</div>
              <span>
                Fundamentals of Data Structures and Algorithms, Fundamentals of
                Object-Oriented Programming
              </span>
            </div>
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 scale-110">
            <div className="transition ease-in-out delay-150 hover:hover:text-rose-300  hover:-translate-y-1  duration-300  ">
              <div className="font-bold uppercase">Project Intern</div>
              <span>@ Network Centre, SMVDU</span>
              <div> Improved existing website of SMVDU (smvdu.ac.in)</div>
            </div>
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Learning
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <div className="transition ease-in-out delay-150 hover:hover:text-rose-300  hover:-translate-y-1  duration-300  ">
              <span>Excellent problem-solving skills.</span>
              <div> A logical approach to work.</div>
              <span>The ability to explain technical matters clearly.</span>
              <div> Continously learning new skills like NextJs.</div>
            </div>
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            <div className="transition ease-in-out delay-150 hover:hover:text-rose-300  hover:-translate-y-1  duration-300  ">
              <div>Completed many MERN stack's projects.</div>
              <div>
                Working on various real-time projects usefull in our day to day
                life.
              </div>
            </div>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

import { motion } from "framer-motion"
import { NextSeo } from "next-seo"
import Head from "next/head"

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

interface MotionLayoutProps {
  children: React.ReactNode
  title?: string
}

const MotionLayout = ({ children, title }: MotionLayoutProps) => (
  <motion.div
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      <NextSeo
        title={title + " | G&S Home Solutions"}
        description={"G&S Home Solutions"}
        openGraph={{
          title: "G&S Home Solutions",
          description: "G&S Home Solutions",
          locale: "pt_BR",
          site_name: "G&S Home Solutions",
          type: "website",
          url: "https://gshomesolutions.com.br",
        }}
      />
      {children}
    </>
  </motion.div>
)

export default MotionLayout

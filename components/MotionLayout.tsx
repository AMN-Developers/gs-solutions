import { motion } from "framer-motion";
import { NextSeo } from "next-seo";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

interface MotionLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
}

const MotionLayout = ({
  children,
  title,
  description = "G&S Home Solutions",
  canonical,
}: MotionLayoutProps) => (
  <motion.div
    style={{ position: "relative" }}
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, ease: "easeInOut" }}
  >
    <>
      <NextSeo
        title={title ? `${title} | G&S Home Solutions` : "G&S Home Solutions"}
        description={description}
        canonical={canonical}
        openGraph={{
          title: title ? `${title} | G&S Home Solutions` : "G&S Home Solutions",
          description,
          locale: "pt_BR",
          site_name: "G&S Home Solutions",
          type: "website",
          url: canonical || "https://gshomesolutions.com.br",
        }}
      />
      {children}
    </>
  </motion.div>
);

export default MotionLayout;

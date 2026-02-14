import { motion } from "framer-motion";

const PopupAnime = ({ isVisiable, children }) => {
  return (
    isVisiable && (
      <motion.div
        initial={{ opacity: 0, y: 50, x: 1000 }}   // starts invisible and below
        animate={{ opacity: 1, y: -50, x: 22 }}    // fades in and moves up
        exit={{ opacity: 0, y: 50 }}      // optional exit animation
        transition={{ duration: 0.8 }}    // animation speed
      >
        {children}
      </motion.div>
    )

  )

}


export default PopupAnime;
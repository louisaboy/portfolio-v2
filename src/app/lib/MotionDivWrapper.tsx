import { motion } from "framer-motion";


export interface MotionDivWrapperInt {
    parentProps: any;
    childStyle: any
    children: React.ReactNode
}

export default function MotionDivWrapper({ parentProps, childStyle, children }: MotionDivWrapperInt) {
    return (
        <motion.div {...parentProps}>
            <motion.div style={childStyle}>
                {children}
            </motion.div>
        </motion.div>

    )
}
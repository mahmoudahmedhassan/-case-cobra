import { useInView } from 'framer-motion'
import {useRef} from 'react'
type reviewProps = {
    data: string[]
}

function ReviewGrid({data}:reviewProps) {
    function splitArray<T>(array: Array<T>, numParts: number){
        const result:Array<Array<T>>=[];
        for (let i = 0; i < array.length; i++) {
            const index = i % numParts;
            if (!result[index]) {
              result[index] = [];
            }
            result[index].push(array[i]);
          }
          return result;
    }
 

    const refContainer = useRef<HTMLDivElement | null>(null)
    const inView = useInView(refContainer,{once: true, amount: 0.5})
    const columns = splitArray(data,3)

  return (
    <div ref={refContainer}>
        ReviewGrid
    </div>
  )
}

export default ReviewGrid
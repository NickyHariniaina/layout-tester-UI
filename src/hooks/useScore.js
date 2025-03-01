/**
 * 
 * @param {object} param0 
 * 
 */
export const useScore = ({ result }) => {
    const [score, setScore] = useScore(result)

    const incrementScore = () => {
        setScore(
            {...result,
                letter : letter.key++
            }
        )
    }
    return [score, incrementScore]
}
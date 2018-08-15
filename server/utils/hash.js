import jwt from 'jsonwebtoken'

export const hash = async (toBeHashed, expiresIn) => {
    if (!expiresIn) {
        return await jwt.sign(toBeHashed, process.env.SECRET).toString()
    } else {
        return await jwt.sign({ data : toBeHashed }, process.env.SECRET, {
            expiresIn: expiresIn
        }).toString()
    }


} 
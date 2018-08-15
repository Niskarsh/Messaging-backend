import jwt from 'jsonwebtoken'

export const hash = async (toBeHashed, expiresIn) => {
    if (!expiresIn) {
        return await jwt.sign({toBeHashed}, process.env.SECRET)
    }
    console.log (expiresIn)
    return await jwt.sign({toBeHashed}, process.env.SECRET, {
        expiresIn: expiresIn
    })

} 
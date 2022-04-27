// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function projectAPI(req, res) {
    const { name } = req.query
    let description ="GASC is an NFT collection of 10,000 provably unique, hand-drawn, pixel art Aliens programmatically generated with over 300+ attributes and traits stored on the Ethereum blockchain.";
    res.status(200).json({ name, description })
}

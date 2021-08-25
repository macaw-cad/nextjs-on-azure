// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const now = new Date();

  res.status(200).json({ name: 'John Doe', date: `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}` })
}

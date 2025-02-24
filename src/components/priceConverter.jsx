const convertPrice = (price) => {
  const intl = new Intl.NumberFormat('en-US' , {
    style : 'currency',
    currency : 'USD'
  })

  return intl.format(price)
}

export default convertPrice
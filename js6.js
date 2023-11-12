function robota(numb) {
    const numbStr= numb.toString()
    if (numbStr.length >= 2) {
      const first = parseInt(numbStr[0])
      const last = parseInt(numbStr[numbStr.length - 1])
      const sum = first + last
      console.log(`Сума першої та останньої цифри: `+sum)
    } else {
      console.log("Число має менше ніж 2 цифри")
    }
  }
  
  const mumber = 265
  
  robota(mumber)
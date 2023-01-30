let a= [{
    id: 1,
    firstName: 'Le',
    lastName: 'Linh',
    phone: '066886789',
    email: 'lelinh@gmail.com',
    password: '00123'
  },
  {
    id: 2,
    firstName: 'Le',
    lastName: 'Linh',
    phone: '066886789',
    email: 'lelinh2@gmail.com',
    password: '00123'
  }]
  let b = "lelinh@gmail.com"
  // console.log("a:", a)
  for (let c = 0; c < a.length; c++){
    // console.log("a[c]", a[c] )
    if(a[c].email === b ) {
      console.log("email:", a[c].id)
    }
  }
  // if(a[c] === b ) {
  //   console.log("email:", c)
  // }
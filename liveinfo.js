getquandl()

    const apple = 'https://www.quandl.com/api/v3/datasets/EOD/AAPL?api_key=HA4wUvs113Es83P2xHbs'
    async function getquandl(){
        const response = await fetch(apple)
        const data1 = await response.json()
        
        document.getElementById('livedata').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

    const pfizer = 'https://www.quandl.com/api/v3/datasets/EOD/PFE.json?api_key=HA4wUvs113Es83P2xHbs'
    async function getquandla(){
        const response = await fetch(pfizer)
        const data1 = await response.json()

        document.getElementById('livedata1').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

    const nike = 'https://www.quandl.com/api/v3/datasets/EOD/NKE.json?api_key=HA4wUvs113Es83P2xHbs'
    async function getquandlb(){
        const response = await fetch(nike)
        const data1 = await response.json()

        document.getElementById('livedata2').textContent=data1.dataset.data[0][1]
        console.log(data1.dataset.data[0][1])
    }

    const bitcoin = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=GBP&api_key=3af25ca99720178b31ee6c52d8c40ead6ceb4ab88e5707a8a63d413026b977f8'
    async function getcrypto(){
        const response = await fetch(bitcoin)
        const data1 = await response.json()

        document.getElementById('bitcoindata').textContent=data1.BTC.GBP
        console.log(data1.BTC.GBP)
    }

    const doge = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=DOGE&tsyms=GBP&api_key=3af25ca99720178b31ee6c52d8c40ead6ceb4ab88e5707a8a63d413026b977f8'
    async function getcrypto1(){
        const response = await fetch(doge)
        const data1 = await response.json()

        document.getElementById('bitcoindata1').textContent=data1.DOGE.GBP
        console.log(data1.DOGE.GBP)
    }

    const polygon = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=MATIC&tsyms=GBP&api_key=3af25ca99720178b31ee6c52d8c40ead6ceb4ab88e5707a8a63d413026b977f8'
    async function getcrypto2(){
        const response = await fetch(polygon)
        const data1 = await response.json()

        document.getElementById('bitcoindata2').textContent=data1.MATIC.GBP
        console.log(data1.MATIC.GBP)
    }

    const exchangerate ='https://api.whatsonchain.com/v1/bsv/main/exchangerate'
    async function getexchange(){
      const response = await fetch(exchangerate)
      const data1 = await response.json()
      console.log(data1.rate)

      document.getElementById('exchangerate').textContent=data1.rate
      console.log(data1.rate)
    }

    const circulatingsupply ='https://api.whatsonchain.com/v1/bsv/main/circulatingsupply'
    async function getsupply(){
      const response = await fetch(circulatingsupply)
      const data1 = await response.json()
      console.log(data1.data)

      document.getElementById('circulatingsupply').textContent=data1.data
      console.log(data1.data)
    } 

    getquandl()
    getquandla()
    getquandlb()
    getcrypto()
    getcrypto1()
    getcrypto2()
    getexchange()
    getsupply()
export default class DiscounterHelper {
  getDiscounts() {
      return [
        {
          header: {
            badge: 'Special',
            rate: '10%',
            type: 'DISCOUNT'
          },
          info: {
            details: 'First time users get an introductory',
            action: 'Click to watch video'
          }
        },
        {
          header: {
            badge: 'Special',
            rate: '10%',
            type: 'CASHBACK'
          },
          info: {
            details: 'Refer a friend to receive',
            action: 'Log in to add a friend'
          }
        }
      ]
  }
}

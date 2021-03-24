const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  console.log(Object.keys(order));
  console.log(Object.keys(order.order.pizza));
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const delivPers = order.order.delivery.deliveryPerson;
    const clientName = order.name;
    const msg = `Olá ${delivPers}, entrega para: ${clientName}, Telefone: ${order.phoneNumber}, R.${order.address.street}, ${order.address.number}, AP: ${order.address.apartment}`
    return console.log(msg);
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const msg = `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)} e ${order.order.drinks.coke.type} é R$${order.payment.total}`
  return console.log(msg);
  }
  
  orderModifier(order);


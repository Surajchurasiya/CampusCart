const Product = require('../models/product');
const taxConfig = require('../config/tax');

exports.disableProducts = products => {
  let bulkOptions = products.map(item => {
    return {
      updateOne: {
        filter: { _id: item._id },
        update: { isActive: false }
      }
    };
  });

  Product.bulkWrite(bulkOptions);
};

// calculate order tax amount
exports.calculateTaxAmount = order => {
  try {
    const taxRate = taxConfig.stateTaxRate;
    let totalTax = 0;

    if (order.products && order.products.length > 0) {
      order.products.forEach(item => {
        const price = item.purchasePrice || (item?.product?.price ?? 0);
        const quantity = item.quantity;
        item.totalPrice = parseFloat((price * quantity).toFixed(2));
        item.purchasePrice = parseFloat(price.toFixed(2));

        if (item.status !== 'Cancelled') {
          if (item.product?.taxable && (item.priceWithTax === 0 || !item.priceWithTax)) {
            const taxAmount = (item.totalPrice * taxRate) / 100;
            item.totalTax = parseFloat(taxAmount.toFixed(2));
          }
          totalTax += item.totalTax || 0;
        }

        item.priceWithTax = parseFloat((item.totalPrice + (item.totalTax || 0)).toFixed(2));
      });
    }

    order.totalTax = parseFloat(totalTax.toFixed(2));
    order.total = exports.calculateOrderTotal(order);
    order.totalWithTax = parseFloat((order.total + order.totalTax).toFixed(2));

    return order;
  } catch (error) {
    console.error('calculateTaxAmount error:', error);
    return order;
  }
};

exports.calculateOrderTotal = order => {
  const total = order.products
    .filter(item => item.status !== 'Cancelled')
    .reduce((sum, current) => sum + current.totalPrice, 0);

  return total;
};

// calculate order tax amount
exports.calculateItemsSalesTax = items => {
  const taxRate = taxConfig.stateTaxRate;

  return items.map(item => {
    item.priceWithTax = 0;
    item.totalPrice = 0;
    item.totalTax = 0;
    item.purchasePrice = parseFloat(item.price.toFixed(2));

    const quantity = item.quantity;
    item.totalPrice = parseFloat((item.purchasePrice * quantity).toFixed(2));

    if (item.taxable) {
      const taxAmount = (item.totalPrice * taxRate) / 100;
      item.totalTax = parseFloat(taxAmount.toFixed(2));
      item.priceWithTax = parseFloat((item.totalPrice + item.totalTax).toFixed(2));
    }

    return item;
  });
};

exports.formatOrders = orders => {
  const newOrders = orders.map(order => {
    return {
      _id: order._id,
      total: parseFloat(order.total.toFixed(2)),
      created: order.created,
      products: order?.cart?.products
    };
  });

  return newOrders.map(order => {
    return order?.products ? exports.calculateTaxAmount(order) : order;
  });
};

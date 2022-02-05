const author = {
  name: "Daniel",
  lastname: "Gutierrez",
};

const expectedQueryResponse = ({ data }) => {
  const categories = data?.available_filters[0]?.values.map(
    (category) => category.name
  );

  const items = data?.results.map((item) => ({
    id: item?.id,
    title: item?.title,
    price: {
      currency: item?.prices?.prices[0]?.currency_id,
      amount: item?.prices?.prices[0]?.amount,
      decimals: parseInt(
        (item?.prices?.prices[0]?.amount + "").split(".")[1] || 0
      ),
    },
    picture: item?.thumbnail,
    condition: item?.condition,
    free_shipping: item?.shipping?.free_shipping,
  }));

  return {
    author,
    categories,
    items,
  };
};

const expectedPathIdResponse = (item, itemDescription) => {    
  return {
    author,
    item: {
      id: item?.id,
      title: item?.title,
      price: {
        currency: item?.currency_id,
        amount: item?.price,
        decimals: parseInt((item?.price + "").split(".")[1] || 0),
      },
      picture: item?.pictures[0]?.url,
      condition: item?.condition,
      free_shipping: item?.shipping?.free_shipping,
      sold_quantity: item?.sold_quantity,      
      description: itemDescription?.plain_text,
    },
  };
};

module.exports = {
  expectedQueryResponse,
  expectedPathIdResponse
};

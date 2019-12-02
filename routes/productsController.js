let products = {
    items: [
        {
            id: 1,
            name: 'Product 1',
            description: 'Product1 description',
            price: 19.00
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Product2 description',
            price: 29.00
        }

    ]
}

module.exports = {
    get(_, res) {
        // res.json({ title: 'Products page' });
        res.json({getReceive: products.items});
    },
    getById(req, res) {
        if (!req.params.description) {
            res.json({ error: 'Should receive an id' })
        }
        //res.json({ success: 'Id received!!!' })
        for (var i = 0; i < products.items.length; i++) {

            if (req.params.id == products.items[i].id) {
                res.json({idReceive: products.items[i]});
            }

        }

            res.json({idReceive: "id não existe para produtos" })

    },
    post(req, res) {
      // res.send(req.body.price);
         if (req.body.description.length < 10 || req.body.price <= 0) {
            res.json({ erro: "descricao tem menos que 10 caracteres ou preço menor/igual a zero" });
        } else {
            products.items.push(req.body)
            res.json({ successInsert: "produto inserido com sucesso!" });
        }
    }


};

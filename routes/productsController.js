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
        res.json(products.items);
    },
    getById(req, res) {
        if (!req.params.id) {
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

        if (req.body.description.length < 10) {
            res.json({ erro: "descricao tem menos que 10 caracteres" });
        } else {
            products.items.push(req.body)
            res.json({ successInsert: "produto inserido com sucesso!" });
        }
    }


};

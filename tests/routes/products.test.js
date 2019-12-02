const expect = require('chai').expect;

const { get, getById, post} = require('../../routes/productsController');

let req = {
    body: {},
    params: {},
};

const res = {
    jsonCalledWith: {},
    json(arg) {
        this.jsonCalledWith = arg
    }
}

describe('Products Route', function () {
    describe('get() function', function () {
        it('should return object with title ', function () {
            get(req, res);
            expect(res.jsonCalledWith).to.be.have.key('getReceive');
        });

        it('should receive return by id ', function () {
            const getReq = req;
            getReq.params = {
                id: 1
            };

            getById(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('idReceive')
        });
    });

    describe('post() function', function () {
        it('insert product on list ', function () {
            const getReq = req;
            getReq.body = {
                description: "Product3 description",
                price: 0
            };

            post(getReq, res);
            expect(res.jsonCalledWith).to.be.have.key('successInsert')

        })
    });


});
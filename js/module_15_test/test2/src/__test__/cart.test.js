import Cart from '../cart'

const products = [
{id: 'id-1', price: 10},
{id: 'id-2', price: 20},
{id: 'id-3', price: 30}
];

const initialItems = {
    'id-1': 1,
    'id-2': 2
    
}

describe('shopping cart', () => {
    let cart;

    beforeEach(() => {
        cart = new Cart(initialItems) 
    })
    it('has initial items', () => {
        // const cart = new Cart(initialItems);

        expect(cart.items).toEqual(initialItems)
    });

    it('adds 1 quantity to existing item', () => {
        // const cart = new Cart(initialItems);

        cart.add('id-1');

        expect(cart._items['id-1']).toBe(2);
    });

    it('adds item and sets it quantity to 1 ', () => {
        // const cart = new Cart(initialItems);

        cart.add('id-3');

        expect(cart._items['id-3']).toBe(1);
    });

    it('removes entry', () => {
        // const cart = new Cart(initialItems);

        cart.remove('id-2');

        expect(cart.items).not.toHaveProperty('id-2');        
    });

    it('should return total', () => {
        expect(cart.total(products)).toBe(50);
    })
});
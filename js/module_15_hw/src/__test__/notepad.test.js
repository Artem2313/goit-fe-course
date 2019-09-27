import Notepad from '../script'

const initialNotes = [
    {
      id: 'id-1',
      title: 'JavaScript essentials',
      body:
        'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
      priority: Notepad.Priority.HIGH,
    },
    {
      id: 'id-2',
      title: 'Refresh HTML and CSS',
      body:
        'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
      priority: Notepad.Priority.NORMAL,
    },
  ];




describe('notepad', () => {
    let notepad;

    beforeEach(() => {
        notepad = new Notepad(initialNotes) 
    })
    it('should have initial notes', () => {
        expect(notepad.notes).toEqual(initialNotes)
    });
    it('should save notes', () => {

        const note = {
                        //           text: 'hello'
            //       };
            
            //       expect(notepad.save(note)).toHaveProperty('id')

        
            id: 'id-3',
            title: 'Get comfy with Frontend frameworks',
            body:
              'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
            priority: Notepad.Priority.NORMAL,
          };
          
         
          const note = {
                        //           text: 'hello'
            //       };
            
            //       expect(notepad.save(note)).toHaveProperty('id')

        
            id: 'id-3',
            title: 'Get comfy with Frontend frameworks',
            body:
              'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
            priority: Notepad.Priority.NORMAL,
          };

          notepad.notes.push(note);

          expect(notepad.saveNote(note)).toEqual(expect.objectContaining(note))
    });

    // it('adds 1 quantity to existing item', () => {
    //     // const cart = new Cart(initialItems);

    //     cart.add('id-1');

    //     expect(cart._items['id-1']).toBe(2);
    // });

    // it('adds item and sets it quantity to 1 ', () => {
    //     // const cart = new Cart(initialItems);

    //     cart.add('id-3');

    //     expect(cart._items['id-3']).toBe(1);
    // });

    // it('removes entry', () => {
    //     // const cart = new Cart(initialItems);

    //     cart.remove('id-2');

    //     expect(cart.items).not.toHaveProperty('id-2');        
    // });

    // it('should return total', () => {
    //     expect(cart.total(products)).toBe(50);
    // })
});
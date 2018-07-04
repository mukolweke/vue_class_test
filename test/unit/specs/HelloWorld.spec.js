import shallow from 'vue-test-utils'
import sinon from 'sinon'
import TestComponent from '@/components/HelloUnitTesting'
/* eslint-disable indent */
describe(TestComponent, function () {
    // Inspect the raw component options
    it('has a created hook', () => {
        expect(typeof TestComponent.created).toBe('function')
    })
    // test the name of the component
    it('it is called HelloUnitTesting', () => {
        // initialize the test; mount the component
        const wrapper = shallow(TestComponent)

        // assert result
        expect(wrapper.name()).to.equal('TestComponent')
    })
    // check if add method has been called
    it('Calls the addTodo method', function () {
        // test initialized
        const listener = sinon.spy()
        const wrapper = shallow(TestComponent)
        wrapper.setMethods({
            addToDo: listener
        })

        // click the button
        wrapper.find('button').trigger('click')

        // assert result
        expect(listener.called)
    })
    // checking if the props will display data on view component
    it('Applying content from a property', function () {
        // initialize test
        const content = 'Hello Michael'

        const wrapper = shallow(TestComponent, {
            propsData: {
                content
            }
        })
        // assert result, check if component has the string
        expect(wrapper.text().contains(content))
    })
    // check if slot is applied content shown in component
    it('Applies content in a slot', function () {
        // initialize
        const content = 'This is Cytonn Technologies'

        const wrapper = shallow(TestComponent, {
            slots: {
                default: '<div>{{content}}</div>'
            }
        })
        // assert result that component has the slot
        expect(wrapper.text().contains(content))
    })
})

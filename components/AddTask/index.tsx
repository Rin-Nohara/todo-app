import * as React from 'react';
import Button from '../Button';

const AddTask = () => {

    function addTask () {
        console.log('add task');
    }

    return (
        <Button
            text='add Task'
            pressHandle={addTask}
        />
    )
}

export default AddTask


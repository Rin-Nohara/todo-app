import * as React from 'react';

import Button from '../Button';

const AddTask: React.FC<{navigation: any}> = ({navigation}) => {

    function addTask () {
        navigation && navigation.push('AddTask')
    }

    return (
        <Button
            widthFill
            text='Add Task'
            pressHandle={addTask}
        />
    )
}

export default AddTask


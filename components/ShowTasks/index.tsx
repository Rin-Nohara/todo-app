import * as React from 'react';
import Button from '../Button';

const ShowTasks = () => {

    function showAllTasks () {
        console.log('showAllTasks');
    }

    return (
        <Button
            text='view All Tasks'
            pressHandle={showAllTasks}
            bgColor="#fff"
            textColor='#003366'
        />
    )
}

export default ShowTasks


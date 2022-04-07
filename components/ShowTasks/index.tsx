import * as React from 'react';
import Button from '../Button';

const ShowTasks: React.FC<{navigation: any}> = ({navigation}) => {

    function showAllTasks () {
        navigation && navigation.push('ViewAll')
    }

    return (
        <Button
            widthFill
            text='View All'
            pressHandle={showAllTasks}
            bgColor="#fff"
            textColor='#003366'
        />
    )
}

export default ShowTasks


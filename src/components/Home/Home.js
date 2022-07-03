import React, { useEffect } from 'react';
import { Summary } from './Summary';

export const Home = () => {
    useEffect(
        ()=>console.log('rendering home'),
    )
return <div>
    Home
    <Summary/>
</div>
}
import { People } from '@/data';
import { usePeople } from '@/hooks/usePeople';
import { useEffect } from 'react';
import { PeopleTable } from './PeopleTable';


export const Home = () => {

    const { startAddPeople } = usePeople()


    useEffect(() => {
        startAddPeople(People)
    }, [])

    return (
        <div style={{ width: '80vw', margin: '2rem auto' }}>

            <PeopleTable />
        </div>
    )
}

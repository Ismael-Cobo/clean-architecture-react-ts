import { useFavorite, usePeople } from '@/hooks'
import { Person } from '@/models'
import { Checkbox } from '@mui/material'
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid'

export const PeopleTable = () => {

    const { people } = usePeople()
    const { favorite, startAddFavorite } = useFavorite()
    const rowsPerPage = 5

    const findOnePerson = (person: Person): boolean => {
        return !!favorite.find(p => p.id === person.id)
    }

    const filterPerson = (person: Person) => {
        return favorite.filter(p => p.id !== person.id)
    }

    const handleChange = (person: Person) => {
        const filteredPeople = findOnePerson(person) ? filterPerson(person) : [...favorite, person]

        startAddFavorite(filteredPeople)
    }


    const column: GridColumns = [
        {
            field: 'actions',
            type: 'actions',
            width: 50,
            disableColumnMenu: true,
            filterable: false,
            renderCell: (params: GridRenderCellParams) => <>{
                <Checkbox
                    size='small'
                    checked={findOnePerson(params.row)}
                    onChange={() => handleChange(params.row)}
                />
            }</>
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 150,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'category',
            headerName: 'Category',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
            field: 'levelOfHappiness',
            headerName: 'Happiness',
            flex: 1,
            renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
    ]
    return (
        <DataGrid
            rows={people}
            columns={column}
            disableSelectionOnClick
            disableColumnSelector
            pageSize={rowsPerPage}
            rowsPerPageOptions={[rowsPerPage]}
            autoHeight
            getRowId={(row: Person) => row.id}
        />
    )
}

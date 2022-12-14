import { usePeopleTable } from '@/hooks'
import { Person } from '@/models'
import { Checkbox } from '@mui/material'
import { DataGrid, GridColumns, GridRenderCellParams } from '@mui/x-data-grid'

export const PeopleTable = () => {

    const { handleChange, findOnePerson, rowsPerPage, people } = usePeopleTable()

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

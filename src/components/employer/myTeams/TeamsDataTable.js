import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import NameInfo from './NameInfo'
import SelectPermission from './SelectPermission';

import { Button } from '@mui/material'; import CircleIcon from '@mui/icons-material/Circle';
import Actions from './Actions';

const columns = [
  {
    field: 'name', headerName: 'Name', width: 350, renderCell: (params) => {
      console.log(params.value)
      return <NameInfo avatarInitial={params.value.avatarInitial} name={params.value.fullname} email={params.value.email} />
    }
  },
  {
    field: 'Status', headerName: 'Status', width: 200, renderCell: (params) => {
      console.log(params.value)
      return (
        <div>
          {params.value.currentStatus === "Active" ? (
            // <ActiveChip label="Active"/>
            <Button startIcon={<CircleIcon />}
              size='small' variant='outlined'
              sx={{
                padding: "0 8px 0 5px",
                color: 'green',
                borderRadius: "8px",
                border: "1px solid #009700",
                height: 1,
                fontSize: "14px",
                fontWeight: "bold",
                background: "#defbde"
              }}>Active </Button>
          ) : (
            <Button disabled startIcon={<CircleIcon sx={{
              fontSize: 'small'
            }} />}
              size='small' variant='outlined'
              sx={{
                padding: "0 5px",
                color: 'gray',
                borderRadius: "8px",
                border: "1px solid gray",
                height: 1,
                fontSize: "14px",
                fontWeight: "bold",
                background: "lightGray"
              }}>Offline</Button>
          )}
        </div>
      )
    }
  },
  { field: 'dateAdded', headerName: 'Date Added', width: 200 },
  {
    field: 'lastActive',
    headerName: 'Last Active',
    width: 200,
  },
  {
    field: 'permissions',
    headerName: 'Permissions',
    width: 250,
    renderCell: (params) => {
      console.log(params.value.permissions)
      return <SelectPermission selectedPermission={params.value.permissions} />
    }
  },
  {
    field: 'actions',
    headerName: '',
    sortable: false,
    width: 140,
    renderCell: (params) => (
      <Actions />
    )
  }
];


export default function TeamsDataTable({ rows }) {
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />

      
    </div>
  );
}

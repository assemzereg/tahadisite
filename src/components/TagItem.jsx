import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  Tagitem: {
    width: 'fit-content',
    padding: '5px 10px',
    backgroundColor: '#2AB7CA',
    color: '#ffffff',
    borderRadius: 5,
    fontSize: 17,
    fontWeight: 600,
  },
}))

const TagItem = ({ props }) => {
  const core = useStyles()
  return <div className={core.Tagitem}>{props.item}</div>
}

export default TagItem

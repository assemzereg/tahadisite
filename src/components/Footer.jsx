import React from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  PlaceClubFooter: {
    width: '100%',
    backgroundColor: '#102023',
    marginTop: 50,
    // bottom: 0,
    // position: 'inherit',
  },
  PlaceClubFooterIn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
    color: 'white',
  },
  PlaceUserFooter: {
    width: '100%',
    backgroundColor: '#D5F2F6',
    marginTop: 50,
    // bottom: 0,
    // position: 'inherit',
  },
  PlaceUserFooterIn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 16,
    fontWeight: 600,
    padding: 20,
    color: 'black',
  },
  wrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
}))
const Footer = ({ page }) => {
  const core = useStyles()
  return (
    <div
      className={page === 'club' ? core.PlaceClubFooter : core.PlaceUserFooter}
    >
      <div
        className={
          page === 'club' ? core.PlaceClubFooterIn : core.PlaceUserFooterIn
        }
      >
        <div>2022 TAHADI - ALL RIGHT RESERVED</div>
        {page === 'club' ? (
          <div>POWERED BY MASS</div>
        ) : (
          <div className={core.wrap}>
            <div>ENGLISH</div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Footer

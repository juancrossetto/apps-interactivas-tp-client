import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";

const StyledTableContainer = withStyles(theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 5,
    border: 0,
    color: "white",
    padding: "0 10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
  }
  // label: {
  //   textTransform: 'capitalize',
  // },
  // body: {
  //   fontSize: 24,
  //   colSpan:6,
  //   fontWeight: 'bold',

  // },
}))(TableContainer);

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "linear-gradient(#e66465, #9198e5)", //theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    // textAlign: 'center',
    fontWeight: "bold"
  },
  body: {
    fontSize: 14,
    colSpan: 6
    // textAlign: 'center',
  }
}))(TableCell);

const useStyles1 = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
  const classes = useStyles1();
  const theme = useTheme();
  // const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500
  }
});
const TableWithPagination = ({ rows }) => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    // w-50 p-3 --> Le da un width: 75%
    <div className="container w-75 p-3">
      <StyledTableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">#</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="center">Puntaje</StyledTableCell>
              <StyledTableCell align="center">Materia</StyledTableCell>
              <StyledTableCell align="center">Nivel</StyledTableCell>
              <StyledTableCell align="center">
                Fecha&nbsp;de&nbsp;Juego
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map(row => (
              <TableRow key={row.position}>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.position}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Avatar alt="No Data" src={row.avatar}>
                    {row.name.charAt(0).toUpperCase()}
                  </Avatar>
                </StyledTableCell>
                <StyledTableCell align="left">{row.name}</StyledTableCell>
                <StyledTableCell>
                  <Rating
                    align="left"
                    name="half-rating-read size-large"
                    defaultValue={row.score / 100}
                    precision={0.01}
                    readOnly
                  />
                  ({row.score})
                </StyledTableCell>
                <StyledTableCell align="center">{row.subject}</StyledTableCell>
                <StyledTableCell align="center">{row.level}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 50 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={6}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </StyledTableContainer>
    </div>
  );
};

export default TableWithPagination;

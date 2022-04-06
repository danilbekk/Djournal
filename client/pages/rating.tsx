import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Tabs,
  Tab,
  Button
} from "@mui/material"
import FollowButton from "../components/FollowButton"
import { MainLayout } from "../layouts/MainLayout"

export default function Rating() {
  return (
    <MainLayout hideComments>
      <Paper className="p-20 pt-20 pr-20 mb-20" elevation={0}>
        <Typography variant="h5" fontWeight={'bold'} marginBottom={'6px'} fontSize={'30px'}>
          Рейтинг сообществ и блогов
        </Typography>
        <Typography fontSize={'15px'}>
          Десять лучших авторов и комментаторов, а также администраторы первых десяти сообществ из рейтинга по итогам месяца бесплатно получают Plus-аккаунт на месяц.
        </Typography>
        <Tabs className="mt-20" value={0}>
          <Tab label="Январь" />
          <Tab label="3 месяца" />
          <Tab label="За все время" />
        </Tabs>
      </Paper>
      <Paper elevation={0}>
        <Table aria-label="sipmle table">
          <TableHead>
            <TableRow>
              <TableCell>
                Имя пользователя
              </TableCell>
              <TableCell align="right">
                Рейтинг
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <span className="mr-15">1</span>
                Jango
              </TableCell>
              <TableCell align="right">
                540
              </TableCell>
              <TableCell align="right">
                <FollowButton />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </MainLayout>
  )
}
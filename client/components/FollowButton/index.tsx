import { Button } from "@mui/material"
import { AddOutlined as AddIcon, CheckOutlined as CheckIcon } from "@mui/icons-material"

import styles from "./FollowButton.module.scss"
import { useState } from "react"

export default function FollowButton() {
  const [followed, setFollowed] = useState(false)
  return (
    <Button
      className={styles.followButton}
      variant="contained"
      onClick={() => setFollowed(!followed)}
    >
      {followed ? <AddIcon /> : <CheckIcon className={styles.checkIcon} />}
    </Button>
  )
}

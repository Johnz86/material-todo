import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SendIcon from '@material-ui/icons/Send';
import StarIcon from '@material-ui/icons/Star';
import * as React from 'react';
import { Link } from 'react-router-dom';

interface LinkProps {
  path: string;
  text: string;
  children: React.ReactElement<any>;
}

const LinkItem = (props: LinkProps) => {
  const {path, text, children} = props;
  const ResolveLink = (spread: any) => <Link to={path} {...spread} />
  return (<ListItem button={true} component={ResolveLink}>
    <ListItemIcon>
      {children}
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>);
}

export const mailFolderListItems = (
  <div>
    <LinkItem path="/home" text="Home">
      <InboxIcon />
    </LinkItem>
    <LinkItem path="/todo" text="Todo">
      <StarIcon />
    </LinkItem>
    <LinkItem path="/email/send" text="Send mail">
      <SendIcon />
    </LinkItem>
    <LinkItem path="/drafts" text="Drafts">
      <DraftsIcon />
    </LinkItem>
  </div>
)
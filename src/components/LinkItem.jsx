import { Item, Label } from 'semantic-ui-react';

import { Votes } from './Votes';

export const LinkItem = ({
  link: { uid, url, title, publisher, texts, votes },
}) => {

  return (
    <Item>
      <Item.Image as='div'>
        <Votes voteCount={votes} linkUID={uid}/>
      </Item.Image>

      <Item.Content href={url} target="_blank">
        <Item.Header>{title}</Item.Header>
        <Item.Description>{publisher}</Item.Description>
        <Item.Meta>{url}</Item.Meta>
        <Item.Extra>
          {texts.map((text, i) => (
            <Label key={i}>{text}</Label>
          ))}
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

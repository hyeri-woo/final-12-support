import React from 'react';
import styled from 'styled-components';
import CardListItem from './CardListItem';

const CardListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding: 20px;
`;

export default function CardList({ games }) {
  // console.log(games);
  return (
    <CardListStyle>
      {games.map((game) => {
        return <CardListItem key={game.id} game={game} />;
      })}
    </CardListStyle>
  );
}

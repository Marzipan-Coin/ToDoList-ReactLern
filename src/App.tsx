import './index.css';
import { useState } from 'react';
import { MockData } from './shared/Mock/Data';
import Header from './shared/ui/Header/Header';
import CardTable from './features/CardTable/CardTable';
import Footer from './shared/ui/Footer/Footer';
import { CardProperties } from './features/Card/Card.types';
import { CardBaseProperties, CardChangePayload } from './shared/types/CardTypes';

const StartData = {...MockData};

const ToDoApp = () => {
  const [columns, setColumns] = useState({...StartData});

  const handleUpdateCard = (id: string, changes: CardChangePayload) => {
    const column = columns.columns[columns.columns.findIndex(col => col.cards.some(card => card.id === id))];
    const cardIndex = column.cards.findIndex(card => card.id === id);
    

    if (cardIndex !== -1) {
      column.cards[cardIndex] = { ...column.cards[cardIndex], ...changes };
    }

    setColumns({ ...columns })
  };

  const handlePromoteCard = (id: string) => {
    const column = columns.columns[columns.columns.findIndex(col => col.cards.some(card => card.id === id))];
    const cardIndex = column.cards.findIndex(card => card.id === id);
    if (cardIndex === -1) return;
    const promotedCard = column.cards[cardIndex];
    const previousStatus = promotedCard.status;
    promotedCard.status += 1;

    if (cardIndex !== -1) {
      const newColumn = columns.columns[promotedCard.status - 1];
      handleCreateCard(promotedCard);

      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns })
  };

  const handleDemoteCard = (id: string) => {
    const column = columns.columns[columns.columns.findIndex(col => col.cards.some(card => card.id === id))];
    const cardIndex = column.cards.findIndex(card => card.id === id);

    if (cardIndex === -1) return;
    const demotedCard = column.cards[cardIndex];
    const previousStatus = demotedCard.status;
    demotedCard.status -= 1;

    if (cardIndex !== -1) {
      const newColumn = columns.columns[demotedCard.status - 1];
      handleCreateCard(demotedCard);

      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns })
  };

  const handleDeleteCard = (id: string) => {
    const column = columns.columns[columns.columns.findIndex(col => col.cards.some(card => card.id === id))];
    const cardIndex = column.cards.findIndex(card => card.id === id);

    if (cardIndex !== -1) {
      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns });
  };

  const handleAddCard = () => {
    const newCard: CardBaseProperties = {
      id: `card-${Date.now()}`,
      title: 'New Card',
      description: 'Description of the new card',
      status: 1,
    }

    columns.columns[0].cards.push(newCard);
    setColumns({ ...columns });
  };

  const handleCreateCard = (newCard: CardBaseProperties) => {
    const column = columns.columns[newCard.status - 1];
    column.cards.push(newCard);
    setColumns({ ...columns });
  };

  // TODO: Extract handles to the hooks

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header
        title="CardBoard"
        logoUrl="src/logo192.png"
        onCreateCard={handleAddCard}
      />

      <main className="flex-1 overflow-auto px-4 py-6">
        {/* <CardTable columns={columns.columns} onCardUpdate={handleUpdateCard} onCardPromote={handlePromoteCard} onCardDemote={handleDemoteCard} onCardDelete={handleDeleteCard} /> */}
        <CardTable>
          {columns.columns.map((column, colIndex) => (
                 <CardTable.Column key={colIndex} title={column.title}>
                    {column.cards.map((card) => (
                      <CardTable.Column.Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        status={card.status}
                        onUpdate={handleUpdateCard}
                        onPromote={handlePromoteCard}
                        onDelete={handleDeleteCard}
                        onDemote={handleDemoteCard}
                      />
                    ))}
                  </CardTable.Column>
          ))}
        </CardTable>
      </main>

      <Footer
        links={[
          { label: 'GitHub', url: 'https://github.com/Marzipan-Coin' },
          { label: 'About', url: '/about' },
        ]}
        authorName="Kirill Borisenko"
        year={2025}
        copyright="CardBoard"
      />
    </div>
  );
};
export const App = () => (
  <ToDoApp />
);
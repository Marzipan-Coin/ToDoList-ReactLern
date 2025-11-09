import './index.css';
import { useState } from 'react';
import { MockData } from './shared/Mock/Data';
import Header from './shared/ui/Header/Header';
import CardTable from './features/CardTable/CardTable';
import Footer from './shared/ui/Footer/Footer';
import { CardProperties } from './features/Card/Card.types';

const StartData = {...MockData};

const ToDoApp = () => {
  const [columns, setColumns] = useState({...StartData});

  const handleUpdateCard = (updated: CardProperties) => {
    const column = columns.columns[updated.status - 1];
    const cardIndex = column.cards.findIndex(card => card.id === updated.id);

    if (cardIndex !== -1) {
      column.cards[cardIndex] = { ...updated };
    }

    setColumns({ ...columns })
  };

  const handlePromoteCard = (promotedCard: CardProperties) => {
    const previousStatus = promotedCard.status;
    promotedCard.status += 1;

    const column = columns.columns[previousStatus - 1];
    const cardIndex = column.cards.findIndex(card => card.id === promotedCard.id);

    if (cardIndex !== -1) {
      const newColumn = columns.columns[promotedCard.status - 1];
      handleCreateCard(promotedCard);

      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns })
  };

  const handleDemoteCard = (demotedCard: CardProperties) => {
    const previousStatus = demotedCard.status;
    demotedCard.status -= 1;

    const column = columns.columns[previousStatus - 1];
    const cardIndex = column.cards.findIndex(card => card.id === demotedCard.id);

    if (cardIndex !== -1) {
      const newColumn = columns.columns[demotedCard.status - 1];
      handleCreateCard(demotedCard);

      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns })
  };

  const handleDeleteCard = (deletedCard: CardProperties) => {
    const column = columns.columns[deletedCard.status - 1];
    const cardIndex = column.cards.findIndex(card => card.id === deletedCard.id);

    if (cardIndex !== -1) {
      column.cards.splice(cardIndex, 1);
    }

    setColumns({ ...columns });
  };

  const handleAddCard = () => {
    const newCard: CardProperties = {
      id: `card-${Date.now()}`,
      title: 'New Card',
      description: 'Description of the new card',
      status: 1,
      onUpdate: handleUpdateCard,
    }
    columns.columns[0].cards.push(newCard);
    setColumns({ ...columns });
  };

  const handleCreateCard = (newCard: CardProperties) => {
    const column = columns.columns[newCard.status - 1];
    column.cards.push(newCard);
    setColumns({ ...columns });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header
        title="CardBoard"
        logoUrl="src/logo192.png"
        onCreateCard={handleAddCard}
      />

      <main className="flex-1 overflow-auto px-4 py-6">
        <CardTable columns={columns.columns} onCardUpdate={handleUpdateCard} onCardPromote={handlePromoteCard} onCardDemote={handleDemoteCard} onCardDelete={handleDeleteCard} />
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
import './index.css';
import { use, useState } from 'react';
import Header from './shared/ui/Header/Header';
import CardTable from './features/CardTable/CardTable';
import Footer from './shared/ui/Footer/Footer';
import useAppHandlers from './CardStatement.hooks';
import { CardColumnProperties } from './features/CardColumn/CardColumn.types';


const ToDoApp = () => {
  const handlers = useAppHandlers();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white">
      <Header
        title="CardBoard"
        logoUrl="src/logo192.png"
        onCreateCard={handlers.handleAddCard}
      />

      <main className="flex-1 overflow-auto px-4 py-6">
        <CardTable>
          {handlers.handleCards().columns.map((column, colIndex) => (
                 <CardTable.Column key={colIndex} title={column.title}>
                    {column.cards.map((card) => (
                      <CardTable.Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        status={card.status}
                        onUpdate={handlers.handleUpdateCard}
                        onPromote={handlers.handlePromoteCard}
                        onDelete={handlers.handleDeleteCard}
                        onDemote={handlers.handleDemoteCard}
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
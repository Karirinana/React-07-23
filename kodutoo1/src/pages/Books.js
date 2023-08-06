import React, { useState } from 'react'

function Books() {
    const [books, renewBooks] = useState(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride And Prejudice", "Anna Karenina"]);

    const reset = () => {
      renewBooks(["The Great Gatsby", "War and Peace", "Hamlet", "Moby Dick", "Pride And Prejudice", "Anna Karenina"]);
    }

    const sorteeriAZ =() => {
      books.sort((a,b) => a.localeCompare(b));
      renewBooks(books.slice());
    }

    const sorteeriZA =() => {
      books.sort((a,b) => b.localeCompare(a));
      renewBooks(books.slice());
    }

    const sorteeriTahtedeArvKasv =() => {
      books.sort((a,b) => a.length - b.length);
      renewBooks(books.slice());
    }

    const sorteeriTeineTahtAZ =() => {
      books.sort((a,b) => a[1].localeCompare(b[1]));
      renewBooks(books.slice());
    }

    const sorteeriSonadeArv =() => {
      const sortedBooks = [...books]; 
  
      sortedBooks.sort((a, b) => {
        const sonadeArvA = a.split(' ').length; 
        const sonadeArvB = b.split(' ').length; 
        return sonadeArvA - sonadeArvB;
      });
  
      renewBooks(sortedBooks);
    };

    const sorteeriEelviimaneTaht =() => {
      const sortedBooks = [...books]; 
  
      sortedBooks.sort((a, b) => {
        const eelviimaneTahtA = a[a.length - 2]; 
        const eelviimaneTahtB = b[b.length - 2]; 
        return eelviimaneTahtA.localeCompare(eelviimaneTahtB);
      });
  
      renewBooks(sortedBooks);
    };

    const filtreeriTheAlgavad = () => {
      const vastus = books.filter(book => book.startsWith("The"));
      renewBooks(vastus);
  }

    const filtreeriAnd = () => {
      const vastus = books.filter(book => 
      book.toLowerCase().includes("and"));
      renewBooks(vastus);
}

    const filtreeri10Tahemarkidega = () => {
  const vastus = books.filter(book => book.length >= 10 );
  renewBooks(vastus);
}

    const filtreeri7Tahemarkidega = () => {
  const vastus = books.filter(book => book.length <= 7);
  renewBooks(vastus);
}

    const filtreeri3Sonalised = () => {
  const vastus = books.filter(book => book.split(' ').length === 3);
  renewBooks(vastus);
}

    const filtreeriEelviimaneTahtC = () => {
  const vastus = books.filter(book => {
    const eelViimaneTahtC = book[book.length -2];
    return eelViimaneTahtC.toLowerCase() === "c";
  });
  
  renewBooks(vastus);
}

  return (
    <div> <br />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahtedeArvKasv}>Sorteeri sõnapikkuse järgi</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teise tähe järgi</button>
      <button onClick={sorteeriSonadeArv}>Sorteeri sõnade arvu järgi</button>
      <button onClick={sorteeriEelviimaneTaht}>Sorteeri eelviimase tähe järgi</button>
      <br />
      <button onClick={filtreeriTheAlgavad}>Jäta alles “The”-ga algavad</button>
      <button onClick={filtreeriAnd}>Jäta alles kellel keskel on “and”</button>
      <button onClick={filtreeri10Tahemarkidega}>Jäta alles rohkemate tähemärkidega sõnad kui 10</button>
      <button onClick={filtreeri7Tahemarkidega}>Jäta alles vähemate tähemärkide sõnad kui 7</button>
      <button onClick={filtreeri3Sonalised}>Jäta alles kolme või rohkema sõnalised</button>
      <button onClick={filtreeriEelviimaneTahtC}>Jäta alles kellel eelviimane täht on “c”</button>
      {books.map(book => <div>{book}</div>)}
    </div>
  )
}

export default Books
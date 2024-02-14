import React from "react";
import logo from './assets/logo.svg';

import { NoteCard } from "./components/note-card";
import { NewCard } from "./components/new-card";

const note = {
  date: new Date(),
  content: "Hello World"
}

export function App() { // componentes funções em que a primeira letra é maiscula, que devolvem HTML
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logo carol" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque as suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
       
        <NewCard />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />
        <NoteCard note={note} />

      </div>
    </div>
  ) // a partir do momento que o html é utilizado dentro do tsx ele se torna JSX e não mais HTML
} // é só uma representação de html 




/* tailwind css tem a vantagem de ser padronizado, sua aplicação do
 inicio ao fim, nao importa qual dev codifica a aplicação */

import { useState } from 'react';
import './App.css';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [alunos, setAlunos] = useState([]);

  function cadastrarAluno(event) {
    event.preventDefault();

    if (!nome.trim() || !curso.trim()) {
      return;
    }

    const novoAluno = {
      id: crypto.randomUUID(),
      nome: nome.trim(),
      curso: curso.trim()
    };

    setAlunos([...alunos, novoAluno]);
    setNome('');
    setCurso('');
  }

  return (
    <main className="container">
      <header className="cabecalho">
        <span className="marca">SENAC · SISTEMA</span>
        <h1>Cadastro de alunos</h1>
        <p>Gerencie seus registros de forma simples.</p>
      </header>

      <section className="painel">
        <h2>Novo aluno</h2>

        <form onSubmit={cadastrarAluno}>
          <label htmlFor="nome">Nome completo</label>
          <input
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Digite o nome"
            required
          />

          <label htmlFor="curso">Curso</label>
          <input
            id="curso"
            value={curso}
            onChange={(event) => setCurso(event.target.value)}
            placeholder="Ex.: Técnico em Informática"
            required
          />

          <button type="submit">Cadastrar aluno</button>
        </form>
      </section>

      <section className="painel">
        <h2>Alunos cadastrados ({alunos.length})</h2>

        {alunos.length === 0 ? (
          <p className="vazio">Nenhum aluno cadastrado ainda.</p>
        ) : (
          <ul className="lista">
            {alunos.map((aluno) => (
              <li key={aluno.id}>
                <div>
                  <strong>{aluno.nome}</strong>
                  <p>{aluno.curso}</p>
                </div>

                <button
                  className="excluir"
                  type="button"
                  onClick={() =>
                    setAlunos(
                      alunos.filter((item) => item.id !== aluno.id)
                    )
                  }
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

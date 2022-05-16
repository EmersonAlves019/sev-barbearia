import React from 'react';
 

import * as S from './styles'
 
export default function Schedule() {
  const service = [
    'Corte degrade',
    'Corte navalhado',
    'Corte social',
    'Corte moicano',
    'Barba terapia',
    'Limpeza de Pele com Máscara Preta',
    'Sobrancelha',
    'Alisamento',
    'Luzes',
    'Progressiva'
  ]

  return (
    <S.ScheduleContainer id='agendamento'>
      
      
      <h2>Faça um agendamento</h2>

      <form>
         <div className="form-header">
            <div>
                <label htmlFor="nome">Nome</label>
                <input name="nome" id="nome" placeholder="Digite o seu nome" type="text"/>
            </div>

            <div>
                <label htmlFor="email">E-mail</label>
                <input name="email" id="email" placeholder="Digite o seu e-mail" type="email"/>
            </div>

            <div>
                <label htmlFor="telefone">Telefone</label>
                <input name="telefone" id="telefone" placeholder="Digite o seu telefone" type="tel"/>
            </div>

            <div>
                <label htmlFor="servico">Tipo de serviço</label>
                <select name="servico" id="servico">
                  {service.map((item) => (<option key={item}>{item}</option>))}
                </select>
          </div>

        </div>
        <section>
            <div>
                <label htmlFor="telefone">Data</label>
                <input name="telefone" id="telefone" placeholder="Digite o seu telefone" type="date"/>
            </div>
            <div>
                <label htmlFor="telefone">Horário</label>
                <input name="telefone" id="telefone" placeholder="Digite o seu telefone" type="time"/>
            </div>
        </section>
                <label htmlFor="mensagem">Mensagem:</label>
                <textarea name="mensagem" id="mensagem" cols="30" rows="6"></textarea>
                <button>Enviar</button>
          </form>
    </S.ScheduleContainer>
  );
}
